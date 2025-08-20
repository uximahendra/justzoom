import { useState } from "react";
import HeaderBar from "@/components/HeaderBar";
import OverlayMenu from "@/components/OverlayMenu";
import FixedTopLogo from "@/components/FixedTopLogo";
import IntroSection from "@/components/IntroSection";
import WeDoSection from "@/components/WeDoSection";
import CTASection from "@/components/CTASection";
import WelcomeIntro from "@/components/WelcomeIntro";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  
  const services = [
    "We do Content, Image & Video Removal",
    "We do Account Recovery", 
    "We do Fake Review & Impersonation Takedown",
    "We do Reputation Monitoring",
    "We do Crisis Consultation",
    "We do SEO Suppression",
    "We do Legal Coordination",
    "We do Copyright & DMCA Takedowns"
  ];

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomeIntro onComplete={handleWelcomeComplete} />;
  }

  return (
    <>
      <HeaderBar onMenuClick={handleMenuOpen} />
      <OverlayMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      <FixedTopLogo />
      
      <main>
        <IntroSection />
        
        {services.map((service, index) => (
          <WeDoSection 
            key={index}
            title={service}
            id={index === 0 ? 'services' : undefined}
          />
        ))}
        
        <CTASection />
      </main>
    </>
  );
};

export default Index;
