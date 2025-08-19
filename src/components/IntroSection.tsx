import { ChevronDown } from 'lucide-react';

const IntroSection = () => {
  const handleScrollClick = () => {
    const nextSection = document.querySelector('.scroll-section:nth-child(2)') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="scroll-section flex items-center justify-center relative">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <p className="intro-text max-w-4xl">
            When your online rights are violated, we exist to protect them — defending individuals and brands against attacks, misinformation, unfair exposure, and false narratives, while ensuring your reputation stays untouchable, your image protected, and your rights upheld online.
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

export default IntroSection;