import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import {
  ArrowLeft,
  ArrowUpRight,
  GitHubIcon,
} from "@/components/ui/icons";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/data/projects";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  THE PROJECT MODULE TEMPLATE
 * ───────────────────────────────────────────────────────────────────────────
 *  ONE file renders EVERY project. Next.js generates a page for each slug at
 *  build time (see generateStaticParams). To add a project page, you don't
 *  touch this file — you just add an object to data/projects.ts.
 * ───────────────────────────────────────────────────────────────────────────
 */

// In Next.js 15, `params` is a Promise — note the `await` below.
type PageProps = { params: Promise<{ slug: string }> };

/** Pre-render one static page per project at build time (fast + SEO-friendly). */
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

/** Per-project SEO metadata (title + description) from the project data. */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.short,
    openGraph: { title: project.title, description: project.short },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // If someone hits an unknown slug, show the 404 page.
  if (!project) notFound();

  // "More projects" — up to 3 others, preferring the same category.
  const related = projects
    .filter((p) => p.slug !== project.slug)
    .sort((a, b) => {
      const aMatch = a.category === project.category ? 0 : 1;
      const bMatch = b.category === project.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, 3);

  return (
    <article>
      <Container className="py-16 sm:py-20">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-display text-sm font-medium text-accent">
              {project.number}
            </span>
            <Badge tone="accent">{project.category}</Badge>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.short}</p>

          {/* External links (only render when provided in the data) */}
          {(project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent/90"
                >
                  Live demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Source code
                </a>
              ) : null}
            </div>
          )}
        </FadeIn>

        {/* Architecture: prefer the animated flow; fall back to a static image. */}
        {project.architecture ? (
          <div className="mt-12">
            <ArchitectureFlow architecture={project.architecture} />
          </div>
        ) : project.diagram ? (
          <FadeIn delay={0.1} className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={project.diagram}
                alt={`${project.title} architecture diagram`}
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </FadeIn>
        ) : null}

        {/* Main content: write-up + sidebar */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          {/* Left: description + highlights */}
          <FadeIn className="space-y-10">
            <div className="space-y-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Overview
              </h2>
              {project.description.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {project.highlights && project.highlights.length > 0 ? (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Highlights
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </FadeIn>

          {/* Right: facts sidebar */}
          <FadeIn delay={0.1}>
            <div className="space-y-6 rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-24">
              {project.role ? (
                <div>
                  <p className="eyebrow">Role</p>
                  <p className="mt-1 text-sm font-medium">{project.role}</p>
                </div>
              ) : null}
              {project.context ? (
                <div>
                  <p className="eyebrow">Context</p>
                  <p className="mt-1 text-sm font-medium">{project.context}</p>
                </div>
              ) : null}
              <div>
                <p className="eyebrow">Tech stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* More projects */}
      {related.length > 0 ? (
        <section className="border-t border-border">
          <Container className="py-16 sm:py-20">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                More projects
              </h2>
              <Link
                href="/work"
                className="text-sm font-medium text-accent hover:text-accent/80"
              >
                View all →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
