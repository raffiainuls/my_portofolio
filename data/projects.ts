import type { Project, ProjectCategory } from "@/lib/types";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  THE PROJECT MODULES
 * ───────────────────────────────────────────────────────────────────────────
 *
 *  This is the single source of truth for every project on the site.
 *
 *  TO ADD A NEW PROJECT:
 *    1. Copy any object below.
 *    2. Change the fields (give it a UNIQUE `slug`).
 *    3. Set `featured: true` if you want it on the homepage.
 *  That's it — the homepage, the /work grid, and the /work/[slug] detail page
 *  all read from this array automatically. No other code to touch.
 *
 *  Optional fields (github, demo, diagram, highlights, role, context) can be
 *  omitted now and filled in later.
 * ───────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  // ─────────────────────────── FEATURED ───────────────────────────
  {
    slug: "smile-platform",
    number: "14",
    title: "SMILE Platform (UNDP for Kemenkes)",
    category: "Data Engineering",
    featured: true,
    short:
      "National immunization logistics system in production across all of Indonesia — streaming CDC + batch analytics platform.",
    description: [
      "SMILE is a national immunization logistics system built for the Indonesian Ministry of Health (Kemenkes) with UNDP, running in production across every health facility in the country — from Sabang to Merauke.",
      "On the OLTP side I built the streaming pipeline: change data capture from AWS RDS MySQL via a Debezium connector into Kafka, streaming ETL with RisingWave into Amazon S3, and finally into ClickHouse for analytics-ready storage.",
      "On the ClickHouse side I built the batch pipelines that produce the gold layer, with analytics modeled in dbt and orchestrated by Jenkins and Dagster. The entire environment runs on Kubernetes, monitored with Grafana — and I also help maintain the cluster.",
    ],
    highlights: [
      "Real-time CDC pipeline: AWS RDS MySQL → Debezium → Kafka → RisingWave → S3 → ClickHouse",
      "Batch gold-layer pipelines and dbt analytics on ClickHouse",
      "Orchestrated with Jenkins + Dagster, fully containerized on Kubernetes",
      "Production-grade, national scale — every health facility in Indonesia",
    ],
    role: "Data Engineer — streaming & batch pipelines, analytics, cluster maintenance",
    context: "UNDP for Kemenkes (Indonesian Ministry of Health) — in production",
    techStack: [
      "AWS RDS",
      "Debezium",
      "Kafka",
      "RisingWave",
      "Amazon S3",
      "ClickHouse",
      "dbt",
      "Dagster",
      "Jenkins",
      "Kubernetes",
      "Grafana",
    ],
    diagram: "", // add "/images/smile-arch.png" when ready
    github: "",
    demo: "",
    // Animated, theme-matched architecture flow (rendered by <ArchitectureFlow>).
    architecture: {
      caption:
        "Real-time CDC streaming from the OLTP database into ClickHouse, then batch pipelines build the analytics gold layer.",
      flow: [
        { label: "AWS RDS MySQL", sub: "OLTP source", kind: "source" },
        { label: "Debezium", sub: "Change Data Capture", kind: "cdc" },
        { label: "Apache Kafka", sub: "Event streaming", kind: "stream" },
        { label: "RisingWave", sub: "Streaming ETL", kind: "processing" },
        { label: "Amazon S3", sub: "Raw landing", kind: "storage" },
        { label: "ClickHouse", sub: "Warehouse", kind: "warehouse" },
        { label: "dbt", sub: "Gold layer & analytics", kind: "analytics" },
      ],
      supporting: [
        { label: "Orchestration", items: ["Jenkins", "Dagster"] },
        { label: "Infrastructure", items: ["Kubernetes"] },
        { label: "Monitoring", items: ["Grafana"] },
      ],
    },
  },
  {
    slug: "fraud-detection",
    number: "10",
    title: "Real-Time Fraud Detection",
    category: "Data Engineering",
    featured: true,
    short:
      "End-to-end real-time fraud detection pipeline: Flask UI → RabbitMQ → Kafka → Flink → ClickHouse → Grafana.",
    description: [
      "A real-time fraud detection pipeline that scores transactions as they happen and surfaces results on a live dashboard.",
      "Transactions enter through a Flask UI, are queued via RabbitMQ, streamed through Kafka, processed and scored in Apache Flink, then stored in ClickHouse and visualized in Grafana — a complete streaming architecture from ingestion to insight.",
    ],
    highlights: [
      "Full streaming path: Flask → RabbitMQ → Kafka → Flink → ClickHouse → Grafana",
      "Real-time transaction scoring with low-latency processing in Flink",
      "Live monitoring dashboards in Grafana",
    ],
    techStack: [
      "Flask",
      "RabbitMQ",
      "Kafka",
      "Apache Flink",
      "ClickHouse",
      "Grafana",
    ],
  },
  {
    slug: "data-pipeline-sales",
    number: "09",
    title: "Multi-Source Data Pipeline (Sales)",
    category: "Data Engineering",
    featured: true,
    short:
      "Full-stack sales data pipeline integrating five source databases through Kafka, Flink, Spark, Airflow and Hadoop to Power BI.",
    description: [
      "A comprehensive sales data pipeline that consolidates five different source databases — PostgreSQL, MySQL, Oracle, SQL Server, and MongoDB — into a unified analytics layer.",
      "It combines streaming and batch processing across Kafka, Flink, and Spark, orchestrated with Airflow, with Hadoop for distributed storage and Docker for packaging. Final insights are delivered in Power BI.",
    ],
    highlights: [
      "Integrates 5 heterogeneous sources: PostgreSQL, MySQL, Oracle, SQL Server, MongoDB",
      "Streaming + batch with Kafka, Flink, and Spark",
      "Orchestrated with Airflow; Hadoop storage; Dockerized",
      "Business reporting in Power BI",
    ],
    techStack: [
      "Kafka",
      "Apache Flink",
      "Apache Spark",
      "Apache Airflow",
      "Hadoop",
      "Docker",
      "Power BI",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQL Server",
      "MongoDB",
    ],
  },
  {
    slug: "flink-pipeline-sales",
    number: "08",
    title: "Flink Streaming Pipeline + Dashboard",
    category: "Data Engineering",
    featured: true,
    short:
      "Real-time sales streaming pipeline: Kafka → Flink ETL → ClickHouse → Grafana dashboard.",
    description: [
      "A real-time streaming pipeline for sales data that flows from Kafka through Apache Flink for streaming ETL, into ClickHouse for fast analytical storage, and out to a Grafana dashboard.",
      "It demonstrates a clean, focused streaming architecture — from ingestion to a live, queryable dashboard.",
    ],
    highlights: [
      "Streaming ETL in Apache Flink",
      "ClickHouse for sub-second analytical queries",
      "Live Grafana dashboard",
    ],
    techStack: ["Kafka", "Apache Flink", "ClickHouse", "Grafana"],
  },
  {
    slug: "validation-database",
    number: "12",
    title: "Database Validation Tool",
    category: "Data Engineering",
    featured: true,
    short:
      "Data-validation tool from a real AWS Athena → Alibaba MaxCompute migration — detects missing IDs and value discrepancies across sources.",
    description: [
      "A data-validation tool built during a real production migration from AWS Athena to Alibaba MaxCompute. It verifies that data landed correctly after migration.",
      "It detects missing IDs and value discrepancies across sources, giving confidence that the migrated data matches the original. Beyond the migration use case, it also supports Oracle and PostgreSQL.",
    ],
    highlights: [
      "Built for a real AWS Athena → Alibaba MaxCompute migration",
      "Detects missing IDs and value-level discrepancies across sources",
      "Extensible to Oracle and PostgreSQL",
    ],
    role: "Data Engineer — built the validation tooling",
    context: "Real production cloud migration (AWS ↔ Alibaba)",
    techStack: [
      "AWS Athena",
      "Alibaba MaxCompute",
      "Oracle",
      "PostgreSQL",
      "Python",
    ],
  },

  // ─────────────────────── DATA ENGINEERING ───────────────────────
  {
    slug: "pipeline-data-airflow",
    number: "06",
    title: "Airflow Data Pipeline",
    category: "Data Engineering",
    featured: false,
    short:
      "Synthetic sales pipeline with Kafka + Airflow + PostgreSQL — full-load batch plus real-time streaming.",
    description: [
      "A data pipeline over synthetic sales data combining two ingestion modes: full-load batch and real-time streaming.",
      "Kafka handles streaming ingestion, Airflow orchestrates the batch workflows, and PostgreSQL serves as the destination store.",
    ],
    highlights: [
      "Both full-load batch and real-time streaming in one pipeline",
      "Orchestrated with Apache Airflow",
    ],
    techStack: ["Kafka", "Apache Airflow", "PostgreSQL"],
  },
  {
    slug: "spark-pipeline-sales",
    number: "07",
    title: "Spark Pipeline (Sales)",
    category: "Data Engineering",
    featured: false,
    short:
      "Streaming & batch ETL with Kafka + Spark, stored in Delta Lake, scheduled with Dagster.",
    description: [
      "A sales pipeline using Apache Spark for both streaming and batch ETL.",
      "Data is ingested through Kafka, processed in Spark, stored in Delta Lake with PostgreSQL alongside, and the whole thing is scheduled and monitored with Dagster.",
    ],
    highlights: [
      "Streaming + batch ETL in Apache Spark",
      "Delta Lake storage layer",
      "Scheduled and observed with Dagster",
    ],
    techStack: ["Kafka", "Apache Spark", "Delta Lake", "PostgreSQL", "Dagster"],
  },
  {
    slug: "ksqldb-pipeline-sales",
    number: "11",
    title: "KSQLDB Streaming Pipeline",
    category: "Data Engineering",
    featured: false,
    short:
      "Streaming ETL with Kafka + KSQLDB and a custom Kafka Connect sink — Postgres to Postgres.",
    description: [
      "A streaming ETL pipeline that performs transformations directly in the stream using KSQLDB on top of Kafka.",
      "It reads from PostgreSQL and writes back to PostgreSQL through a custom Kafka Connect sink connector — a SQL-first approach to stream processing.",
    ],
    highlights: [
      "Stream transformations in KSQLDB (SQL on streams)",
      "Custom Kafka Connect sink connector",
      "Postgres → Postgres end to end",
    ],
    techStack: ["Kafka", "KSQLDB", "Kafka Connect", "PostgreSQL"],
  },
  {
    slug: "pentaho-pipeline",
    number: "13",
    title: "Pentaho ETL Pipeline",
    category: "Data Engineering",
    featured: false,
    short:
      "Multi-source ETL into dimension tables with Pentaho, loaded to ClickHouse.",
    description: [
      "A multi-source ETL pipeline built with Pentaho that consolidates data from MySQL, Oracle, SQL Server, PostgreSQL, and MongoDB.",
      "Pentaho builds the dimension tables and loads the modeled data into ClickHouse for analytics.",
    ],
    highlights: [
      "Five sources: MySQL, Oracle, SQL Server, PostgreSQL, MongoDB",
      "Dimensional modeling in Pentaho",
      "ClickHouse as the analytics destination",
    ],
    techStack: [
      "Pentaho",
      "ClickHouse",
      "MySQL",
      "Oracle",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
    ],
  },

  // ────────────────── MACHINE LEARNING / DATA SCIENCE ──────────────
  {
    slug: "rice-leaf-classification",
    number: "01",
    title: "Rice Leaf Disease Classification (CNN)",
    category: "Machine Learning",
    featured: false,
    short:
      "CNN image classification of rice leaf diseases with a custom model plus AlexNet, VGG19, and DenseNet — deployed on Flask.",
    description: [
      "An image classification project that identifies three rice leaf diseases — leaf smut, brown spot, and bacterial leaf blight — from a Kaggle dataset of 40 images per class.",
      "I trained a custom CNN and compared it against pretrained AlexNet, VGG19, and DenseNet architectures, then deployed the best model with a Flask web app.",
    ],
    highlights: [
      "Custom CNN vs. pretrained AlexNet, VGG19, DenseNet",
      "3-class disease classification from a small dataset",
      "Deployed as a Flask web app",
    ],
    context: "College project",
    techStack: [
      "Python",
      "TensorFlow / Keras",
      "CNN",
      "AlexNet",
      "VGG19",
      "DenseNet",
      "Flask",
    ],
  },
  {
    slug: "jkii-stock-prediction",
    number: "02",
    title: "JKII Stock Price Prediction",
    category: "Machine Learning",
    featured: false,
    short:
      "Jakarta Islamic Index price forecasting with LSTM, XGBoost, SVR and more — evaluated on 5 metrics, deployed on Streamlit.",
    description: [
      "My undergraduate final project: forecasting the close price of the Jakarta Islamic Index (JKII) using Yahoo Finance data.",
      "I compared five approaches — LSTM, XGBoost, Linear Regression, Gradient Boosting, and SVR — and evaluated them across five metrics including MAPE, MSE, RMSE, and Huber loss. The final model was deployed as a Streamlit app.",
    ],
    highlights: [
      "5 models: LSTM, XGBoost, Linear Regression, Gradient Boosting, SVR",
      "Evaluated on 5 metrics (MAPE, MSE, RMSE, Huber loss, …)",
      "Deployed with Streamlit",
    ],
    context: "Undergraduate final project",
    techStack: [
      "Python",
      "LSTM",
      "XGBoost",
      "SVR",
      "scikit-learn",
      "Streamlit",
      "Yahoo Finance API",
    ],
  },

  // ─────────────────────────── DATA ANALYSIS ──────────────────────
  {
    slug: "airbnb-singapore-analysis",
    number: "03",
    title: "Airbnb Singapore Analysis",
    category: "Data Analysis",
    featured: false,
    short:
      "Merged 3 datasets via SQL, then cleaned and ran EDA on price, reviews, neighbourhood, host, and room type.",
    description: [
      "An analysis of the Airbnb Singapore market for the DQLab bootcamp final task.",
      "I merged three datasets using SQL, performed cleaning and feature selection, and ran exploratory data analysis across price, reviews, neighbourhood, host, and room type to surface market patterns.",
    ],
    highlights: [
      "Merged 3 datasets with SQL",
      "Cleaning, feature selection, and EDA",
      "Insights on price, reviews, neighbourhood, host, room type",
    ],
    context: "DQLab bootcamp final task",
    techStack: ["SQL", "Python", "Pandas", "EDA"],
  },
  {
    slug: "credit-risk",
    number: "04",
    title: "Credit Risk Modeling",
    category: "Data Analysis",
    featured: false,
    short:
      "EDA plus five models (XGBoost, ANN, Random Forest, Decision Tree, SVM) with a Streamlit prediction app.",
    description: [
      "A credit risk project from the Rakamin × ID/X Partners virtual internship.",
      "After exploratory analysis I built and compared five models — XGBoost, an ANN, Random Forest, Decision Tree, and SVM — and shipped a Streamlit app for live predictions.",
    ],
    highlights: [
      "EDA + 5 models: XGBoost, ANN, Random Forest, Decision Tree, SVM",
      "Streamlit app for predictions",
    ],
    context: "Rakamin × ID/X Partners virtual internship",
    techStack: [
      "Python",
      "XGBoost",
      "ANN",
      "Random Forest",
      "SVM",
      "scikit-learn",
      "Streamlit",
    ],
  },
  {
    slug: "motorized-vehicle-sales",
    number: "05",
    title: "Motorized Vehicle Sales Analysis",
    category: "Data Analysis",
    featured: false,
    short:
      "Car sales analysis in Indonesia (Gaikindo data) using SQL and Python.",
    description: [
      "An analysis of motorized vehicle (car) sales in Indonesia using Gaikindo data, completed as the Tetris Batch 3 capstone.",
      "I used SQL and Python to explore sales trends and segment performance across the Indonesian market.",
    ],
    highlights: [
      "Gaikindo car sales dataset",
      "SQL + Python analysis of market trends",
    ],
    context: "Tetris Batch 3 capstone",
    techStack: ["SQL", "Python", "Pandas"],
  },
];

/**
 * "Other projects" — additional work listed (name only) on the /work page.
 * Promote any of these to a full module above whenever you want to write it up.
 */
export const otherProjects: string[] = [
  "Customer 360 Dashboard (insurance)",
  "Market Sales Dashboard",
  "Realtime Streaming with Debezium + Kafka",
  "OCR Engine — PDF → Database",
  "AWS → Alibaba Big Data + Tableau migration",
  "Airflow Pipeline",
  "ETL Streaming with Flink",
  "Pentaho Pipeline",
];

/* ───────────────────────────── HELPERS ─────────────────────────────
   Small functions the pages use to read from the data above. Keeping the
   data access in one place keeps the components clean. */

/** All category names, useful for building the /work filter buttons. */
export const categories: ProjectCategory[] = [
  "Data Engineering",
  "Machine Learning",
  "Data Analysis",
];

/** Projects flagged for the homepage. */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Find a single project by its slug (for /work/[slug]). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Every slug — used by Next.js to pre-render each project page at build time. */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
