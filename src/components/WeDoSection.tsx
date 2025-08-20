import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollIndicator from '@/components/ScrollIndicator';

interface WeDoSectionProps {
  title: string;
  id?: string;
}

const WeDoSection = ({ title, id }: WeDoSectionProps) => {
  const { ref, isInView } = useScrollAnimation(0.4);

  return (
    <section id={id} className="scroll-section flex items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div className="relative">
            <h2 className={`service-title transition-all duration-600 ease-out ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              {title}
            </h2>
            <div className={`w-16 h-px bg-accent mx-auto mt-8 transition-all duration-800 ease-out ${
              isInView 
                ? 'opacity-100 scale-x-100' 
                : 'opacity-0 scale-x-0'
            }`} 
            style={{ transitionDelay: isInView ? '300ms' : '0ms' }} />
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default WeDoSection;