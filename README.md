# 🚀 My Portfolio Website — Build Guide

A step-by-step checklist to build my personal portfolio as a **Data Engineer** (and future app developer), using **Next.js + React + Tailwind CSS**, deployed free on **Vercel**.

---

## ✅ Phase 1 — Prepare Content

Gather these before writing code:

- [ ] **Bio / tagline** — e.g. *"Data Engineer building reliable data pipelines & applications."*
- [ ] **Projects (3–6)** — for each one:
  - [ ] Project name
  - [ ] Problem it solves
  - [ ] My role
  - [ ] Tech stack (Python, SQL, Airflow, Spark, dbt, Kafka, AWS/GCP, etc.)
  - [ ] Link (GitHub repo or live demo)
- [ ] **Skills**, grouped:
  - [ ] Languages (Python, SQL, ...)
  - [ ] Data tools (Airflow, dbt, Spark, ...)
  - [ ] Cloud (AWS, GCP, ...)
  - [ ] Databases (PostgreSQL, BigQuery, ...)
- [ ] **Resume** (PDF)
- [ ] **Contact** — email, GitHub, LinkedIn
- [ ] **Photo** (optional)

---

## 🛠️ Phase 2 — Install Tools

Install these on my computer:

- [ ] **Node.js** (LTS version) → https://nodejs.org
  - Verify: `node -v` and `npm -v`
- [ ] **VS Code** (code editor) → https://code.visualstudio.com
- [ ] **Git** → https://git-scm.com
  - Verify: `git --version`
- [ ] **GitHub account** → https://github.com
- [ ] **Vercel account** (sign in with GitHub) → https://vercel.com

---

## 📦 Phase 3 — Create the Project

```bash
# Create a new Next.js app (with Tailwind + TypeScript)
npx create-next-app@latest my-portfolio

# Move into the folder
cd my-portfolio

# Start the local dev server
npm run dev
```

- [ ] Open **http://localhost:3000** in the browser to confirm it works.

> 💡 When the installer asks questions, recommended answers: **TypeScript → Yes**, **Tailwind → Yes**, **App Router → Yes**.

---

## 🎨 Phase 4 — Build the Website (with Claude)

Page structure to build:

- [ ] **Hero** — name + tagline + call-to-action button
- [ ] **About** — short bio
- [ ] **Skills** — grouped skill badges
- [ ] **Projects** — cards with description + links
- [ ] **Contact** — email + social links

> 🤝 This is where Claude writes the code section-by-section. Just share the content from Phase 1.

---

## 🔁 Phase 5 — Save to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"

# Create an empty repo on GitHub first, then:
git remote add origin https://github.com/USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌍 Phase 6 — Deploy to Vercel (Free)

- [ ] Go to https://vercel.com → **New Project**
- [ ] **Import** my GitHub repo
- [ ] Click **Deploy**
- [ ] Get a live URL like `my-portfolio.vercel.app` 🎉

> Every time I `git push`, Vercel auto-updates the live site.

---

## ✨ Phase 7 — Polish (Optional)

- [ ] Buy a custom domain (e.g. `myname.com`) and connect it in Vercel
- [ ] Add SEO meta tags + favicon
- [ ] Make it responsive on mobile
- [ ] Add light/dark mode
- [ ] Add a contact form

---

## 📌 Quick Command Reference

| Action | Command |
|---|---|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Save changes | `git add . && git commit -m "message"` |
| Push to GitHub | `git push` |

---

**Next step:** Finish Phase 1 (gather content), install Phase 2 tools, then come back and we build the code together. 💪
