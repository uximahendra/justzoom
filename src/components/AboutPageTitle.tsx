import { useState, useEffect } from "react";

const AboutPageTitle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    // Show title with smooth slide up animation on initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className={`fixed left-1/2 transform -translate-x-1/2 z-[900] transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ top: 'calc(var(--header-height) - 8px)' }}
    >
      <span 
        className="font-noto-serif font-normal tracking-wide"
        style={{
          fontSize: '30px',
          color: 'transparent',
          WebkitTextStroke: '1px hsl(var(--accent))'
        }}
      >
        About
      </span>
    </div>
  );
};

export default AboutPageTitle;