/**
 * cn — tiny helper to conditionally join class names.
 *
 * Lets you write: cn("base", isActive && "active", className)
 * and it drops any falsey values. Keeps JSX className logic readable without
 * pulling in an extra dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
