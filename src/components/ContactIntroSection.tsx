import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollIndicator from '@/components/ScrollIndicator';

const ContactIntroSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section id="contact-intro" className="scroll-section flex items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          <h1 className={`contact-heading transition-all duration-600 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}>
            Contact Us
          </h1>
          <p className={`contact-subtext max-w-3xl transition-all duration-600 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: isInView ? '200ms' : '0ms' 
          }}>
            When your reputation is on the line, speed matters. Reach out today — we'll listen, assess, and act fast.
          </p>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default ContactIntroSection;