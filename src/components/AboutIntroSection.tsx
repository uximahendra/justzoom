import { ChevronDown } from 'lucide-react';

const AboutIntroSection = () => {
  const handleScrollClick = () => {
    const nextSection = document.querySelector('.scroll-section:nth-child(2)') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-intro" className="scroll-section flex items-center justify-center relative">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <p className="intro-text max-w-4xl">
            JustZoom is built on one simple truth: everyone deserves the right to protect their name, image, and digital presence. We defend online rights with speed, discretion, and absolute focus — delivering real solutions, not empty promises.
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

export default AboutIntroSection;