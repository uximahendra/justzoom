interface AboutClientSectionProps {
  heading: string;
  subtext: string;
}

const AboutClientSection = ({ heading, subtext }: AboutClientSectionProps) => {
  return (
    <section className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div className="space-y-8">
            <h2 className="client-heading animate-fade-in">{heading}</h2>
            <p className="client-subtext animate-fade-in" style={{ animationDelay: '200ms' }}>
              {subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClientSection;