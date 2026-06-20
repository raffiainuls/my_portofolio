import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";

/**
 * Footer — appears on every page (rendered in the root layout).
 * Pulls contact info from data/profile.ts so it stays in sync with the rest
 * of the site. GitHub link only renders if you've set profile.github.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold">
              {profile.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-sm text-muted">
              {profile.title} · {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            {profile.github ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &
            Tailwind CSS.
          </p>
          <Link href="/work" className="transition-colors hover:text-foreground">
            View all work →
          </Link>
        </div>
      </Container>
    </footer>
  );
}
