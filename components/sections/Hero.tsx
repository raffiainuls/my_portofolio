import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { profile } from "@/data/profile";

/**
 * Hero — the first thing visitors see. Big "DATA ENGINEER" display type
 * (Majd-style), name, tagline, and two CTAs (View Work / Get in touch).
 * Content comes from data/profile.ts.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative dotted grid + a soft accent glow behind the heading */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
          <FadeIn>
            <p className="eyebrow">{profile.title}</p>
          </FadeIn>

          {/* Oversized display heading */}
          <FadeIn delay={0.05}>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Building reliable
              <br />
              <span className="text-gradient">data platforms</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">
              {profile.tagline}
            </p>
          </FadeIn>

          {/* Name line */}
          <FadeIn delay={0.15}>
            <p className="mt-6 text-sm text-muted">
              I&apos;m{" "}
              <span className="font-medium text-foreground">{profile.name}</span>{" "}
              — a {profile.title}
              {profile.currentCompany ? (
                <>
                  {" "}
                  currently at{" "}
                  <span className="font-medium text-foreground">
                    {profile.currentCompany}
                  </span>
                </>
              ) : null}
              , based in {profile.location}.
            </p>
          </FadeIn>

          {/* Call-to-action buttons */}
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent/90"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
