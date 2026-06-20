import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { focusAreas, skillGroups } from "@/data/profile";

/**
 * Skills — two parts:
 *   1. "Focus areas": the four hats (Engineer / Scientist / Analyst / Cleaning).
 *   2. Grouped skills: languages, streaming, storage, cloud, etc.
 * Both are driven by arrays in data/profile.ts, so editing is just data.
 */
export function Skills() {
  return (
    <Section id="skills" className="border-y border-border bg-surface/30">
      <SectionHeading
        eyebrow="Skills"
        title="What I do"
        intro="A data engineer's toolkit, grounded in a data science and analysis background."
      />

      {/* Focus areas */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area, i) => (
          <FadeIn key={area.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-background p-6">
              <h3 className="font-display text-lg font-bold text-accent">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {area.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Grouped skills */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.05}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
