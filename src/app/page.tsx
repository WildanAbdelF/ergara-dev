import PersonaBackground from "@/components/PersonaBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BiodataSection from "@/components/BiodataSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#00f0ff] selection:text-black">
      {/* Persona 3 Reload Theme Background */}
      <PersonaBackground />

      {/* Top HUD Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Section 01: Biodata & Dossier */}
        <BiodataSection />

        {/* Section 02 & 03: Hard & Soft Skills */}
        <SkillsSection />

        {/* Section 04: Communication & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
