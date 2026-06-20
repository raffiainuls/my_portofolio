import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { WorkGrid } from "@/components/WorkGrid";
import { categories, otherProjects, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "All data engineering, machine learning, and data analysis projects by Raffi Ainul Afif.",
};

/**
 * /work — the full project archive.
 *
 * This is a Server Component: it reads the data and passes it to the interactive
 * <WorkGrid> (client) for filtering. It also lists the "other projects" by name.
 */
export default function WorkPage() {
  return (
    <Container className="py-20 sm:py-28">
      {/* Page header */}
      <FadeIn className="max-w-2xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          All work
        </h1>
        <p className="mt-4 text-base text-muted sm:text-lg">
          {projects.length} projects across data engineering, machine learning,
          and analysis. Filter by category, or open any project for the full
          write-up.
        </p>
      </FadeIn>

      {/* Filterable grid */}
      <div className="mt-12">
        <WorkGrid projects={projects} categories={categories} />
      </div>

      {/* Other projects (name-only list) */}
      {otherProjects.length > 0 ? (
        <FadeIn className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Other projects
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((name) => (
              <li
                key={name}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {name}
              </li>
            ))}
          </ul>
        </FadeIn>
      ) : null}
    </Container>
  );
}
