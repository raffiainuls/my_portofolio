"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * FadeIn — reusable scroll animation wrapper (Framer Motion).
 *
 * Wrap any element to make it fade and slide up the first time it scrolls into
 * view. Centralizing this keeps the animation consistent everywhere and means
 * one place to tweak timing. `delay` lets you stagger items in a list.
 *
 * Note: this is a Client Component ("use client") because animation runs in the
 * browser. Keep it as a thin wrapper so the content it wraps can stay server-rendered.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Render as a different element if needed (e.g. "li", "section"). */
  as?: "div" | "section" | "li" | "article";
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
