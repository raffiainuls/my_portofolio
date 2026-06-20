import type { Profile, SkillGroup } from "@/lib/types";

/**
 * Personal / contact info and bio.
 * Edit this file to update your name, tagline, contact links, or About text
 * anywhere they appear on the site.
 */
export const profile: Profile = {
  name: "Raffi Ainul Afif",
  title: "Data Engineer",
  currentCompany: "Badr-Interactive",
  tagline:
    "I build reliable, large-scale data platforms — streaming and batch pipelines that move data from source to insight.",
  bio: [
    "I'm a Data Engineer with a background in Data Science, Data Analysis, and Data Cleaning. I design and build end-to-end data platforms: real-time streaming pipelines, batch ETL, data warehousing, and the analytics layers on top.",
    "My flagship work is the SMILE Platform — a national immunization logistics system running in production across every health facility in Indonesia, from Sabang to Merauke. I built its streaming pipeline (CDC → Kafka → ClickHouse) and the batch/gold-layer analytics with dbt, all orchestrated on Kubernetes.",
    "I started in data science and analysis — CNNs, time-series forecasting, EDA on real datasets — which means I build pipelines with the end consumer of the data always in mind. I write production-quality code and I'm continually expanding into full application development.",
  ],
  email: "raffiainultrueblues21@gmail.com",
  phone: "+62 896-7153-2293",
  linkedin: "https://www.linkedin.com/in/raffi-ainul-afif-9811a411b/",
  github: "", // add your GitHub profile URL when ready
  location: "Indonesia",
  photo: "/images/photo.jpg", // save your B&W portrait here: public/images/photo.jpg
  resume: "", // e.g. "/resume.pdf" — drop a PDF in public/ and set the path
  education: {
    degree: "Bachelor of Computer Science",
    school: "University Muhammadiyah Malang",
    period: "2018 – 2022",
  },
};

/**
 * Skills grouped by area, shown in the Skills section.
 * Add or remove items freely — the UI adapts to any number of groups/skills.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "Bash"],
  },
  {
    title: "Streaming & Messaging",
    skills: ["Apache Kafka", "Debezium (CDC)", "Apache Flink", "KSQLDB", "RabbitMQ"],
  },
  {
    title: "Batch & Processing",
    skills: ["Apache Spark", "Apache Airflow", "Dagster", "dbt", "Pentaho", "Hadoop"],
  },
  {
    title: "Storage & Databases",
    skills: [
      "ClickHouse",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQL Server",
      "MongoDB",
      "Delta Lake",
      "Amazon S3",
    ],
  },
  {
    title: "Cloud & Infra",
    skills: ["AWS", "Alibaba Cloud", "Kubernetes", "Docker", "Jenkins", "Grafana"],
  },
  {
    title: "Data Science & Analysis",
    skills: [
      "Pandas",
      "scikit-learn",
      "TensorFlow / Keras",
      "XGBoost",
      "Power BI",
      "Tableau",
      "Streamlit",
    ],
  },
];

/**
 * The four hats you wear — shown as a short capability strip.
 * Drives the "what I do" part of the Skills section.
 */
export const focusAreas: { title: string; description: string }[] = [
  {
    title: "Data Engineer",
    description:
      "Streaming & batch pipelines, data warehousing, orchestration on Kubernetes.",
  },
  {
    title: "Data Scientist",
    description:
      "CNN image classification, time-series forecasting, predictive modeling.",
  },
  {
    title: "Data Analyst",
    description:
      "SQL analysis, EDA, dashboards that turn raw data into decisions.",
  },
  {
    title: "Data Cleaning",
    description:
      "Validation tooling, source-to-target reconciliation, quality checks.",
  },
];
