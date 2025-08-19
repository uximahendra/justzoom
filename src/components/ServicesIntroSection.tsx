import { ChevronDown } from 'lucide-react';

const ServicesIntroSection = () => {
  const handleScrollClick = () => {
    const nextSection = document.querySelector('.scroll-section:nth-child(2)') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services-intro" className="scroll-section flex items-center justify-center relative">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <p className="intro-text max-w-4xl">
            At JustZoom, we defend your online rights with precision, discretion, and proven results. Whether you're facing a sudden attack or planning long-term protection, our services give you the control and confidence you deserve.
          </p>
        </div>
      </div>
      
      {/* Scroll Cue */}
      <button
        onClick={handleScrollClick}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground hover:opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
        aria-label="Scroll to next section"
      >
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
    </section>
  );
};

export default ServicesIntroSection;