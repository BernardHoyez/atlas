// Atlas — portail d'accueil
// Pour ajouter une application, complète simplement le tableau APPS ci-dessous.

const APPS = [
  {
    plate: 'PL.01',
    group: 'outils',
    name: 'geotour',
    url: 'https://bernardhoyez.github.io/geotour/',
    simple: 'Crée un itinéraire : waypoints photographiés, fond de carte IGN, export en visite guidée.',
    full: 'L\'outil d\'édition central de l\'atelier. Waypoints géolocalisés (photo ou pointage manuel), fonds de carte OSM/IGN, profil altimétrique, mode Visite audio-guidée, export KML/GPX/KMZ ou paquet de déploiement autonome. Tous les sites de randonnées ci-dessous sont produits avec geotour.',
    install: 'installation : ouvrir le lien, puis "ajouter à l\'écran d\'accueil" (fonctionne hors-ligne une fois installé)'
  },
  {
    plate: 'PL.02',
    group: 'outils',
    name: 'terrain',
    url: 'https://bernardhoyez.github.io/terrain/',
    simple: 'Suit un itinéraire sur le terrain, sans aucun réseau, avec position GPS en direct.',
    full: 'Compagnon de terrain pensé pour l\'absence totale de réseau : charge un circuit préparé avec geotour, affiche un fond orthophoto IGN embarqué (MBtiles) et une position GPS en direct. Sert aussi à générer les fiches du catalogue albatre.',
    install: 'installation : ouvrir le lien, puis "ajouter à l\'écran d\'accueil" — télécharger le circuit avant de partir'
  },
  {
    plate: 'PL.03',
    group: 'outils',
    name: 'photo2kml',
    url: 'https://bernardhoyez.github.io/photo2kml/',
    simple: 'Transforme une photo géolocalisée en repère KML/GPX.',
    full: 'Outil ponctuel : à partir d\'une photo contenant des coordonnées GPS (EXIF), génère un repère au format KML, GPX ou KMZ, exploitable dans geotour ou tout autre lecteur de cartes.',
    install: 'usage ponctuel dans le navigateur, aucune installation nécessaire'
  },
  {
    plate: 'PL.07',
    group: 'outils',
    name: 'synchrophoto',
    url: 'https://bernardhoyez.github.io/synchrophoto/',
    simple: 'Corrige et complète les données EXIF des photos à partir d\'une trace GPX/KML.',
    full: 'Géotague ou corrige les coordonnées EXIF d\'un lot de photos à partir d\'une trace GPX/KML, avec calibrage du décalage horaire par photo-témoin et aperçu des fichiers RAW. Utile avant d\'utiliser une photo dans geotour ou photo2kml quand le GPS de l\'appareil a dérivé ou manque.',
    install: 'installation : ouvrir le lien, puis "ajouter à l\'écran d\'accueil"'
  },
  {
    plate: 'PL.08',
    group: 'outils',
    name: 'kml2gpx',
    url: 'https://bernardhoyez.github.io/kml2gpx/',
    simple: 'Convertit un fichier KML en GPX, et inversement.',
    full: 'Conversion bidirectionnelle KML ↔ GPX, avec fonds de carte IGN Géoplateforme pour vérifier visuellement le résultat. Utile quand un appareil ou un logiciel n\'accepte qu\'un seul des deux formats.',
    install: 'usage ponctuel dans le navigateur, aucune installation nécessaire'
  },
  {
    plate: 'PL.09',
    group: 'outils',
    name: 'mp3generator',
    url: 'https://bernardhoyez.github.io/mp3generator/',
    simple: 'Transforme un commentaire texte en fichier audio MP3.',
    full: 'Synthèse vocale hors-ligne (voix naturelle, sans limite d\'usage) à partir d\'un texte, avec export direct en MP3. Sert à préparer les commentaires audio d\'une visite guidée geotour sans les enregistrer soi-même.',
    install: 'installation : ouvrir le lien, puis "ajouter à l\'écran d\'accueil"'
  },
  {
    plate: 'PL.10',
    group: 'outils',
    name: 'waypoint_tri',
    url: 'https://bernardhoyez.github.io/waypoint_tri/',
    simple: 'Réordonne géographiquement les waypoints d\'un fichier KMZ.',
    full: 'Trie les waypoints d\'un fichier KMZ (photos géolocalisées attachées) par longitude ou par latitude, dans le sens choisi, et permet de vérifier le résultat sur une carte avec marqueurs numérotés (OSM, plan IGN, orthophotos). Produit un nouveau KMZ dans l\'ordre voulu, prêt pour geotour.',
    install: 'installation : ouvrir le lien, puis "ajouter à l\'écran d\'accueil"'
  },
  {
    plate: 'PL.04',
    group: 'vitrines',
    name: 'albatre',
    url: 'https://bernardhoyez.github.io/albatre/',
    simple: 'Catalogue des coupes géologiques de la Côte d\'Albâtre.',
    full: 'Site vitrine présentant une succession de coupes stratigraphiques dans les falaises de craie, entre les vallées de la Seine et de la Somme. Chaque fiche est produite sur le terrain avec l\'app terrain, puis publiée automatiquement au catalogue.',
    install: null
  },
  {
    plate: 'PL.05',
    group: 'vitrines',
    exemple: true,
    name: 'rollevillerando',
    url: 'https://bernardhoyez.github.io/rollevillerando/',
    simple: 'Randonnées autour du village de Rolleville — présenté ici en exemple.',
    full: 'Exemple de site de randonnées bâti à partir des fichiers exportés par geotour (visite, KML, GPX). Sert de modèle si tu veux publier tes propres randonnées de la même façon.',
    install: null
  },
  {
    plate: 'PL.06',
    group: 'vitrines',
    exemple: true,
    name: 'randovar',
    url: 'https://bernardhoyez.github.io/randovar/',
    simple: 'Randonnées du club de randonnée du Var — présenté ici en exemple.',
    full: 'Second exemple de site de randonnées généré à partir de geotour, pour un club de randonnée du Var. Même principe que rollevillerando, avec une identité visuelle propre.',
    install: null
  }
];

