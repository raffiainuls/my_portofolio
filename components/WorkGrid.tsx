"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/cn";
import type { Project, ProjectCategory } from "@/lib/types";

/** "All" plus the real categories — used for the filter buttons. */
type Filter = "All" | ProjectCategory;

/**
 * WorkGrid — the filterable project grid on the /work page.
 *
 * It's a Client Component because filtering is interactive state. It receives
 * the full project list and category list as props from the server page, so all
 * the data still lives in data/projects.ts.
 */
export function WorkGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...categories];

  // Recompute the visible list only when the filter or data changes.
  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter, projects],
  );

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = f === filter;
          // How many projects in this filter — shown as a count for context.
          const count =
            f === "All"
              ? projects.length
              : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "border-accent bg-accent text-background"
                  : "border-border text-muted hover:border-accent/40 hover:text-foreground",
              )}
            >
              {f}
              <span className={cn("ml-2", active ? "text-background/70" : "text-muted/60")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project grid. AnimatePresence + layout animates cards as the filter changes. */}
      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
