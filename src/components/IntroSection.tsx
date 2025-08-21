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
            <p className={`text-xl md:text-2xl text-foreground leading-relaxed font-light section-text-animate ${
              isInView ? 'in-view' : ''
            }`}>
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