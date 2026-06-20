import { FadeIn } from "@/components/ui/FadeIn";
import type { ReactNode } from "react";

/**
 * SectionHeading — the consistent header used at the top of each homepage
 * section: a small accent "eyebrow" label, a big title, and an optional intro.
 * Keeps typography and spacing identical across sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <FadeIn className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-base text-muted sm:text-lg">{intro}</p> : null}
    </FadeIn>
  );
}
