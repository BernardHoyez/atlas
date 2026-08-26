const CACHE_NAME = 'atlas-cache-v1';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(),
      caches.keys().then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
    ])
  );
});

const SHELL_FILES = new Set(['index.html', 'style.css', 'app.js', 'manifest.json']);

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  const fileName = url.pathname.split('/').pop() || 'index.html';

  // Network-first pour la coquille de l'app (HTML/JS/CSS/manifest)
  if (request.mode === 'navigate' || SHELL_FILES.has(fileName)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first pour le reste (icônes, polices, etc.)
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
