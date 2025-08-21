const AboutCTASection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:hello@justzoom.com';
  };

  return (
    <section id="about-contact" className="scroll-section flex items-center justify-center relative">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div>
            <h2 className="about-cta-text mb-4">
              Ready to protect your name, your image, and your digital presence?
            </h2>
            <div className="absolute bottom-16 right-8 md:right-16">
              <button
                onClick={handleContactClick}
                className="font-noto font-normal text-foreground underline hover:text-muted-foreground transition-all duration-300 text-xl md:text-2xl lg:text-3xl"
              >
                Let's talk — Contact us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;