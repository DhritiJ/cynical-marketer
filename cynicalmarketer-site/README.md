# Cynical Marketer Website

Lightweight one-page website with a dynamic visual style and detailed service specs.

## Files

- `index.html`
- `styles.css`
- `script.js`

## Run Locally

Open `index.html` directly in your browser, or run a tiny local server:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

## Free Hosting (Fastest: Netlify Drop)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the folder (or zip) containing `index.html`, `styles.css`, `script.js`
3. Netlify gives you a free live URL instantly
4. Optional: set a custom subdomain in site settings

## Free Hosting (GitHub + Netlify Recommended)

If you want version history and easier future edits:

1. Create a new empty GitHub repository
2. Upload all files from this folder
3. In Netlify, choose "Import from Git"
4. Pick that GitHub repo and deploy
5. Every GitHub push auto-updates your live site

Build settings for this project:
- Build command: *(leave empty)*
- Publish directory: `.`

## Free Hosting (Alternative: Cloudflare Pages)

1. Create a free Cloudflare account
2. Go to Pages -> Create project -> Upload assets
3. Upload these files
4. Deploy and get a free `*.pages.dev` URL

## Notes

- Contact form is frontend-only right now (no backend yet).
- To receive form submissions by email, connect Formspree or Netlify Forms next.
