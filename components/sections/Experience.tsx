import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";

/**
 * Experience — a vertical timeline of work history (data/experience.ts).
 *
 * Each role sits on a left-hand line with a dot; the current role gets an
 * accent-colored dot, a glow, and a "Current" badge. The whole thing is
 * data-driven, so adding a job is just editing the data file.
 */
export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        intro="From data entry to building national-scale streaming platforms — a path through data engineering, science, and analysis."
      />

      <div className="mt-12">
        {/* The vertical line runs down the left; each item hangs off it. */}
        <ol className="relative border-l border-border">
          {experience.map((job, i) => (
            <FadeIn
              as="li"
              key={`${job.company}-${job.period}`}
              delay={i * 0.05}
              className="relative ml-6 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <span
                className={
                  "absolute -left-[1.95rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 " +
                  (job.current
                    ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
                    : "border-border bg-surface")
                }
                aria-hidden
              />

              {/* Header: role, company, period */}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="font-display text-lg font-bold">{job.role}</h3>
                  <span className="text-muted">·</span>
                  <span className="font-medium text-accent">{job.company}</span>
                  {job.current ? <Badge tone="accent">Current</Badge> : null}
                </div>
                <p className="shrink-0 text-sm text-muted">{job.period}</p>
              </div>

              {/* Sub-line: type + location */}
              <p className="mt-1 text-sm text-muted">
                {[job.type, job.location].filter(Boolean).join(" · ")}
              </p>

              {job.description ? (
                <p className="mt-3 text-sm italic text-muted">
                  {job.description}
                </p>
              ) : null}

              {/* Achievement bullets */}
              <ul className="mt-4 space-y-2">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech badges for this role */}
              {job.techStack && job.techStack.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              ) : null}
            </FadeIn>
          ))}
        </ol>
      </div>
    </Section>
  );
}
