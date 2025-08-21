import { useState } from "react";
import HeaderBar from "@/components/HeaderBar";
import OverlayMenu from "@/components/OverlayMenu";
import FixedTopLogo from "@/components/FixedTopLogo";
import AboutPageTitle from "@/components/AboutPageTitle";
import AboutIntroSection from "@/components/AboutIntroSection";
import AboutTitleSection from "@/components/AboutTitleSection";
import AboutClientSection from "@/components/AboutClientSection";
import AboutCTASection from "@/components/AboutCTASection";


const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const clientTypes = [
    {
      heading: "We work with freelancers",
      subtext: "Protecting personal brands and online reputations that fuel independent careers."
    },
    {
      heading: "We work with creators & influencers", 
      subtext: "Helping Instagram, TikTok, and YouTube voices defend their image against bans, leaks, and attacks."
    },
    {
      heading: "We work with professionals",
      subtext: "Lawyers, doctors, executives, and leaders who need their digital presence to stay trusted."
    },
    {
      heading: "We work with individuals",
      subtext: "Anyone facing harmful content, impersonation, or online exposure they never asked for."
    },
    {
      heading: "We work with brands & companies",
      subtext: "Businesses that depend on customer trust, fair reviews, and strong reputations to grow."
    }
  ];

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderBar onMenuClick={handleMenuOpen} />
      <OverlayMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      <AboutPageTitle />
      <FixedTopLogo />
      
      <main>
        <AboutIntroSection />
        <AboutTitleSection />
        
        {clientTypes.map((client, index) => (
          <AboutClientSection 
            key={index}
            heading={client.heading}
            subtext={client.subtext}
          />
        ))}
        
        <AboutCTASection />
      </main>
    </>
  );
};

export default About;