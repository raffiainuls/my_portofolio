import type { Config } from "tailwindcss";

/**
 * Tailwind config.
 *
 * The design tokens from the project plan (CLAUDE.md §7) live here so every
 * component can use semantic class names like `bg-background`, `text-muted`,
 * or `text-accent` instead of raw hex values. Change a color once here and it
 * updates everywhere.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // near-black page background
        surface: "#141414", // cards / raised panels
        border: "#262626", // hairline borders
        foreground: "#f5f5f5", // primary text (off-white)
        muted: "#a3a3a3", // secondary / muted text
        accent: {
          DEFAULT: "#22d3ee", // cyan/teal accent
          soft: "#0e7490", // darker accent for hovers/borders
        },
      },
      fontFamily: {
        // Wired up to the next/font CSS variables defined in app/layout.tsx
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem", // shared page max width (1152px)
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
