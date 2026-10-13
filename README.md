# Alejandro Vargas · Portfolio

A single-page portfolio built with React and Vite.

Live at **https://avarg116.github.io**

## Stack
- React 18 + Vite
- Plain CSS with custom properties (light/dark themes)
- Inter font (Google Fonts)
- Icons from `lucide-react` and `react-icons`

## Setup
```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Editing
All personal content (name, links, bio, skills, projects) in `src/data.js`.

## Deployment
Every push to `main` builds the site and deploys it to GitHub Pages
automatically (`.github/workflows/deploy.yml`).
