import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Container — centers content and applies the shared max-width + horizontal
 * padding used by every section. Use this instead of repeating `max-w-... px-...`
 * everywhere, so all sections line up perfectly.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
