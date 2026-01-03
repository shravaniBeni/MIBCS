import { NavBar } from "@/components/ui/tubelight-navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import { Home, User, Code, Trophy, Calendar } from "lucide-react";

const Index = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Domains', url: '#domains', icon: Code },
    { name: 'Achievements', url: '#achievements', icon: Trophy },
    { name: 'Events', url: '#events', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Grid Pattern Background */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundColor: '#0c0c0c',
          backgroundImage: `
            linear-gradient(
              0deg,
              transparent 24%,
              #1e1e1e 25%,
              #1e1e1e 26%,
              transparent 27%,
              transparent 74%,
              #1e1e1e 75%,
              #1e1e1e 76%,
              transparent 77%,
              transparent
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              #1e1e1e 25%,
              #1e1e1e 26%,
              transparent 27%,
              transparent 74%,
              #1e1e1e 75%,
              #1e1e1e 76%,
              transparent 77%,
              transparent
            )
          `,
          backgroundSize: '55px 55px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <CursorGlow />
        <NavBar items={navItems} />
        <main>
          <HeroSection />
          <AboutSection />
          <DomainsSection />
          <AchievementsSection />
          <EventsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;