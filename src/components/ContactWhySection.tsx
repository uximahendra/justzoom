import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactWhySection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  
  const reasons = [
    "Every hour counts when harmful content spreads online",
    "The sooner we act, the more we can contain damage", 
    "Confidential, discreet, and results-driven from the first conversation"
  ];

  return (
    <section id="contact-why" className="scroll-section flex items-center justify-center" ref={ref}>
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-12 text-center">
          <h2 className={`section-heading transition-all duration-600 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Why Contact Us Immediately?
          </h2>
          
          <div className="max-w-4xl space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`contact-reason-item transition-all duration-600 ease-out ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isInView ? `${(index + 1) * 200}ms` : '0ms' 
                }}
              >
                <p className="contact-reason-text">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWhySection;