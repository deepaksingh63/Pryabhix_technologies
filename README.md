# Pryabhix Technologies — Website (React + Vite)

Same site, same content, rebuilt as a component-based React app using Vite.
No backend — plain client-side React, ready for static hosting (Vercel, Netlify,
GitHub Pages, cPanel with a static build, etc.).

## Project structure

```
pryabhix-technologies-react/
├── index.html              → Vite entry HTML (mounts #root)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx             → React root render
│   ├── App.jsx               → Assembles every section in order
│   ├── index.css             → All styling (same design system as before)
│   ├── config.js             → WhatsApp number + email (single source of truth)
│   ├── data.js                → All page content (services, portfolio, FAQ, etc.)
│   ├── context/ModalContext.jsx   → Shares "Start Your Project" modal open/close state
│   ├── hooks/
│   │   ├── useHeaderScroll.js     → Sticky navbar compact-on-scroll state
│   │   └── useReveal.js           → Scroll reveal animation (IntersectionObserver)
│   └── components/
│       ├── Header.jsx, Hero.jsx, TrustStrip.jsx, Services.jsx, WhyUs.jsx,
│       │   Solutions.jsx, Portfolio.jsx, Process.jsx, TechStack.jsx,
│       │   ValueSection.jsx, About.jsx, FAQ.jsx, Contact.jsx, FinalCTA.jsx,
│       │   Footer.jsx, WhatsAppFloat.jsx, StartProjectModal.jsx
│       └── Icons.jsx          → Shared inline SVG icon set
└── README.md
```

## Getting started

```bash
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build       # production build → outputs to dist/
npm run preview     # preview the production build locally
```

## Key things to know before editing

- **WhatsApp number** — edit once in `src/config.js`:
  ```js
  export const WHATSAPP_NUMBER = "916390758373"; // +91 63907 58373
  export const COMPANY_EMAIL = "pryabhixtechnologies@gmail.com";
  ```
  Every WhatsApp button/link across the whole site reads from this one constant.

- **Page content** (services, FAQs, portfolio projects, process steps, etc.) —
  all in `src/data.js` as plain arrays/objects. Edit text there instead of
  hunting through components.

- **Portfolio projects** — `portfolio` array in `src/data.js`. Each entry has a
  real, live `url`. Add a new project by adding one more object to that array —
  the grid picks it up automatically.

- **Design tokens (colors, spacing, radius)** — top of `src/index.css` under
  `:root { ... }`.

- **"Start Your Project" modal** — state is shared via `ModalContext`
  (`src/context/ModalContext.jsx`). Any component can open it with
  `const { openModal } = useModal()`.

## Deploying

This builds to a static `dist/` folder — deploy it exactly like any static site:

- **Vercel / Netlify**: connect the repo, build command `npm run build`,
  output directory `dist`.
- **GitHub Pages / cPanel**: run `npm run build` locally, then upload the
  contents of `dist/` to your host.

## Notes

- No fake clients, testimonials, stats or team members are used anywhere on the site.
- Portfolio cards link to real, live project deployments provided by the client.
- This project was not built/verified with `npm install` in this environment
  (no network access here) — the code has been carefully reviewed for syntax
  correctness, but please run `npm install && npm run dev` once locally and
  let me know if anything needs a fix.
