import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const IntroSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  
  const handleScrollClick = () => {
    const nextSection = document.querySelector('.scroll-section:nth-child(2)') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split text into lines for staggered animation
  const textLines = [
    "When your online rights are violated, we exist to protect them —",
    "defending individuals and brands against attacks, misinformation,",
    "unfair exposure, and false narratives, while ensuring your reputation",
    "stays untouchable, your image protected, and your rights upheld online."
  ];

  return (
    <section id="home" className="scroll-section flex items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div className="intro-text max-w-4xl">
            {textLines.map((line, index) => (
              <p 
                key={index}
                className={`mb-2 transition-all duration-600 ease-out ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: isInView ? `${index * 150}ms` : '0ms' 
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Cue */}
      <button
        onClick={handleScrollClick}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground hover:opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
        aria-label="Scroll to next section"
      >
        <div className="animate-bounce-gentle animate-pulse-glow">
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
    </section>
  );
};

export default IntroSection;