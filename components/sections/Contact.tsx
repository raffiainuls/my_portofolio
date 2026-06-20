import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  ArrowUpRight,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { profile } from "@/data/profile";

/**
 * Contact — closing call-to-action with direct ways to reach out.
 * Each method is built from data/profile.ts. The GitHub row only renders if
 * you've filled in profile.github.
 */
export function Contact() {
  // Build the list of contact methods. Filtering out empty ones keeps the UI clean.
  const methods = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: profile.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      Icon: PhoneIcon,
      external: false,
    },
    profile.github
      ? {
          label: "GitHub",
          value: "See my code",
          href: profile.github,
          Icon: GitHubIcon,
          external: true,
        }
      : null,
  ].filter((m): m is NonNullable<typeof m> => m !== null);

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
        {/* Soft accent glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative">
          <FadeIn>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s build something with{" "}
              <span className="text-gradient">data</span>.
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
              Open to data engineering roles and freelance projects. The fastest
              way to reach me is email — I usually reply within a day.
            </p>
          </FadeIn>

          {/* Contact method cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {methods.map((method, i) => (
              <FadeIn key={method.label} delay={i * 0.05}>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-colors group-hover:border-accent/40">
                    <method.Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {method.label}
                    </span>
                    <span className="block truncate font-medium">
                      {method.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
