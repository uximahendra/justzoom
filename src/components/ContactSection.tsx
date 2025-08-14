const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 py-section">
      <div className="max-w-content mx-auto text-center">
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight">
            Let's create together
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
              Ready to bring your vision to life?
            </p>
            <p className="text-lg font-sans text-muted-foreground leading-relaxed">
              We'd love to hear about your project and discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <a
                href="mailto:hello@decript.tech"
                className="inline-block text-xl md:text-2xl font-sans text-foreground border-b-2 border-foreground hover-rise transition-all duration-300 hover:border-muted-foreground hover:text-muted-foreground"
              >
                hello@decript.tech
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-lg mx-auto">
              <div>
                <h4 className="text-lg font-serif mb-2">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-base font-sans text-muted-foreground hover-rise transition-colors hover:text-foreground"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Location</h4>
                <p className="text-base font-sans text-muted-foreground">
                  New York, NY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;