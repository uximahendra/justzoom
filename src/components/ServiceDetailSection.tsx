interface ServiceDetailSectionProps {
  title: string;
  description: string;
}

const ServiceDetailSection = ({ title, description }: ServiceDetailSectionProps) => {
  return (
    <section className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div className="max-w-4xl">
            <h2 className="service-heading mb-8 fade-in">
              {title}
            </h2>
            <p className="service-subtext fade-in">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;