const ServicesSection = () => {
  const services = [
    {
      title: "Brand Identity",
      description: "Comprehensive brand development that tells your unique story."
    },
    {
      title: "Web Design",
      description: "Stunning websites that convert visitors into customers."
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning that drives measurable business results."
    },
    {
      title: "User Experience",
      description: "Intuitive experiences that delight and engage your users."
    }
  ];

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center px-6 py-section">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center md:text-left hover-rise"
            >
              <h3 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
                {service.title}
              </h3>
              <p className="text-lg font-sans text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-24">
          <a
            href="#contact"
            className="inline-block text-lg md:text-xl font-sans text-foreground border-b-2 border-foreground hover-rise transition-all duration-300 hover:border-muted-foreground hover:text-muted-foreground"
          >
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;