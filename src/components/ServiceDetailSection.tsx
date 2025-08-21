import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ServiceDetailSectionProps {
  title: string;
  description: string;
}

const ServiceDetailSection = ({ title, description }: ServiceDetailSectionProps) => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section className="scroll-section flex items-center justify-center" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div className="max-w-4xl">
            <h2 className={`service-heading mb-8 section-heading-animate ${
              isInView ? 'in-view' : ''
            }`}>
              {title}
            </h2>
            <p className={`service-subtext section-text-animate ${
              isInView ? 'in-view' : ''
            }`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;