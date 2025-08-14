const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      {/* Hello at - positioned in top left */}
      <div className="absolute top-16 left-8 md:left-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
          Hello at
        </h2>
      </div>

      {/* Main décript text - centered */}
      <div className="text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-serif text-foreground font-medium leading-none">
          décript
        </h1>
      </div>

      {/* Bottom left section */}
      <div className="absolute bottom-16 left-8 md:left-16 space-y-2 md:space-y-4">
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-tight">
          What is
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl font-serif text-muted-foreground leading-tight">
          Or should we say, who is
        </p>
        <div className="mt-4">
          <a
            href="#about"
            className="inline-block text-base md:text-lg lg:text-xl font-serif text-foreground underline hover-rise transition-all duration-300 hover:text-muted-foreground"
          >
            well, let's see
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;