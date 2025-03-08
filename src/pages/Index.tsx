
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import LevelsSection from "@/components/sections/LevelsSection";
import GameModesSection from "@/components/sections/GameModesSection";
import ThreatMapSection from "@/components/sections/ThreatMapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LevelsSection />
        <GameModesSection />
        <ThreatMapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
