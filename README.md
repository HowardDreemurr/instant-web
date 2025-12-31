# INSTANT (React + TypeScript) — Jane Goodall–inspired structure

Top navigation:
- Home
- Our Work
- Our Impact
- Contact

## Local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
A GitHub Actions workflow is included at:
- `.github/workflows/deploy.yml`

This app uses **HashRouter** so routing works on GitHub Pages.

## Edit content
- Edit content directly in `src/pages/*` and `src/components/hero/JgiHero.tsx`

## Replace background images
- Place images in `public/images/*`
- Update `imageUrl` in pages/components if you rename files
