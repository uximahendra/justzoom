const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-section">
      <div className="max-w-content mx-auto text-center">
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight">
            We are décript
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed">
              A creative digital agency that transforms ideas into extraordinary digital experiences.
            </p>
            
            <p className="text-lg md:text-xl font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We craft beautiful, functional, and meaningful digital solutions that resonate with your audience and drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 mt-16 md:mt-24">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Design</h3>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Beautiful, intuitive interfaces that captivate and engage your users.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Development</h3>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Robust, scalable solutions built with cutting-edge technology.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Strategy</h3>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Data-driven insights that guide every creative decision we make.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;