# Koder Technologies Website

A responsive React + Vite portfolio/company website for Koder Technologies.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Before publishing

- Replace `hello@kodertechnologies.com` with the real company email if needed.
- Replace the generic GitHub link with the Koder Technologies GitHub profile.
- Add screenshots or live-demo links to project cards as projects become public.
- Update project status labels (Concept / Prototype / R&D / Portfolio) as work ships.

## Structure

- `src/App.jsx` – page content and React components
- `src/styles.css` – all site styling; no Tailwind
- `index.html` – document shell / SEO metadata

## Tests

```bash
npm test
```

The included dependency-free Node test suite checks the GitHub icon regression, navigation targets, project-card content, accessibility label, and contact link. The GitHub footer mark is implemented locally as SVG so it does not depend on a `lucide-react` GitHub export.
