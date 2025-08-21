import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section id="contact" className="scroll-section flex items-center justify-center relative">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          {/* Final section content */}
        </div>
      </div>
      
      {/* Bottom right CTA button */}
      <div className="absolute bottom-16 right-8 md:right-16">
        <button
          onClick={handleContactClick}
          className="font-noto font-normal text-foreground underline hover:text-muted-foreground transition-all duration-300 text-xl md:text-2xl lg:text-3xl"
        >
          Let us work — Contact us →
        </button>
      </div>
    </section>
  );
};

export default CTASection;