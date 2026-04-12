# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Contexte du projet

Site web statique personnel pour organiser un voyage en groupe en Italie (5–19 septembre 2026). Les voyageurs sont Pascal & Marie-Eve et Suzie & Patrick. Aucun framework, aucun bundler, aucune dépendance npm — HTML, CSS et JavaScript vanilla uniquement.

## Architecture

- **`index.html`** — Page d'accueil : timeline du voyage, infos pratiques (vols, hébergements, transports).
- **`itineraire.html`** — Détail jour par jour de l'itinéraire.
- **`carte.html`** — Carte interactive du voyage.
- **`checklist.html`** — Liste de bagages interactive (cases à cocher).
- **`reservations.html`** — Récapitulatif de toutes les réservations.
- **`ressources.html`** — Liens et ressources utiles.
- **`css/style.css`** — Feuille de style partagée utilisée par `index.html`. Les autres pages embarquent leur CSS directement dans une balise `<style>` inline.
- **`js/main.js`** — Script partagé (menu hamburger, opacité nav au scroll, animations IntersectionObserver).

## Design system

Les variables CSS suivantes définissent la palette et doivent rester cohérentes sur toutes les pages :

```css
--terracotta: #C1440E
--terracotta-light: #E8622A
--gold: #C9963A
--cream: #FAF6EF
--dark: #1A1208
--font-display: 'Cormorant Garamond', Georgia, serif
--font-body: 'Jost', sans-serif
```

Couleurs des groupes : `--color-groupe` (terracotta) pour les étapes à 4, `--color-pascal` (orange) pour Pascal & Marie-Eve, `--color-suzie` (gold) pour Suzie & Patrick.

## Conventions importantes

- **CSS dupliqué** : chaque page autonome (itineraire, checklist, reservations…) redéclare les variables `:root` et les styles de navigation en inline. C'est intentionnel — les pages doivent fonctionner sans dépendance externe si `style.css` n'est pas chargé.
- **Pas de build** : ouvrir directement les fichiers `.html` dans un navigateur suffit. Il n'y a pas de serveur de développement à lancer.
- **Langue** : tout le contenu est en français.

## Workflow Git

- Commits et push via terminal Git (jamais via l'éditeur GitHub en ligne)
- Fichiers modifiés uploadés par drag-and-drop sur GitHub si nécessaire
- Remote : https://github.com/pdaigle1974/italia-2026
- Site en ligne : https://pdaigle1974.github.io/italia-2026/

## Fonctionnalités à venir (ne pas supprimer les placeholders existants)

- **Section bagages** (`checklist.html`) — liste de vérification de bagages interactive, à construire
- **Page photos** (`photos.html`) — lien vers album Google Photos public "Italia 2026" (album pas encore créé)
- **Section Info pratique** (`ressources.html`) — liens vers sites gouvernementaux italiens, compagnies de train, ambassades/consulats canadiens à Rome, Palerme, Catane, Venise, Florence et Naples

## État des réservations

**Confirmées :**
- Vols : TS 402 (YUL→FCO) et TS 403 (FCO→YUL), FR 4906 (Rome→Palerme)
- Activités GetYourGuide : excursion Etna (13 sept), croisière Amalfi (16 sept), visite Pompéi (17 sept)
- Hébergements : Rome/Monti, Palerme/Via Porta Carini, Florence, Venise/Dorsoduro, Naples/Piazza San Gaetano 81
- Hébergement Catane : Via S.Maria la Stalla, 111

**En attente :**
- Transport Palerme→Catane : à réserver
- Train Naples→Rome (18 sept) : à réserver
