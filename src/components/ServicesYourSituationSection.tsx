import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesYourSituationSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  
  const handleContactClick = () => {
    window.location.href = 'mailto:hello@justzoom.com';
  };

  return (
    <section className="scroll-section flex items-center justify-center" ref={ref}>
      <div className="global-container">
        <div className="flex items-center justify-center min-h-[50vh] text-center">
          <div className="max-w-4xl">
            <h2 className={`service-heading mb-8 section-heading-animate ${
              isInView ? 'in-view' : ''
            }`}>
              Your Situation
            </h2>
            <p className={`service-subtext section-text-animate ${
              isInView ? 'in-view' : ''
            }`}>
              Not every challenge fits neatly into a list of services. We've seen and solved countless complex situations, each demanding a different approach. Whatever your case looks like, 
              <button
                onClick={handleContactClick}
                className="underline hover:no-underline transition-all duration-200 hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 ml-2"
              >
                contact us
              </button>
              {" "}— we're confident in finding the right solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesYourSituationSection;