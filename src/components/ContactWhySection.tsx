const ContactWhySection = () => {
  const reasons = [
    "Every hour counts when harmful content spreads online",
    "The sooner we act, the more we can contain damage", 
    "Confidential, discreet, and results-driven from the first conversation"
  ];

  return (
    <section id="contact-why" className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-12 text-center">
          <h2 className="section-heading">
            Why Contact Us Immediately?
          </h2>
          
          <div className="max-w-4xl space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="contact-reason-item animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <p className="contact-reason-text">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWhySection;