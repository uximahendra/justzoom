const ContactAdvantageSection = () => {
  return (
    <section id="contact-advantage" className="scroll-section flex items-center justify-center bg-background">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            Why contact us immediately?
          </h2>
          
          <div className="max-w-4xl text-left space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-foreground text-lg md:text-xl font-light mt-1">•</span>
              <p className="text-lg md:text-xl font-light text-foreground" style={{ fontFamily: 'var(--font-noto)' }}>
                Every hour matters when dealing with reputation crises and online threats
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-foreground text-lg md:text-xl font-light mt-1">•</span>
              <p className="text-lg md:text-xl font-light text-foreground" style={{ fontFamily: 'var(--font-noto)' }}>
                24/7 emergency response team ready to protect your digital presence
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-foreground text-lg md:text-xl font-light mt-1">•</span>
              <p className="text-lg md:text-xl font-light text-foreground" style={{ fontFamily: 'var(--font-noto)' }}>
                Proven track record in crisis management and reputation recovery
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-lg md:text-xl font-light text-foreground" style={{ fontFamily: 'var(--font-noto)' }}>
                <span className="font-normal">Ready to protect your reputation?</span> Contact us now and let us safeguard your digital identity!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAdvantageSection;