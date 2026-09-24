# Elephorm — Maîtriser macOS 27 Golden Gate

Site vitrine de la formation **Maîtriser la bureautique avec macOS 27 Golden Gate**.

## Stack

- **Next.js 15** (export statique)
- **React 19**, **Tailwind CSS 4**, **shadcn/ui**
- **GitHub Pages** pour l'hébergement

## Développement local

```bash
pnpm install
pnpm dev
```

Le site démarre sur http://localhost:3000.

## Build & déploiement

```bash
pnpm build
```

Le dossier `out/` contient les fichiers statiques prêts à déployer.

Le déploiement sur **GitHub Pages** est automatique via GitHub Actions à chaque push sur `main`.
