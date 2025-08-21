import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollIndicator from '@/components/ScrollIndicator';

const ContactIntroSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section id="contact-intro" className="scroll-section flex items-center justify-center relative" ref={ref}>
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          <h1 className={`contact-heading section-heading-animate ${
            isInView ? 'in-view' : ''
          }`}>
            Contact Us
          </h1>
          <p className={`contact-subtext max-w-3xl section-text-animate ${
            isInView ? 'in-view' : ''
          }`}>
            When your reputation is on the line, speed matters. Reach out today — we'll listen, assess, and act fast.
          </p>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default ContactIntroSection;