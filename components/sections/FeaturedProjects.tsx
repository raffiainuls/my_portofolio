import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight } from "@/components/ui/icons";
import { getFeaturedProjects } from "@/data/projects";

/**
 * FeaturedProjects — shows the projects flagged `featured: true` in
 * data/projects.ts as a card grid, with a link to the full /work page.
 * Add/remove featured projects by toggling that one field in the data.
 */
export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          intro="A few of the data platforms and pipelines I'm most proud of."
        />
        <FadeIn delay={0.1}>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
