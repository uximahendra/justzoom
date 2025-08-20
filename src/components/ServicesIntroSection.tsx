import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollIndicator from '@/components/ScrollIndicator';

const ServicesIntroSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  
  const handleScrollClick = () => {
    const nextSection = document.querySelector('.scroll-section:nth-child(2)') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services-intro" className="scroll-section flex items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <p className={`intro-text max-w-4xl transition-all duration-800 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            At JustZoom, we defend your online rights with precision, discretion, and proven results. Whether you're facing a sudden attack or planning long-term protection, our services give you the control and confidence you deserve.
          </p>
        </div>
      </div>
      
      <ScrollIndicator onClick={handleScrollClick} />
    </section>
  );
};

export default ServicesIntroSection;