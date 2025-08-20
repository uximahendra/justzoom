import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AboutClientSectionProps {
  heading: string;
  subtext: string;
}

const AboutClientSection = ({ heading, subtext }: AboutClientSectionProps) => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section className="scroll-section flex items-center justify-center" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div className="space-y-8">
            <h2 className={`client-heading transition-all duration-800 ease-out ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              {heading}
            </h2>
            <p className={`client-subtext transition-all duration-800 ease-out ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: isInView ? '400ms' : '0ms' 
            }}>
              {subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClientSection;