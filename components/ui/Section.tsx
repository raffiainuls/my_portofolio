import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Section — a full-width <section> with consistent vertical rhythm and an
 * optional `id` so the navbar can jump to it (e.g. #about, #skills).
 * Wraps children in a Container so content stays aligned with the rest of the page.
 */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