function cardHtml(app){
  const badge = app.exemple
    ? `<span class="badge-exemple">exemple</span>`
    : '';
  const install = app.install
    ? `<div class="install-note">${app.install}</div>`
    : '';
  return `
    <article class="card">
      <a class="card-link" href="${app.url}" aria-label="Ouvrir ${app.name}"></a>
      <div class="card-top">
        <span class="plate">${app.plate}</span>
        ${badge}
      </div>
      <h3>${app.name}</h3>
      <p class="simple">${app.simple}</p>
      <p class="full">${app.full}</p>
      <span class="cta">ouvrir
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </span>
      ${install}
    </article>`;
}

function render(){
  const outils = APPS.filter(a => a.group === 'outils');
  const vitrines = APPS.filter(a => a.group === 'vitrines');
  document.getElementById('outils-grid').innerHTML = outils.map(cardHtml).join('');
  document.getElementById('vitrines-grid').innerHTML = vitrines.map(cardHtml).join('');
  document.getElementById('outils-count').textContent = outils.length;
  document.getElementById('vitrines-count').textContent = vitrines.length;
}

function setLegend(mode){
  document.body.classList.toggle('legend-full', mode === 'full');
  document.getElementById('btn-simple').classList.toggle('active', mode === 'simple');
  document.getElementById('btn-full').classList.toggle('active', mode === 'full');
  try { localStorage.setItem('atlas-legend', mode); } catch(e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('btn-simple').addEventListener('click', () => setLegend('simple'));
  document.getElementById('btn-full').addEventListener('click', () => setLegend('full'));
  let saved = 'simple';
  try { saved = localStorage.getItem('atlas-legend') || 'simple'; } catch(e) {}
  setLegend(saved);
});
