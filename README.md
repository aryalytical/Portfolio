# Shri — Portfolio

Warm, minimal portfolio with light and dark mode. Plain HTML, CSS and JavaScript — no build step, no dependencies (only Google Fonts: Playfair Display, Inter, Caveat).

## Structure
- `index.html` — page layout and the hero/About wording
- `css/style.css` — styles; colors for both themes are the variables at the top
- `js/script.js` — **all your content lives at the top of this file**
- `assets/` — images, icons, resume
- `projects/` — optional, for screenshots or per-project pages

## Run
Double-click `index.html`, use VS Code Live Server, or run `python -m http.server` here and open http://localhost:8000.

## Customize
- **Personal info, links, email, photo:** `portfolioConfig` in `js/script.js`
- **Projects:** copy one block in the `projects` array
- **Skills (and which tab they appear under):** `skillGroups`; set each item to `using`, `learning` or `exploring`
- **Journey, education, achievements:** the arrays below the skills
- **Colors:** `:root` (light) and `:root[data-theme="dark"]` in `css/style.css`
- **Fonts:** the Google Fonts link in `index.html` and `--serif`, `--sans`, `--hand` in the CSS
- **Profile photo:** save it in `assets/images/`, then set `photo: "assets/images/me.jpg"`
- **About/hero wording:** `index.html`

Anything starting with `[` is a placeholder. Hero and footer social icons only appear once you add a real link.

## Deploy
- **Vercel:** push to GitHub, import the repo, preset "Other", no build command.
- **GitHub Pages:** Settings → Pages → deploy from `main` / root.
After deploying, uncomment/add the Open Graph image and URL tags in `index.html`.
