# AdPulse — Frontend

Interface web d'AdPulse, une application de création et de suivi de liens publicitaires. Le frontend est construit avec **Vue 3**, **Vue Router** et **Vite**.

## Prérequis

- Node.js 20.19+ ou 22.12+
- npm

## Installation

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Démarre le serveur de développement Vite |
| `npm run build` | Compile l'application pour la production |
| `npm run preview` | Sert localement le build de production |
| `npm run check` | Vérifie que le build de production aboutit |

## Configuration

Les variables d'environnement Vite sont préfixées par `VITE_` et sont intégrées au bundle côté navigateur. N'y placez jamais de secret ou de clé privée.

- `VITE_API_URL` : URL de l'API backend. Par défaut, le frontend utilise l'instance de production AdPulse.
- `VITE_META_APP_ID` : identifiant public de l'application Meta (valeur par défaut fournie dans le projet).
- `VITE_META_CONFIG_ID` : identifiant de configuration Meta (valeur par défaut fournie dans le projet).

Le fichier `.env.example` documente les variables disponibles. Les autorisations réelles (utilisateur/admin) doivent toujours être vérifiées par le backend ; les protections du routeur frontend ne constituent pas une frontière de sécurité.

## Déploiement

Construire avec `npm run build`, puis publier le contenu de `dist/` sur l'hébergeur statique. Le serveur d'hébergement doit rediriger les routes inconnues vers `index.html` pour permettre le fonctionnement de Vue Router en mode history.

## Structure

- `src/pages/` : pages d'authentification
- `src/components/` : pages et composants de l'application
- `src/router/` : configuration Vue Router
- `src/config/` : configuration publique du frontend
