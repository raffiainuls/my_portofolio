import { cn } from "@/lib/cn";

/**
 * Badge — a small pill used for tech-stack tags and category labels.
 * `tone` switches between the neutral surface style and the accent style.
 */
export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: string;
  tone?: "neutral" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "neutral" &&
          "border-border bg-surface text-muted",
        tone === "accent" &&
          "border-accent/30 bg-accent/10 text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
