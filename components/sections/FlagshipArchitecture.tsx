import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { ArrowRight } from "@/components/ui/icons";
import { getProjectBySlug } from "@/data/projects";

/**
 * FlagshipArchitecture — a homepage spotlight for the most important project's
 * live architecture diagram, so recruiters/HR see the strongest work up front
 * without having to dig into the /work pages.
 *
 * It reads one project by slug and renders its animated <ArchitectureFlow>. If
 * that project has no `architecture` defined, the section quietly renders
 * nothing — so changing the flagship is just editing FLAGSHIP_SLUG.
 */
const FLAGSHIP_SLUG = "smile-platform";

export function FlagshipArchitecture() {
  const project = getProjectBySlug(FLAGSHIP_SLUG);
  if (!project || !project.architecture) return null;

  return (
    <Section id="flagship">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow">Flagship Project · Live Architecture</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">{project.short}</p>
          {/* Key tech, so the impact reads at a glance */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 6).map((tech) => (
              <Badge key={tech} tone="accent">
                {tech}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            View full case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>

      <div className="mt-10">
        <ArchitectureFlow architecture={project.architecture} />
      </div>
    </Section>
  );
}
