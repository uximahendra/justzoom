import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollIndicator from '@/components/ScrollIndicator';

const AboutTitleSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section id="about-who-we-work-with" className="scroll-section flex items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <h2 className={`service-title transition-all duration-800 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Who We Work With
          </h2>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default AboutTitleSection;