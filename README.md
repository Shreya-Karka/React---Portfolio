# Shreya Karka — Portfolio

A personal portfolio site built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Building for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Editing content

All page content (experience, skills, projects, education, certifications,
contact links, etc.) lives in `src/data.js`. Edit that file to update text —
the components render whatever is in there, so you generally won't need to
touch the JSX for content changes.

## Images & resume

- `public/images/` holds the photos used across the site:
  - `hero.jpg` — hero portrait (circular frame)
  - `about.jpg`, `collage1.jpg`–`collage4.jpg` — used in the About section's
    photo carousel
  - Swap any of these out (keep the same filenames) to update photos without
    touching code.
- `public/resume.pdf` — the file served by the "Download Resume" button on
  the About section. Replace it with an updated resume any time; the button
  always points at this exact filename.

## Visitor counter

The "Portfolio visitors so far" number on the Contact section is a real,
persistent count powered by [Abacus](https://abacus.jasoncameron.dev) — a
free, no-auth counting API. It starts at 0 and increments by 1 each time a
new visitor loads the page (guarded by `sessionStorage` so repeat page
loads in the same tab don't double-count).

See `src/hooks/useVisitorCount.js` — if you want a fresh count starting
back at 0, just change the `NAMESPACE` or `KEY` constant there to a new
unique value.

Note: this only counts real visits once the site is actually deployed and
publicly reachable — it won't increment while only running locally against
`localhost`, since that's expected behavior for any visitor counter.

## Structure

```
src/
  App.jsx              - composes all sections + loading screen
  data.js               - all editable content (experience, skills, projects, etc.)
  index.css             - design tokens + global styles
  components/
    Nav.jsx              - fixed top navigation
    Hero.jsx             - name, role typewriter, portrait, stats
    Typewriter.jsx        - cycling role-title effect
    About.jsx            - bio + photo carousel + resume download
    Carousel.jsx          - auto-advancing photo carousel (About section)
    Experience.jsx        - work history timeline
    Tech.jsx              - skills grid + illustration
    CodingIllustration.jsx - hand-drawn SVG illustration (no external assets)
    Projects.jsx          - project cards + "View More on GitHub"
    Education.jsx         - degrees
    Recognitions.jsx      - workplace awards
    Certifications.jsx    - certs, each linking to its real credential
    Contact.jsx           - contact info, meeting scheduler, visitor count
    Loader.jsx            - branded splash screen on first load
    Reveal.jsx             - scroll-triggered fade/slide-in wrapper
    TechIcon.jsx           - maps skill/brand names to react-icons logos
    Footer.jsx
```

## Deploying

This is a static Vite build, so it deploys easily to GitHub Pages, Vercel,
or Netlify. For GitHub Pages, set `base` in `vite.config.js` to your repo
name (e.g. `base: '/portfolio/'`) before running `npm run build`, then
publish the `dist/` folder.
