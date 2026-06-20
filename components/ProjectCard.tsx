import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "@/components/ui/icons";
import type { Project } from "@/lib/types";

/**
 * ProjectCard — the linked card used in both the homepage "Featured" section
 * and the /work grid. Clicking it opens that project's module page.
 *
 * It shows the project number, category, title, one-line summary, and the
 * first few tech badges (with a "+N" pill if there are more).
 */
export function ProjectCard({ project }: { project: Project }) {
  const visibleTech = project.techStack.slice(0, 4);
  const remaining = project.techStack.length - visibleTech.length;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Top row: number + category, and an arrow that animates on hover */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-medium text-accent">
            {project.number}
          </span>
          <Badge>{project.category}</Badge>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      {/* Title + summary */}
      <h3 className="mt-5 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.short}
      </p>

      {/* Tech badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        {visibleTech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {remaining > 0 ? <Badge tone="accent">{`+${remaining}`}</Badge> : null}
      </div>
    </Link>
  );
}
