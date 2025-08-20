import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  onClick?: () => void;
  className?: string;
}

const ScrollIndicator = ({ onClick, className = "" }: ScrollIndicatorProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: scroll to next section
      const currentSection = document.querySelector('.scroll-section:hover') || 
                           document.querySelector('.scroll-section');
      if (currentSection) {
        const nextSection = currentSection.nextElementSibling as HTMLElement;
        if (nextSection && nextSection.classList.contains('scroll-section')) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground hover:opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 ${className}`}
      aria-label="Scroll to next section"
    >
      <span className="text-sm font-light tracking-wider uppercase">Scroll</span>
      <div className="animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ScrollIndicator;