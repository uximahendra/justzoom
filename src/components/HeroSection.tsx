const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Hello at */}
        <div className="fade-in-up mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Hello at
          </h2>
        </div>

        {/* Main Logo/Brand */}
        <div className="fade-in-up-delay mb-16 md:mb-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-foreground font-medium leading-none">
            décript
          </h1>
        </div>

        {/* Subtitle questions */}
        <div className="fade-in-up-delay-2 space-y-4 md:space-y-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground">
            What is
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-serif text-muted-foreground">
            Or should we say, who is
          </p>
          <div className="mt-8 md:mt-12">
            <a
              href="#about"
              className="inline-block text-base md:text-lg font-sans text-foreground border-b border-foreground hover-rise transition-all duration-300 hover:border-muted-foreground hover:text-muted-foreground"
            >
              well, let's see
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;