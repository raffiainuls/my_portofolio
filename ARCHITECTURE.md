# Portfolio Website — Architecture & Build Plan

**Owner:** Raffi Ainul Afif
**Role positioning:** Data Engineer (with Data Science / Analysis background)
**Style reference:** Majd template (bold type, minimal, dark, project modules)
**Stack:** Next.js + React + Tailwind CSS + Framer Motion + TypeScript
**Theme:** Dark (near-black background, off-white text, **cyan/teal accent `#22d3ee`**)

---

## 1. Core Concept: Projects as Modules

Every project is a **data object** in one file (`data/projects.ts`). A single page
template renders any project. **Adding a project = adding one object** — no new code.

```typescript
{
  slug: "smile-platform",
  number: "14",
  title: "SMILE Platform (UNDP for Kemenkes)",
  category: "Data Engineering",
  featured: true,
  short: "National immunization logistics system — streaming + batch data platform.",
  description: "Full write-up...",
  techStack: ["AWS RDS", "Debezium", "Kafka", "S3", "ClickHouse", "dbt",
              "Dagster", "Jenkins", "Kubernetes", "Grafana"],
  diagram: "/images/smile-arch.png",
  github: "",        // optional
  demo: "",          // optional
}
```

---

## 2. Site Map

```
/                      Homepage
  ├─ Hero              "DATA ENGINEER" + name + tagline + CTA
  ├─ About             Bio + photo
  ├─ Skills            Data Analyst · Cleaning · Scientist · Engineer
  ├─ Featured Projects 4–6 strongest, cards → module pages
  ├─ Tech Stack        Tool logos
  └─ Contact           Email · LinkedIn · Phone

/work                  All projects (filterable grid)
/work/[slug]           Project module (one reusable template)
```

---

## 3. Project Inventory

### ⭐ Featured (homepage)
| # | Project | Category | Why featured |
|---|---|---|---|
| 14 | **SMILE Platform (Kemenkes)** | Data Engineering | Production, national scale, full platform |
| 10 | **Fraud Detection** | Data Engineering | Real-time, multi-tech stack |
| 09 | **Data Pipeline Sales** | Data Engineering | Full stack, many tools |
| 08 | **Flink Pipeline + Dashboard** | Data Engineering | Real-time streaming → dashboard |
| 12 | **Validation Database** | Data Engineering | Real work experience (AWS↔Alibaba) |

### Full Project List (work page)

**Data Engineering**
- 06 Pipeline Data Airflow — Kafka + Airflow + PostgreSQL
- 07 Spark Pipeline Sales — Kafka + Spark + Delta Lake + Dagster
- 08 Flink Pipeline Sales — Kafka + Flink + ClickHouse + Grafana
- 09 Data Pipeline Sales — Kafka, Flink, Spark, Airflow, Hadoop, Power BI, multi-DB
- 10 Fraud Detection — Flask + RabbitMQ + Kafka + Flink + ClickHouse + Grafana
- 11 KSQLDB Pipeline — Kafka + KSQLDB + Kafka Connect + PostgreSQL
- 12 Validation Database — AWS Athena ↔ Alibaba MaxCompute migration tool
- 13 Pentaho Pipeline — multi-source ETL → ClickHouse
- 14 SMILE Platform — Debezium CDC, Kafka, S3, ClickHouse, dbt, Dagster, Jenkins, K8s, Grafana

**Machine Learning / Data Science**
- 01 Rice Leaf Classification — CNN, AlexNet, VGG19, DenseNet, Flask
- 02 JKII Stock Prediction — LSTM, XGBoost, SVR, Streamlit

**Data Analysis**
- 03 Airbnb Singapore Analysis — SQL + EDA
- 04 Credit Risk — EDA + 5 ML models, Streamlit
- 05 Motorized Vehicle Sales — SQL + Python analysis

**Other Projects (list only)**
- Customer 360 Dashboard (insurance)
- Market Sales Dashboard
- Realtime Streaming with Debezium Kafka
- OCR Engine PDF → Database
- AWS → Alibaba Big Data + Tableau migration
- Airflow Pipeline
- ETL Streaming with Flink
- Pentaho Pipeline

---

## 4. Folder Structure

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

## 5. Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` (near-black) |
| Surface / cards | `#141414` |
| Text primary | `#f5f5f5` |
| Text muted | `#a3a3a3` |
| Accent | `#22d3ee` (cyan/teal) |
| Font (headings) | Bold sans (e.g. Inter / Space Grotesk) |
| Font (body) | Inter |
| Animations | Framer Motion (fade-up on scroll, hover lift) |

---

## 6. Contact Info (from PDF)

- Email: raffiainultrueblues21@gmail.com
- LinkedIn: linkedin.com/in/raffi-ainul-afif-9811a411b
- Phone: +62 896-7153-2293

---

## 7. Build Order

1. ✅ Plan (this document)
2. Scaffold Next.js project + theme tokens
3. `data/projects.ts` — enter all projects
4. Layout (Navbar + Footer)
5. Homepage sections (Hero → Contact)
6. `/work` grid + filtering
7. `/work/[slug]` module template
8. Animations + responsive polish
9. Deploy to Vercel

---

## 8. To Provide Later

- [ ] Professional photo (or use PDF one)
- [ ] Architecture diagram images (from PDF slides)
- [ ] GitHub links (have some, fill rest later — fields are optional)
- [ ] Tool logo SVGs (or we use a CDN icon set)
- [ ] Full SMILE project write-up (draft already captured above)

*End of plan.*
