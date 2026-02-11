import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#e5ebe0]">
      <Navbar />
      <HeroSection />
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
