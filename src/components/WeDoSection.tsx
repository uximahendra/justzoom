interface WeDoSectionProps {
  title: string;
  id?: string;
}

const WeDoSection = ({ title, id }: WeDoSectionProps) => {
  return (
    <section id={id} className="scroll-section flex items-center justify-center">
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <h2 className="service-title">{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default WeDoSection;