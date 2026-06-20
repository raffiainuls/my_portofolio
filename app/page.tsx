import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FlagshipArchitecture } from "@/components/sections/FlagshipArchitecture";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

/**
 * Homepage — composes the sections in order. Each section is self-contained and
 * pulls its own content from the data files, so this file stays a simple outline
 * of the page.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FlagshipArchitecture />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <TechStack />
      <Contact />
    </>
  );
}
