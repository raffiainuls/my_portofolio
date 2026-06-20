import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { profile } from "@/data/profile";

/**
 * About — photo + bio paragraphs + a small "facts" panel.
 *
 * The photo is given a theme-matched treatment: grayscale, a soft accent glow
 * behind it, a hairline border, and a gradient that fades the bottom edge into
 * the page background so the near-black portrait melts into the site.
 *
 * Everything reads from data/profile.ts. If `profile.photo` is empty, a tasteful
 * monogram placeholder shows instead, so the layout never breaks.
 */
export function About() {
  // Initials for the fallback placeholder (e.g. "RA").
  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Who I am" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Photo */}
        <FadeIn>
          <div className="relative">
            {/* Soft accent glow behind the photo */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-accent/10 blur-[60px]" />

            <div className="group relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              ) : (
                // Fallback shown until you add public/images/photo.jpg
                <div className="flex h-full w-full items-center justify-center bg-grid">
                  <span className="font-display text-6xl font-bold text-muted/40">
                    {initials}
                  </span>
                </div>
              )}

              {/* Gradient fade so the bottom of the photo blends into the page */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
          </div>
        </FadeIn>

        {/* Bio + facts */}
        <div className="flex flex-col justify-center">
          <FadeIn delay={0.1} className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>

          {/* Quick facts */}
          <FadeIn delay={0.2}>
            <dl className="mt-8 grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-3">
              <div>
                <dt className="eyebrow">Currently</dt>
                <dd className="mt-1 text-sm font-medium">{profile.title}</dd>
                {profile.currentCompany ? (
                  <dd className="text-xs text-muted">
                    @ {profile.currentCompany}
                  </dd>
                ) : null}
              </div>
              <div>
                <dt className="eyebrow">Education</dt>
                <dd className="mt-1 text-sm font-medium">
                  {profile.education.degree}
                </dd>
                <dd className="text-xs text-muted">{profile.education.school}</dd>
                <dd className="text-xs text-muted">{profile.education.period}</dd>
              </div>
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-1 text-sm font-medium">{profile.location}</dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
