import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactIntroSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section id="contact-intro" className="scroll-section flex items-center justify-center" ref={ref}>
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
          
          {/* Enhanced scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-600 ease-out ${
            isInView 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: isInView ? '400ms' : '0ms' 
          }}>
            <div className="animate-bounce-gentle">
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntroSection;