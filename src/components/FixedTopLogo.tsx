import { useState, useEffect } from "react";

const FixedTopLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    // Show logo with animation on initial load
    const timer = setTimeout(() => {
      handleScroll();
    }, 500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className={`fixed left-1/2 transform -translate-x-1/2 z-[900] transition-all duration-500 ${
        isVisible ? 'opacity-100 animate-logo-reveal' : 'opacity-0'
      }`}
      style={{ top: 'calc(var(--header-height) + 16px)' }}
    >
      <h1 className="logo-text">justzoom</h1>
    </div>
  );
};

export default FixedTopLogo;