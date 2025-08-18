import { useEffect, useState } from "react";
import MinimalHeader from "@/components/MinimalHeader";
import ExpertiseHero from "@/components/ExpertiseHero";
import ServiceSection from "@/components/ServiceSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(Math.min(sectionIndex, services.length + 2)); // +2 for hero and final
    };

    window.addEventListener('scroll', handleScroll);
    
    // Add intersection observer for animations
    const observeElements = document.querySelectorAll('.slide-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    observeElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [services.length]);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-container">
      <MinimalHeader />
      
      <main>
        <ExpertiseHero />
        
        {services.map((service, index) => (
          <ServiceSection 
            key={index}
            title={service}
            index={index}
            total={services.length}
          />
        ))}
        
        <FinalSection />
      </main>
    </div>
  );
};

export default Index;
