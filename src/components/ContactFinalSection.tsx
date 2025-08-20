import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactFinalSection = () => {
  const { ref, isInView } = useScrollAnimation(0.4);
  
  const handleContactClick = () => {
    window.location.href = 'mailto:hello@justzoom.com';
  };

  return (
    <section id="contact-final" className="scroll-section flex items-center justify-center" ref={ref}>
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-center">
          <h2 className={`contact-heading transition-all duration-600 ease-out ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            We don't wait. We act.
          </h2>
          
          <button
            onClick={handleContactClick}
            className={`contact-final-cta hover-underline transition-all duration-600 ease-out ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: isInView ? '300ms' : '0ms' 
            }}
          >
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactFinalSection;