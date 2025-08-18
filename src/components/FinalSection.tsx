const FinalSection = () => {
  return (
    <section className="scroll-section flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title text-foreground mb-8 slide-up">
          We don't pitch.
          <br />
          <span className="text-accent">We deliver.</span>
        </h2>
        
        <p className="body-large text-muted-foreground mb-12 slide-up">
          Let us work — contact us.
        </p>

        {/* CTA Button */}
        <div className="slide-up">
          <a
            href="#contact"
            className="inline-block bg-foreground text-background px-12 py-6 text-xl font-medium hover-rise transition-all duration-300 hover:bg-muted hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;