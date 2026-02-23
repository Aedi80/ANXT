# ANXT

ANXT is a calm, mobile-first web app for in-the-moment anxiety and panic support through guided grounding activities.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Local data model and browser storage (`localStorage` + `sessionStorage`)

## Features
- No-login home and panic-first CTA flow
- Panic Mode with guided 60s / 3m / 10m protocols
- Searchable tools library and dynamic tool detail pages
- Learn + About pages with concise, supportive copy
- Sticky header with always-visible Panic Mode and Quick Exit
- Calm Mode settings (large text, high contrast, reduced motion)
- Accessibility-minded focus states and readable controls
- Basic offline-friendly service worker caching
- Safety disclaimers and emergency escalation guidance

## Getting started
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment
- Recommended: Vercel
- Import this repository, keep default Next.js build settings, and deploy.

## Notes
ANXT is not a medical device or emergency service. If someone is in immediate danger, they should contact local emergency services and a trusted person right away.
