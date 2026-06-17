import ImmersiveBackground from "@/components/sections/ImmersiveBackground";
import Nav from "@/components/sections/Nav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <ImmersiveBackground />
      <div className="page-content">
        <Nav />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
