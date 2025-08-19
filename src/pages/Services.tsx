import { useState } from 'react';
import HeaderBar from '@/components/HeaderBar';
import FixedTopLogo from '@/components/FixedTopLogo';
import OverlayMenu from '@/components/OverlayMenu';
import ServicesIntroSection from '@/components/ServicesIntroSection';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import ServicesYourSituationSection from '@/components/ServicesYourSituationSection';
import AboutFooter from '@/components/AboutFooter';

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Content, Image & Video Removal",
      description: "We remove harmful articles, leaked images, viral videos, and damaging posts across the internet. From search engines to social platforms, we act fast to take down what shouldn't be there."
    },
    {
      title: "Account Recovery",
      description: "If you've been banned, hacked, or impersonated, we restore access and secure your accounts. Our specialists work directly with platforms to get you back online quickly and safely."
    },
    {
      title: "Fake Review & Impersonation Takedown",
      description: "Fake reviews and copycat profiles can destroy trust overnight. We track them, file takedown requests, and restore credibility to your name or business."
    },
    {
      title: "Reputation Monitoring",
      description: "We continuously monitor mentions of your name, brand, or business. Our alerts detect threats before they spiral, giving you early protection and peace of mind."
    },
    {
      title: "Crisis Consultation",
      description: "When everything is on the line, you need expert guidance. We provide discreet, actionable strategies to manage online attacks, respond smartly, and safeguard your reputation in real time."
    },
    {
      title: "SEO Suppression",
      description: "When harmful content can't be removed, we push it down. Our SEO suppression techniques ensure damaging links get buried, while accurate, positive content rises to the top."
    },
    {
      title: "Legal Coordination",
      description: "Some cases need stronger action. We collaborate with legal partners to build cases, enforce takedowns, and protect your rights through the proper legal channels."
    },
    {
      title: "Copyright & DMCA Takedowns",
      description: "If your images, videos, or content are stolen, we file copyright and DMCA takedowns to remove them from search engines, hosting providers, and platforms worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeaderBar onMenuClick={() => setIsMenuOpen(true)} />
      <FixedTopLogo />
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main>
        <ServicesIntroSection />
        
        {services.map((service, index) => (
          <ServiceDetailSection
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
        
        <ServicesYourSituationSection />
      </main>
      
      <AboutFooter />
    </div>
  );
};

export default Services;