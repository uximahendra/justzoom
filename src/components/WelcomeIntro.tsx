import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import HeaderBar from './HeaderBar';

interface WelcomeIntroProps {
  onComplete: () => void;
  onMenuClick: () => void;
}

const WelcomeIntro = ({ onComplete, onMenuClick }: WelcomeIntroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Animation sequence on mount
  useEffect(() => {
    // Logo zoom-in animation
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 100);

    // Text slide-in after logo
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 750); // 600ms logo + 150ms delay

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  // Handle scroll to next/previous slide
  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentSlide < 2) {
      // Scroll down to next slide
      setCurrentSlide(prev => prev + 1);
      setTextVisible(false);
      
      // Animate in new text after slide transition
      setTimeout(() => {
        setTextVisible(true);
      }, 300);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      // Scroll up to previous slide
      setCurrentSlide(prev => prev - 1);
      setTextVisible(false);
      
      // Animate in new text after slide transition
      setTimeout(() => {
        setTextVisible(true);
      }, 300);
    }
  };

  // Handle click on "well, let's see"
  const handleLetsSeeClick = () => {
    // Add fade out animation before completing
    const container = document.querySelector('.welcome-intro-container') as HTMLElement;
    if (container) {
      container.classList.add('animate-fade-out');
      setTimeout(() => {
        onComplete();
      }, 300);
    } else {
      onComplete();
    }
  };

  const slides = [
    { text: "Hello at", id: "hello" },
    { text: "What is", id: "what" },
    { text: "Or should we say, who is", id: "who" }
  ];

  return (
    <div 
      className="welcome-intro-container fixed inset-0 bg-background z-50 overflow-hidden transition-opacity duration-300"
      onWheel={handleScroll}
    >
      <HeaderBar onMenuClick={onMenuClick} />
      {/* Slide Container */}
      <div 
        className="h-full transition-transform duration-700 ease-out"
        style={{ 
          transform: `translateY(-${currentSlide * 100}vh)` 
        }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className="h-screen w-full relative flex items-center justify-center"
          >
            {/* Top-left text */}
            <div className="absolute top-16 left-8 md:left-16">
              <h2 className={`font-noto font-normal text-foreground leading-tight transition-all duration-400 ease-out ${
                textVisible && currentSlide === index
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              } text-4xl md:text-5xl lg:text-6xl`}>
                {slide.text}
              </h2>
            </div>

            {/* Centered JustZoom logo */}
            <div className="text-center">
              <h1 className={`font-poppins font-bold text-foreground leading-none transition-all duration-600 ease-out ${
                logoVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              } text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}>
                JustZoom
              </h1>
            </div>

            {/* Bottom right "well, let's see" link (only on last slide) */}
            {index === 2 && (
              <div className="absolute bottom-16 right-8 md:right-16">
                <button
                  onClick={handleLetsSeeClick}
                  className={`font-noto font-normal text-foreground underline hover:text-muted-foreground transition-all duration-300 ${
                    textVisible && currentSlide === 2
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  } text-xl md:text-2xl lg:text-3xl`}
                  style={{ 
                    transitionDelay: textVisible && currentSlide === 2 ? '200ms' : '0ms' 
                  }}
                >
                  well, let's see →
                </button>
              </div>
            )}

            {/* Scroll indicator (only on first two slides) */}
            {index < 2 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce-gentle">
                  <span className="text-sm font-noto tracking-wider">Scroll</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeIntro;