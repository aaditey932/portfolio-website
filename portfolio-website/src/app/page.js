import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <HeroSection />
      <div className="flex-1" />
      <Footer />
    </main>
  );
}
