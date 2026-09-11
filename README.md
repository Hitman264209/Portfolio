# Portfolio — Subhrajit Tripathy

A single-page personal portfolio site. Plain HTML/CSS/JS, no build step, no framework — deploys straight to Vercel.

**Sections:** hero, quick stats, projects (HealthScope, Expense Tracker, SmartRep), skills, resume download, contact.

## Files

- `index.html` — page structure and content
- `style.css` — all styling
- `script.js` — hero typing effect
- `Subhrajit_Tripathy_Resume.pdf` — downloadable resume, linked from the Resume buttons

## Run locally

No install needed. Open `index.html` directly in a browser, or serve it:

```
python -m http.server 8080
```

Then visit http://localhost:8080

## Deploy

Push this folder to a GitHub repo, then import it on vercel.com — Vercel auto-detects a static site, no build settings needed.

## Updating content

- Project cards, skills, and contact info: edit directly in `index.html`
- Colors and fonts: edit the `:root` variables at the top of `style.css`
- To swap the resume: replace `Subhrajit_Tripathy_Resume.pdf` with a new file of the same name
