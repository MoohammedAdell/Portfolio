import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { MouseCursor } from "@/components/mouse-cursor";
import { ProcessSection } from "@/components/process-section";
import { RevealSection } from "@/components/ui/RevealSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MouseCursor />
      <Navbar />
      <HeroSection />

      <RevealSection>
        <AboutSection />
      </RevealSection>

      <RevealSection>
        <SkillsSection />
      </RevealSection>

      <RevealSection>
        <ProcessSection />
      </RevealSection>
      <RevealSection>
        <ProjectsSection />
      </RevealSection>
      <ContactSection />
      <Footer />
    </main>
  );
}
