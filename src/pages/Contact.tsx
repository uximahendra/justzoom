import { useState } from 'react';
import HeaderBar from '@/components/HeaderBar';
import FixedTopLogo from '@/components/FixedTopLogo';
import OverlayMenu from '@/components/OverlayMenu';
import AboutFooter from '@/components/AboutFooter';
import ContactIntroSection from '@/components/ContactIntroSection';
import ContactDetailsSection from '@/components/ContactDetailsSection';
import ContactWhySection from '@/components/ContactWhySection';
import ContactFinalSection from '@/components/ContactFinalSection';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="contact-page">
      <HeaderBar onMenuClick={handleMenuClick} />
      <FixedTopLogo />
      <OverlayMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      
      <main className="snap-container">
        <ContactIntroSection />
        <ContactDetailsSection />
        <ContactWhySection />
        <ContactFinalSection />
      </main>
      
      <AboutFooter />
    </div>
  );
};

export default Contact;