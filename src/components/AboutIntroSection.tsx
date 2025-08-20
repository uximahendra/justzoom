import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollIndicator from '@/components/ScrollIndicator';

const AboutIntroSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  
  const handleScrollClick = () => {
    const nextSection = document.querySelector('.scroll-section:nth-child(2)') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-intro" className="scroll-section flex items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <p className={`intro-text max-w-4xl transition-all duration-800 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            JustZoom is built on one simple truth: everyone deserves the right to protect their name, image, and digital presence. We defend online rights with speed, discretion, and absolute focus — delivering real solutions, not empty promises.
          </p>
        </div>
      </div>
      
      <ScrollIndicator onClick={handleScrollClick} />
    </section>
  );
};

export default AboutIntroSection;