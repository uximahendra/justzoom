import { useState } from 'react';
import HeaderBar from '@/components/HeaderBar';
import OverlayMenu from '@/components/OverlayMenu';
import FixedTopLogo from '@/components/FixedTopLogo';

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
      <OverlayMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      <FixedTopLogo />
      
      <main className="snap-container">
        <ContactIntroSection />
        <ContactDetailsSection />
        <ContactWhySection />
        <ContactFinalSection />
      </main>
    </div>
  );
};

export default Contact;