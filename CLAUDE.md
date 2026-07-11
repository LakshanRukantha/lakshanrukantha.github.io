# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Lakshan Rukantha, hosted on GitHub Pages at https://lakshanrukantha.github.io. It is a static site — plain HTML/CSS/JavaScript with no build step, no package manager, and no tests. Pushing to `master` deploys the site.

## Development

There is nothing to build or install. To preview locally, open `index.html` in a browser or serve the directory, e.g.:

```
python -m http.server
```

CI (`.github/workflows/jekyll-docker.yml`) runs a Jekyll docker build on push/PR to `master`; there is no Jekyll config in the repo — GitHub Pages serves the files as-is.

## Architecture

Everything lives on a single page, `index.html`, split into sections with ids: `intro`, `about`, `bio`, `skills`, `projects`, `milestones`, `contact`. Navigation, the preloader, and section scrolling all target these ids from `js/main.js`.

- `js/main.js` — all site behavior in one file: nav toggle and smooth scrolling, scroll progress bar, an inlined (minified) Typewriter.js bundle used for the preloader and intro typing effect, VanillaTilt image hover setup, contact form submission, and the 3D rotating projects carousel.
- **Projects carousel**: project entries are hardcoded in the `projectData` array at the bottom of `js/main.js` (not in the HTML). Cards are generated from a template string and arranged in a 3D circle animated with GSAP; the last two entries are lorem-ipsum placeholders. Thumbnails live in `img/thumbnails/`. To add a project, add an object to `projectData`.
- `css/main.css` — global styles; `css/projects.css` — carousel styles (the 3D layout depends on `--rotation` and `--distance` custom properties set from JS).
- `js/tilt.js` (VanillaTilt) is vendored; other dependencies (Bootstrap 5, GSAP, AOS, Font Awesome, SweetAlert) load from CDNs in `index.html`. The Lottie player and December-only snowflakes are lazy-loaded from JS — don't add them back as static script tags. The site is deliberately jQuery-free.

## External integrations

- Contact form posts to Formspree (`https://formspree.io/f/mvoepnjr`); success/failure feedback uses SweetAlert.
- Google AdSense (publisher id in `index.html` and `ads.txt`), ad-blocking-recovery snippet, and Google Analytics (gtag `G-9ZW2LKR6BL`) are embedded in `index.html` — preserve these when editing the head.
- SEO/OpenGraph meta tags in `index.html` are actively maintained; keep them consistent when changing site content.
