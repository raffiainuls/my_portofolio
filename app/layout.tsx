import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";

/**
 * Fonts via next/font — self-hosted automatically (fast, no layout shift,
 * no external request). Each exposes a CSS variable that tailwind.config.ts
 * maps to `font-sans` (Inter) and `font-display` (Space Grotesk).
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/**
 * Site-wide metadata for SEO and social sharing. Next.js injects these into
 * <head>. `metadataBase` should become your real domain once deployed.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://raffi-portfolio.vercel.app"),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Data Engineer",
    "Data Pipeline",
    "Kafka",
    "Flink",
    "Spark",
    "dbt",
    "ClickHouse",
    "Raffi Ainul Afif",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        {/* pt-16 clears the fixed navbar height */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
