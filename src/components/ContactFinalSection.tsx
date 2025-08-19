const ContactFinalSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:hello@justzoom.com';
  };

  return (
    <section id="contact-final" className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-center">
          <h2 className="contact-heading">
            We don't wait. We act.
          </h2>
          
          <button
            onClick={handleContactClick}
            className="contact-final-cta"
          >
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactFinalSection;