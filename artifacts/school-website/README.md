# VGGHSS School Website

React + Vite + TypeScript + Tailwind website for **Late. Vimalbai Gangadhar Gaikwad Secondary & Higher Secondary School**.

---

## 1) Run locally (VS Code)

Requires **Node.js 20+** and **npm** (or pnpm/bun).

```bash
# from inside this folder: artifacts/school-website
npm install
npm run dev
```

Open http://localhost:5173

> The `dev` script reads `PORT` from env if set, otherwise defaults to **5173**.
> To use a different port:
> ```bash
> PORT=3000 npm run dev      # macOS / Linux
> set PORT=3000 && npm run dev   # Windows CMD
> $env:PORT=3000; npm run dev    # Windows PowerShell
> ```

### Production build locally

```bash
npm run build
npm run serve
```

---

## 2) Deploy to Vercel

This folder is **fully Vercel-ready** — no monorepo configuration is required.

### Option A — Vercel Dashboard (easiest)

1. Push the project to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. **Set the Root Directory to** `artifacts/school-website`.
4. Framework preset: **Vite** (or "Other" — `vercel.json` handles it).
5. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd artifacts/school-website
vercel
```

### What's configured

`vercel.json` sets:
- `buildCommand`: `npm run build`
- `outputDirectory`: `dist/public`
- SPA rewrite: every route falls back to `index.html` (so deep links like `/about`, `/gallery` work on refresh).

No environment variables are required.

---

## Tech stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS v4
- wouter (router), framer-motion, shadcn/ui, lucide-react

## Pages

`/` Home · `/about` · `/courses` · `/achievements` · `/gallery` · `/contact`
