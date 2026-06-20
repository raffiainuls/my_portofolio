# CLAUDE.md

> Context file for the AI coding agent. Read this first before working on the project.
> It captures everything decided in the planning conversation so any agent can pick up
> exactly where we left off.

---

## 1. Project Summary

Build a **personal portfolio website** for **Raffi Ainul Afif**, positioned as a
**Data Engineer** (with a Data Science / Data Analysis background). The site showcases
13+ data projects, with each project built as a reusable **module** (data-driven page).
The site is also intended to grow into a platform for future application development.

**Goals:** get hired (recruiters), attract freelance clients, and build a personal brand — all three.

---

## 2. Owner Profile

- **Name:** Raffi Ainul Afif
- **Title:** Data Engineer (background in Data Science, Data Analysis, Data Cleaning)
- **Education:** Bachelor of Computer Science, University Muhammadiyah Malang (2018–2022)
- **Email:** raffiainultrueblues21@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/raffi-ainul-afif-9811a411b/
- **Phone:** +62 896-7153-2293
- **Experience level:** Some coding basics; relies on the agent to write production-quality code as an expert and explain it.

---

## 3. Key Decisions (LOCKED)

| Decision | Choice |
|---|---|
| Framework | **Next.js (App Router)** |
| UI | **React + Tailwind CSS** |
| Animations | **Framer Motion** |
| Language | **TypeScript** |
| Hosting | **Vercel** (free), code on **GitHub** |
| Theme | **Dark** — near-black background, off-white text |
| Accent color | **Cyan/teal `#22d3ee`** |
| Style reference | Majd template (https://majd-portfolio.framer.website/) — bold oversized type, minimal, project modules, smooth scroll animations. NOTE: Majd is a Framer template; we **recreate its style/structure in code**, we do NOT copy its code. |
| Homepage projects | **Featured projects + a separate full `/work` page** |
| Project structure | **Each project = a data module** (see §5) |

---

## 4. Core Concept — Projects as Modules

Every project is a **data object** in `data/projects.ts`. One template page renders any
project. **Adding a project = adding one object** (no new code). GitHub links and diagram
images are **optional fields**, so the site can be built before those are ready.

```typescript
// data/projects.ts — shape of one project module
{
  slug: "smile-platform",
  number: "14",
  title: "SMILE Platform (UNDP for Kemenkes)",
  category: "Data Engineering",   // "Data Engineering" | "Machine Learning" | "Data Analysis"
  featured: true,
  short: "National immunization logistics system — streaming + batch data platform.",
  description: "Full write-up (multi-paragraph).",
  techStack: ["AWS RDS", "Debezium", "Kafka", "S3", "ClickHouse", "dbt",
              "Dagster", "Jenkins", "Kubernetes", "Grafana"],
  diagram: "/images/smile-arch.png",  // optional
  github: "",                          // optional
  demo: "",                            // optional
}
```

---

## 5. Site Map

```
/                      Homepage
  ├─ Hero              "DATA ENGINEER" + name + tagline + CTA
  ├─ About             Bio + photo
  ├─ Skills            Data Analyst · Cleaning · Scientist · Engineer
  ├─ Featured Projects 4–6 strongest, cards → module pages
  ├─ Tech Stack        Tool logos
  └─ Contact           Email · LinkedIn · Phone

/work                  All projects (filterable grid by category)
/work/[slug]           Project module (one reusable template)
```

---

## 6. Folder Structure (target)

```
my-portfolio/
├── app/
│   ├── layout.tsx            Nav + footer wrapper
│   ├── page.tsx              Homepage
│   ├── globals.css           Theme tokens
│   └── work/
│       ├── page.tsx          All projects grid
│       └── [slug]/page.tsx   Project module template
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── ProjectCard.tsx
│   ├── FeaturedProjects.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts           ← ALL projects (the modules)
└── public/
    └── images/               diagrams, photo, tool logos
```

---

## 7. Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` (near-black) |
| Surface / cards | `#141414` |
| Text primary | `#f5f5f5` |
| Text muted | `#a3a3a3` |
| Accent | `#22d3ee` (cyan/teal) |
| Headings font | Bold sans — Space Grotesk or Inter |
| Body font | Inter |
| Motion | Framer Motion — fade-up on scroll, hover lift on cards |

---

## 8. Project Inventory

### ⭐ Featured (homepage)
| # | Project | Category | Why |
|---|---|---|---|
| 14 | **SMILE Platform (Kemenkes)** | Data Engineering | Production, national scale, full platform |
| 10 | Fraud Detection | Data Engineering | Real-time, multi-tech |
| 09 | Data Pipeline Sales | Data Engineering | Full stack, many tools |
| 08 | Flink Pipeline + Dashboard | Data Engineering | Realtime streaming → dashboard |
| 12 | Validation Database | Data Engineering | Real work (AWS↔Alibaba) |

### Data Engineering
- **06 Pipeline Data Airflow** — Kafka + Airflow + PostgreSQL. Synthetic sales data; full-load batch + real-time streaming.
- **07 Spark Pipeline Sales** — Kafka + Spark (ETL streaming & batch) + Delta Lake (storage) + PostgreSQL + Dagster (scheduling).
- **08 Flink Pipeline Sales** — Kafka + Flink (ETL streaming) + ClickHouse (DB) + Grafana (dashboard).
- **09 Data Pipeline Sales** — Kafka, Flink, Spark, Airflow, Hadoop, Docker, Power BI; sources PostgreSQL, MySQL, Oracle, SQL Server, MongoDB.
- **10 Fraud Detection** — Flask (UI) → RabbitMQ → Kafka → Flink → ClickHouse → Grafana. Real-time fraud detection.
- **11 KSQLDB Pipeline Sales** — Kafka + KSQLDB (ETL streaming) + custom Kafka Connect sink; Postgres → Postgres.
- **12 Validation Database** — Data-validation tool from a real AWS Athena → Alibaba MaxCompute migration; checks missing IDs / value discrepancies across sources; also supports Oracle & Postgres.
- **13 Pentaho Pipeline** — Multi-source (MySQL, Oracle, SQL Server, Postgres, MongoDB) → Pentaho ETL (dimension tables) → ClickHouse.
- **14 SMILE Platform (UNDP for Kemenkes)** — National immunization logistics system, in production across all health facilities in Indonesia (Sabang to Merauke). Built the **streaming pipeline** on the OLTP side: AWS RDS MySQL → Debezium CDC connector → Kafka → ETL streaming → S3 → ClickHouse. Built **batch pipelines** on the ClickHouse side for the **gold layer**, analytics with **dbt**, orchestrated with **Jenkins + Dagster**. Entire environment runs on **Kubernetes**; monitored with **Grafana**; also maintains the cluster. (Owner's flagship / most senior work.)

### Machine Learning / Data Science
- **01 Rice Leaf Classification** — CNN image classification (rice leaf disease: leaf smut, brown spot, bacterial leaf blight; 40 imgs/class, Kaggle). Custom CNN + pretrained AlexNet, VGG19, DenseNet. Deployed with Flask. College task.
- **02 JKII Stock Price Prediction** — Jakarta Islamic Index prediction (LSTM, XGBoost, Linear Regression, Gradient Boost, SVR). Yahoo Finance data, close price. 5 eval metrics (MAPE, MSE, RMSE, Huber loss, etc.). Deployed with Streamlit. Undergrad final project.

### Data Analysis
- **03 Airbnb Singapore Analysis** — Merged 3 DQLab datasets via SQL; cleaning, feature selection, EDA on price/review/neighbourhood/host/room type. DQLab bootcamp final task.
- **04 Credit Risk** — EDA + 5 models (XGBoost, ANN, Random Forest, Decision Tree, SVM). Streamlit app for predictions. Rakamin x ID/X Partners virtual internship.
- **05 Motorized Vehicle Sales** — Car sales analysis in Indonesia (Gaikindo data) using SQL + Python. Tetris Batch 3 capstone.

### Other Projects (list only on work page)
Customer 360 Dashboard (insurance) · Market Sales Dashboard · Realtime Streaming with Debezium Kafka · OCR Engine PDF→Database · AWS→Alibaba Big Data + Tableau migration · Airflow Pipeline · ETL Streaming with Flink · Pentaho Pipeline

---

## 9. Build Order

1. ✅ Plan (done — this file + ARCHITECTURE.md)
2. Scaffold Next.js + Tailwind + theme tokens
3. `data/projects.ts` — enter all projects from §8
4. Layout (Navbar + Footer)
5. Homepage sections (Hero → Contact)
6. `/work` grid + category filtering
7. `/work/[slug]` module template
8. Framer Motion animations + responsive polish
9. Deploy to Vercel

---

## 10. Scaffold Command

```bash
npx create-next-app@latest my-portfolio
# Recommended answers: TypeScript=Yes, Tailwind=Yes, App Router=Yes, src/=No
cd my-portfolio
npm install framer-motion
npm run dev   # preview at http://localhost:3000
```

---

## 11. Still To Provide (non-blocking)

- [ ] Professional photo (or use the one from the PDF portfolio)
- [ ] Architecture diagram images (export from the PDF slides) → `public/images/`
- [ ] Remaining GitHub links (some ready; optional fields, fill anytime)
- [ ] Tool logo SVGs (or use an icon CDN like simple-icons)

---

## 12. Working Style Notes (for the agent)

- Owner has **basic** coding knowledge — write clean, production-quality code **and explain each part** briefly.
- Keep the modular pattern strict: new projects must only require editing `data/projects.ts`.
- Match the Majd aesthetic (bold type, generous whitespace, dark, smooth scroll) but keep it **original code**.
- Prioritize showcasing **Data Engineering** work first (that's the career target).
- Mobile-responsive and accessible (semantic HTML, alt text, good contrast).

---

*End of CLAUDE.md*
