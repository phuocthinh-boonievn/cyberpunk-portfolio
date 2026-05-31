# Neural Link — Cyberpunk Portfolio

Personal developer portfolio for **Nguyễn Phan Phước Thịnh**. Static HTML/CSS/JS — no build step, free hosting friendly.

## Features

- Neon cyberpunk UI with matrix rain, scanlines, glitch effects
- Interactive terminal typewriter, skill bars, project filters
- Sections: About, Experience, Skills, Projects, Certificates, Contact
- Resume PDF download (`assets/resume.pdf`)
- Mobile-responsive navigation

## Local preview

Open `index.html` in a browser, or run a simple server:

```bash
# Python
python -m http.server 8080

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8080`.

## Deploy free (GitHub Pages)

1. Create a new repo on GitHub (e.g. `cyberpunk-portfolio`).
2. Push this folder:

```bash
cd cyberpunk-portfolio
git init
git add .
git commit -m "Initial cyberpunk portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cyberpunk-portfolio.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source**: Deploy from branch `main`, folder `/ (root)`.
4. Site URL: `https://YOUR_USERNAME.github.io/cyberpunk-portfolio/`

> For a **user site** (`username.github.io`), put files in the repo root and use that repo name exactly.

## Other free hosts

| Host | How |
|------|-----|
| [Netlify](https://www.netlify.com) | Drag & drop the folder or connect the GitHub repo |
| [Cloudflare Pages](https://pages.cloudflare.com) | Connect repo, build command: none, output: `/` |
| [Vercel](https://vercel.com) | Import repo as static site |

## Customize

- Edit content in `js/main.js` (skills, projects, certs arrays)
- Colors/fonts in `css/styles.css` (`:root` variables)
- Replace `assets/resume.pdf` when you update your resume

## License

Personal portfolio — © Nguyễn Phan Phước Thịnh
