const ExpertiseHero = () => {
  return (
    <section className="scroll-section flex flex-col items-center justify-center text-center px-6 py-16">
      {/* Hero heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="hero-text mb-4">
          <span className="text-foreground">When your online rights are</span>
          <br />
          <span className="text-accent font-medium">violated</span>
        </h1>
        <h2 className="hero-text text-foreground">
          we exist to protect them
        </h2>
      </div>

      {/* Description paragraph */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="body-large text-muted-foreground leading-relaxed">
          Defending individuals and brands against attacks, misinformation, unfair exposure, and false narratives, while ensuring your reputation stays untouchable, your image protected, and your rights upheld online.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mb-16">
        <a
          href="#contact"
          className="inline-block bg-foreground text-background px-8 py-4 text-lg font-medium hover-rise transition-all duration-300 hover:bg-muted"
        >
          Contact Us
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <p className="text-muted-foreground text-sm uppercase tracking-wider">Scroll</p>
        <div className="w-px h-8 bg-muted-foreground mx-auto mt-2"></div>
      </div>
    </section>
  );
};

export default ExpertiseHero;