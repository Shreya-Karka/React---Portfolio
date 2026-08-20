# Shreya Karka — Portfolio

🔗 **Live site:** https://shreya-karka-portfolio.vercel.app/

Hi, I'm Shreya Karka — a Software Developer with 5+ years of experience
building enterprise applications, from Spring Boot backends to AI-powered
features like RAG chatbots. This is my personal portfolio, built to give a
quick, visual overview of my work, experience, and how to get in touch.

## What's on the site

- **About & Experience** — my background and a timeline of roles at
  SVCL Technologies, American Express, University of North Texas,
  OpenText, and Clonut Solutions
- **Tech stack** — languages, frameworks, cloud, AI/ML tools, and more,
  organized by category
- **Projects** — real, working projects with links to live demos and
  source code on GitHub
- **Education & Certifications** — degrees and certs, each linking to the
  actual verified credential
- **Contact** — email, phone, social links, and a built-in meeting
  scheduler for Google Meet / MS Teams

Feel free to look around, and reach out through the Contact section on the
live site if you'd like to connect!

---

## For developers: running this project locally

This portfolio is built with **React + Vite**. If you're a developer
looking at the code (or want to fork this as a starting point for your own
portfolio), here's how it's organized and how to run it.

### Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

### Building for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

### Editing content

All page content (experience, skills, projects, education, certifications,
contact links, etc.) lives in `src/data.js`. Edit that file to update text —
the components render whatever is in there, so you generally won't need to
touch the JSX for content changes.

### Images & resume

- `public/images/` holds the photos used across the site:
  - `hero.jpg` — hero portrait (circular frame)
  - `about.jpg`, `collage1.jpg`–`collage4.jpg` — used in the About section's
    photo carousel
  - Swap any of these out (keep the same filenames) to update photos without
    touching code.
- `public/resume.pdf` — the file served by the "Download Resume" button on
  the About section. Replace it with an updated resume any time; the button
  always points at this exact filename.

### Visitor counter

The "Portfolio visitors so far" number on the Contact section is a real,
persistent count powered by [Abacus](https://abacus.jasoncameron.dev) — a
free, no-auth counting API. It starts at 0 and increments by 1 the first
time a new visitor loads the page from a given browser (guarded by
`localStorage`, so reopening the site later from the same browser won't
count again).

See `src/hooks/useVisitorCount.js` — if you want a fresh count starting
back at 0, change the `NAMESPACE` or `KEY` constant there to a new unique
value.

Note: local development (`localhost`) is deliberately excluded and always
shows a static 0 — only the deployed, publicly reachable site counts real
visits.

### Structure

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

### Deploying

This is a static Vite build, so it deploys easily to GitHub Pages, Vercel,
or Netlify. For GitHub Pages, set `base` in `vite.config.js` to your repo
name (e.g. `base: '/portfolio/'`) before running `npm run build`, then
publish the `dist/` folder.

## License

The code in this repository is licensed under the [MIT License](./LICENSE) —
feel free to fork, reuse, or adapt it for your own portfolio.

Note: the MIT license covers the code only. The personal content —
resume (`public/resume.pdf`), photos (`public/images/`), and any text in
`src/data.js` describing Shreya Karka's experience, projects, or
credentials — is not covered and shouldn't be reused as-is; swap those out
with your own if you fork this.
