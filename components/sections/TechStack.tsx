import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

/**
 * TechStack — a single de-duplicated list of every technology used across all
 * projects. Because it's derived from data/projects.ts, it stays accurate
 * automatically: add a project with a new tool and it shows up here.
 */
function getAllTech(): string[] {
  const set = new Set<string>();
  for (const project of projects) {
    for (const tech of project.techStack) set.add(tech);
  }
  // Sort alphabetically for a tidy, predictable layout.
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function TechStack() {
  const tech = getAllTech();

  return (
    <Section id="stack" className="border-y border-border bg-surface/30">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I work with"
        intro="The technologies that show up across my projects — from ingestion to dashboards."
      />

      <FadeIn className="mt-12">
        <div className="flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
