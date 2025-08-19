import ContactForm from './ContactForm';

const ContactDetailsSection = () => {
  return (
    <section id="contact-details" className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-12">
          <h2 className="section-heading text-center">
            Get in Touch
          </h2>
          
          <div className="w-full max-w-4xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;