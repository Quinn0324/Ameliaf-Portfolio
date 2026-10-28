# Amélia Frédérick Portfolio — React + Bootstrap rebuild

A one-to-one rebuild of [ameliaf.design](https://ameliaf.design/) (originally a Webflow site) in
**React + Bootstrap**, as a fully self-contained, offline-capable copy.

## Stack
- **Vite + React 18** (SPA)
- **react-router-dom** — 7 routes
- **react-bootstrap + bootstrap 5** — interactive navbar/offcanvas + grid
- **react-helmet-async** — per-page `<title>` / meta / Open Graph tags
- Fonts: **Bona Nova** (headings) + **Figtree** (body), via Google Fonts
- All images/logos/icons are stored locally under `src/assets` (no external CDN calls)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact (form submits via the visitor's email client / mailto) |
| `/portfolio` | My Work (masonry gallery) |
| `/cs1` | Case study — TMS Life Rebrand |
| `/cs2` | Case study — Culinary Newsletter |
| `/cs3` | Case study — Watson's Farm Rebrand |

## Structure
```
src/
  main.jsx, App.jsx            # entry + router
  styles/                      # design tokens, base type/buttons, component + responsive CSS
  components/                  # Navbar, Footer, Layout, CtaBanner, ProcessStep, Reveal, Seo
  pages/                       # Home, About, Contact, Portfolio, CaseStudy
  data/caseStudies.js          # verbatim case-study content
  assets/                      # images / icons / logos (+ media.js registry)
```

## Fidelity notes
- The design system (colors `#771b1c` family, type scale, spacing, shadows, 60px gutters,
  breakpoints 991 / 767 / 479) is ported 1:1 from the original Webflow stylesheet.
- All copy is reproduced verbatim, including the live site's original wording.
- The contact form has no server; **Send** opens the visitor's mail client pre-filled to
  `ameliafrederick.401@gmail.com` (the original posted to Webflow's backend).
- Webflow scroll/hover interactions are reproduced with CSS + a small IntersectionObserver
  (`components/Reveal.jsx`): home hero slide-in, scroll reveals, navbar dropdown, mobile menu.
