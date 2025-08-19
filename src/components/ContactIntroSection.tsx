const ContactIntroSection = () => {
  return (
    <section id="contact-intro" className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          <h1 className="contact-heading">
            Contact Us
          </h1>
          <p className="contact-subtext max-w-3xl">
            When your reputation is on the line, speed matters. Reach out today — we'll listen, assess, and act fast.
          </p>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="scroll-arrow animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntroSection;