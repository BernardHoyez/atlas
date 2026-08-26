# Atlas

Portail d'accueil statique reliant les applications et sites de randonnée / géologie de terrain :

- **geotour** — création d'itinéraires
- **terrain** — suivi hors-ligne sur le terrain
- **photo2kml** — photo géolocalisée → repère KML/GPX
- **synchrophoto** — correction des données EXIF des photos (géotagage, calibrage horaire)
- **albatre** — catalogue des coupes géologiques de la Côte d'Albâtre
- **rollevillerando** (exemple) — randonnées du village de Rolleville
- **randovar** (exemple) — randonnées d'un club de randonnée du Var

Aucune app existante n'est modifiée : Atlas est un simple point d'entrée statique, sans backend.

## Niveau de lecture

La page propose une "légende" à deux niveaux, comme une carte IGN :
- **simplifiée** : une phrase par outil, pour un premier repérage.
- **complète** : description détaillée + note d'installation, pour aller plus loin.

Le choix est mémorisé (localStorage) d'une visite à l'autre.

## Ajouter une application

Tout se passe dans `app.js`, tableau `APPS` en tête de fichier. Chaque entrée :

```js
{
  plate: 'PL.07',        // référence de planche (juste après la dernière existante)
  group: 'outils',       // 'outils' ou 'vitrines'
  exemple: true,         // optionnel — affiche le badge "exemple"
  name: 'nom-app',
  url: 'https://...',
  simple: '...',         // légende simplifiée
  full: '...',           // légende complète
  install: '...'         // optionnel — note d'installation
}
```

## Déploiement

Fichiers statiques, prêts pour GitHub Pages (`bernardhoyez.github.io/atlas`) ou tout autre hébergement statique.

## Service worker

`sw.js` suit la convention "brise-cache" du reste de l'atelier : `CACHE_NAME` versionné (`atlas-cache-vN`), purge des anciens caches à l'activation, activation immédiate. À incrémenter à chaque modification d'un fichier statique (HTML/CSS/JS/manifest/icônes).

## Limites connues

- Les liens vers les 6 applications sont en dur dans `app.js` (pas de découverte automatique) — volontaire, vu le petit nombre d'entrées.
- Aucune vérification que les apps liées sont bien en ligne : un lien mort resterait affiché tel quel.
