interface ServiceSectionProps {
  title: string;
  index: number;
  total: number;
}

const ServiceSection = ({ title, index, total }: ServiceSectionProps) => {
  return (
    <section className="scroll-section flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-muted-foreground text-sm uppercase tracking-wider font-noto">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
        
        <h2 className="section-title text-foreground mb-12 slide-up font-noto">
          {title}
        </h2>

        {/* Subtle line decoration */}
        <div className="w-16 h-px bg-accent mx-auto"></div>
      </div>
    </section>
  );
};

export default ServiceSection;