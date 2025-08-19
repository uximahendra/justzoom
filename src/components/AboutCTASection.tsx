const AboutCTASection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:hello@justzoom.com';
  };

  return (
    <section id="about-contact" className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div>
            <h2 className="about-cta-text mb-4">
              Ready to protect your name, your image, and your digital presence?
            </h2>
            <p className="about-cta-text">
              Let's talk — 
              <button
                onClick={handleContactClick}
                className="underline hover:no-underline transition-all duration-200 hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 ml-2"
              >
                Contact us
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;