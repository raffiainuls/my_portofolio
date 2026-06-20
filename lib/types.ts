/**
 * Shared TypeScript types for the site's content.
 *
 * Keeping types in one place means the data files (`data/projects.ts`,
 * `data/profile.ts`) and the components that render them always agree on shape.
 * If you add a field to a project, add it here once and TypeScript will guide
 * you to update everything that needs it.
 */

/** The three categories a project can belong to. */
export type ProjectCategory =
  | "Data Engineering"
  | "Machine Learning"
  | "Data Analysis";

/**
 * One project = one "module".
 *
 * To add a project to the whole site, you only ever add an object of this shape
 * to the array in `data/projects.ts`. Optional fields (marked with `?`) can be
 * left out or filled in later — the UI handles their absence gracefully.
 */
export interface Project {
  /** URL-friendly id, used in /work/[slug]. Must be unique. e.g. "smile-platform" */
  slug: string;
  /** Display number shown on cards, e.g. "14". Just for visual ordering/labeling. */
  number: string;
  /** Project name shown as the title. */
  title: string;
  /** Which group it belongs to (drives the /work filter). */
  category: ProjectCategory;
  /** Show on the homepage "Featured" section when true. */
  featured: boolean;
  /** One-line summary shown on cards. */
  short: string;
  /**
   * Full write-up shown on the project page. Each string in the array is one
   * paragraph — this keeps long descriptions readable without HTML.
   */
  description: string[];
  /** Technologies used, rendered as badges. */
  techStack: string[];
  /** Optional: highlight bullet points shown on the project page. */
  highlights?: string[];
  /** Optional: my role on the project. */
  role?: string;
  /** Optional: context (employer, course, competition, client). */
  context?: string;
  /** Optional: path to an architecture diagram, e.g. "/images/smile-arch.png". */
  diagram?: string;
  /** Optional: link to source code. */
  github?: string;
  /** Optional: link to a live demo. */
  demo?: string;
}

/** A named group of skills shown in the Skills section. */
export interface SkillGroup {
  title: string;
  skills: string[];
}

/**
 * One work-experience entry shown in the Experience timeline.
 *
 * Like projects, experience is data-driven: add a job by adding an object to
 * `data/experience.ts` (newest first). Optional fields can be left out.
 */
export interface ExperienceItem {
  company: string;
  /** Job title, e.g. "Data Engineer". */
  role: string;
  /** Employment type, e.g. "Contract", "Full-time", "Internship". */
  type?: string;
  location: string;
  /** Display period, e.g. "Oct 2025 – Present". */
  period: string;
  /** Mark the current job — gets a "Current" badge and accent highlight. */
  current?: boolean;
  /** One-line description of the company. */
  description?: string;
  /** Achievement / responsibility bullet points. */
  highlights: string[];
  /** Optional technologies used in this role. */
  techStack?: string[];
}

/** Owner / contact details and bio used across the site. */
export interface Profile {
  name: string;
  title: string;
  /** Current employer, shown alongside the title. Leave "" if between roles. */
  currentCompany?: string;
  tagline: string;
  /** Short bio paragraphs for the About section. */
  bio: string[];
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  location: string;
  /** Optional path to a profile photo in /public. */
  photo?: string;
  /** Optional path to a downloadable resume PDF in /public. */
  resume?: string;
  education: {
    degree: string;
    school: string;
    period: string;
  };
}
