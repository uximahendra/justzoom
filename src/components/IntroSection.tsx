import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollIndicator from '@/components/ScrollIndicator';

const IntroSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  
  const handleScrollClick = () => {
    const nextSection = document.querySelector('.scroll-section:nth-child(2)') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="scroll-section flex flex-col items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8">
          {/* Main paragraph */}
          <div className="intro-text max-w-4xl mt-12">
            <p className={`text-xl md:text-2xl text-foreground leading-relaxed font-light transition-all duration-800 ease-out ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: isInView ? '200ms' : '0ms' 
            }}>
              When your online rights are violated, we exist to protect them. Defending individuals and brands against attacks, misinformation, unfair exposure, and false narratives, while ensuring your reputation stays untouchable, your image protected, and your rights upheld online.
            </p>
          </div>
        </div>
      </div>
      
      <ScrollIndicator onClick={handleScrollClick} />
    </section>
  );
};

export default IntroSection;