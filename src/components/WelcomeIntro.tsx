import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import HeaderBar from './HeaderBar';
import OverlayMenu from './OverlayMenu';

interface WelcomeIntroProps {
  onComplete: () => void;
  onMenuClick: () => void;
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

const WelcomeIntro = ({ onComplete, onMenuClick, isMenuOpen, onMenuClose }: WelcomeIntroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Animation sequence on mount
  useEffect(() => {
    // Logo animation: scale 1.2→1.0, opacity 0→1, 600ms ease-out
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 100);

    // Text slide-in after 150ms: y:50→0, opacity 0→1, 400ms ease-out
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
    e.preventDefault();
    
    if (e.deltaY > 0 && currentSlide < 2) {
      // Scroll down to next slide
      setCurrentSlide(prev => prev + 1);
      setTextVisible(false);
      
      // Animate in new text after slide transition
      setTimeout(() => {
        setTextVisible(true);
      }, 350);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      // Scroll up to previous slide
      setCurrentSlide(prev => prev - 1);
      setTextVisible(false);
      
      // Animate in new text after slide transition
      setTimeout(() => {
        setTextVisible(true);
      }, 350);
    }
  };

  // Handle scroll cue click or section navigation
  const handleScrollNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(prev => prev + 1);
      setTextVisible(false);
      setTimeout(() => {
        setTextVisible(true);
      }, 350);
    }
  };

  // Handle final section click - fade out and go to home
  const handleFinalClick = () => {
    const container = document.querySelector('.welcome-intro-container') as HTMLElement;
    if (container) {
      container.style.transition = 'opacity 500ms ease-out, transform 500ms ease-out';
      container.style.opacity = '0';
      container.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        onComplete();
      }, 500);
    } else {
      onComplete();
    }
  };

  const slides = [
    { text: "Hello at", id: "hello" },
    { text: "What is", id: "what" },
    { text: "Well let's see", id: "final" }
  ];

  return (
    <div 
      className="welcome-intro-container fixed inset-0 bg-white z-50 overflow-hidden scroll-smooth snap-y snap-mandatory"
      onWheel={handleScroll}
    >
      <HeaderBar onMenuClick={onMenuClick} />
      <OverlayMenu isOpen={isMenuOpen} onClose={onMenuClose} />
      
      {/* Fixed Centered JustZoom logo */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className={`font-poppins font-bold text-black leading-none transition-all duration-600 ease-out ${
          logoVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-[1.2]'
        } text-5xl md:text-6xl lg:text-[96px]`}>
          JustZoom
        </h1>
      </div>

      {/* Slide Container */}
      <div 
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translateY(-${currentSlide * 100}vh)` 
        }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className="h-screen w-full relative snap-start"
          >
            {/* Top-left text - Noto Serif Armenian */}
            <div 
              className="absolute z-20"
              style={{ left: '80px', top: '80px' }}
            >
              <h2 className={`font-serif font-normal text-black leading-tight transition-all duration-400 ease-out ${
                textVisible && currentSlide === index
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-[50px]'
              } text-[28px] md:text-[42px] lg:text-[64px]`}>
                {slide.text}
              </h2>
            </div>

            {/* Final section click handler */}
            {index === 2 && (
              <button
                onClick={handleFinalClick}
                className="absolute inset-0 w-full h-full cursor-pointer z-20"
                aria-label="Continue to main site"
              />
            )}

            {/* Scroll indicator with loop animation (only on first two slides) */}
            {index < 2 && (
              <button
                onClick={handleScrollNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
                aria-label="Scroll to next section"
              >
                <div className="flex flex-col items-center gap-2 text-black scroll-cue-animation">
                  <span className="text-sm font-light tracking-wider">Scroll</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeIntro;