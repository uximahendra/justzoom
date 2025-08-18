const ExpertiseHero = () => {
  return (
    <section className="scroll-section flex flex-col items-center justify-center text-center px-6 py-16 pt-32">
      {/* Fixed Logo at top */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight font-noto">
          justzoom
        </h2>
      </div>

      {/* Hero heading */}
      <div className="max-w-4xl mx-auto mb-12 mt-20">
        <h1 className="body-large mb-4 text-foreground font-noto">
          When your online rights are <span className="text-accent font-medium">violated</span>, we exist to protect them
        </h1>
      </div>

      {/* Description paragraph */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="body-large text-muted-foreground leading-relaxed font-noto">
          Defending individuals and brands against attacks, misinformation, unfair exposure, and false narratives, while ensuring your reputation stays untouchable, your image protected, and your rights upheld online.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mb-16">
        <a
          href="#contact"
          className="inline-block bg-foreground text-background px-8 py-4 text-lg font-medium hover-rise transition-all duration-300 hover:bg-muted font-noto"
        >
          Contact Us
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <p className="text-muted-foreground text-sm uppercase tracking-wider font-noto">Scroll</p>
        <div className="w-px h-8 bg-muted-foreground mx-auto mt-2"></div>
      </div>
    </section>
  );
};

export default ExpertiseHero;