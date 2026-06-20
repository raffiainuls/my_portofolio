import type { ExperienceItem } from "@/lib/types";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  WORK EXPERIENCE
 * ───────────────────────────────────────────────────────────────────────────
 *  Listed NEWEST FIRST. The first entry with `current: true` is highlighted as
 *  your present role.
 *
 *  TO ADD A NEW JOB: add an object to the TOP of this array. The Experience
 *  section on the homepage updates automatically — no other code to change.
 * ───────────────────────────────────────────────────────────────────────────
 */
export const experience: ExperienceItem[] = [
  {
    company: "Badr-Interactive",
    role: "Data Engineer",
    type: "Contract",
    location: "Depok, Indonesia",
    period: "Oct 2025 – Present",
    current: true,
    description:
      "Technology company delivering digital solutions for government and enterprise clients.",
    highlights: [
      "Part of the SMILE platform — a national immunization logistics system owned by Kemenkes, in production across all health facilities in Indonesia — built with UNDP and cross-functional teams.",
      "Built the streaming pipeline on the OLTP side: AWS RDS MySQL → Debezium (CDC) → Kafka → ETL streaming → Amazon S3 → ClickHouse.",
      "Built batch pipelines on the ClickHouse side for the gold layer, with analytics modeled in dbt.",
      "Orchestrated workflows with Jenkins and Dagster; entire environment runs on Kubernetes and is monitored with Grafana.",
      "Maintain the Kubernetes cluster and ensure data reliability, consistency, and readiness for downstream analytics.",
    ],
    techStack: [
      "AWS RDS",
      "Debezium",
      "Apache Kafka",
      "Amazon S3",
      "ClickHouse",
      "dbt",
      "Jenkins",
      "Dagster",
      "Kubernetes",
      "Grafana",
    ],
  },
  {
    company: "Xeratic",
    role: "Data Engineer",
    type: "Full-time",
    location: "Tangerang, Indonesia",
    period: "Nov 2023 – Feb 2025",
    description: "A company founded in the IT sector, specifically focused on data.",
    highlights: [
      "Built end-to-end ETL workflows with Python, Airflow, and SQL into a centralized data warehouse.",
      "Led data migration from AWS Athena to Alibaba MaxCompute — 300+ tables across warehouses and datamarts.",
      "Validated and refactored 300+ dashboards (Tableau & Metabase) for consistency, performance, and accuracy.",
      "Implemented Change Data Capture (CDC) with Debezium and Kafka to stream real-time data and reduce latency.",
      "Contributed to an OCR-based bank statement extraction system for one of Indonesia's largest banks, automating PDF ingestion.",
      "Enhanced streaming workflows with ksqlDB and Apache Flink to improve data freshness for analytics and reporting.",
    ],
    techStack: [
      "Python",
      "Apache Airflow",
      "SQL",
      "AWS Athena",
      "Alibaba MaxCompute",
      "Debezium",
      "Kafka",
      "ksqlDB",
      "Apache Flink",
      "Tableau",
      "Metabase",
    ],
  },
  {
    company: "PT Telkom Indonesia",
    role: "Data Analyst / Data Scientist",
    type: "Internship",
    location: "Jakarta, Indonesia",
    period: "Jun 2023 – Aug 2023",
    highlights: [
      "Analyzed 10,000+ e-commerce transactions to uncover customer purchasing patterns.",
      "Built interactive Streamlit dashboards to streamline weekly reporting.",
      "Developed machine learning models to identify customer segments with 85%+ accuracy.",
    ],
    techStack: ["Python", "Streamlit", "Machine Learning", "SQL"],
  },
  {
    company: "Home Credit Indonesia",
    role: "Data Scientist",
    type: "Virtual Internship · Rakamin Academy",
    location: "Jakarta, Indonesia",
    period: "May 2023 – Jun 2023",
    highlights: [
      "Completed data scientist tasks: credit data analysis and visualization.",
      "Built credit-risk machine learning models.",
    ],
    techStack: ["Python", "Machine Learning"],
  },
  {
    company: "ID/X Partners",
    role: "Data Scientist",
    type: "Virtual Internship · Rakamin Academy",
    location: "Jakarta, Indonesia",
    period: "Feb 2023 – Mar 2023",
    highlights: [
      "Conducted end-to-end analysis on financial credit data.",
      "Built ML models that reduced risk misclassification by 30%.",
      "Created dashboards supporting key stakeholder presentations.",
    ],
    techStack: ["Python", "Machine Learning"],
  },
  {
    company: "Dinas Sosial Kabupaten Malang",
    role: "Data Entry Intern",
    type: "Internship",
    location: "Malang, Indonesia",
    period: "May 2021 – Jun 2021",
    highlights: [
      "Designed and implemented a CRUD system for KUBE, managing 1,000+ household records.",
      "Reduced manual data-entry time by 50% through process digitalization.",
    ],
  },
];
