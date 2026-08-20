# Pryabhix Technologies — React + Vite

A multi-page agency website built with React, React Router, and plain CSS (dark
theme with a "fire" hover effect on nav links).

## Pages
- `/` — Home
- `/services` — Services
- `/portfolio` — Portfolio (with working category filters)
- `/process` — Process
- `/testimonials` — Testimonials
- `/contact` — Contact (form with local state + success message)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.jsx      sticky nav, scroll-shrink, mobile menu, active-link fire glow
    Footer.jsx       company info + links
  pages/
    Home.jsx
    Services.jsx
    Portfolio.jsx
    Process.jsx
    Testimonials.jsx
    Contact.jsx
  data/
    content.js       all services / projects / process / testimonials / company info in one place
  App.jsx             routes
  main.jsx            entry point
  index.css           all styling
```

## Editing content
All text content (services, portfolio projects, process steps, testimonials,
company phone/email/location) lives in `src/data/content.js` — edit it there
instead of hunting through each page.

## Connecting the contact form to a backend
Right now `Contact.jsx` just logs the form values and shows a success message.
To make it real, replace the `console.log` in `handleSubmit` with an API call,
e.g.:

```js
await fetch('/api/inquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

## Notes
- No backend, database, or admin dashboard is included here — this is the
  frontend only, matching the design from the earlier HTML version.
- Testimonials are clearly labeled as sample/demo content.
