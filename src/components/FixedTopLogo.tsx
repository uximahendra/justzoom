import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FixedTopLogo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    // Show logo with smooth slide up animation on initial load
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
      style={{ top: 'calc(var(--header-height) + 16px)' }}
    >
      <button 
        onClick={() => navigate('/?welcome=true')}
        className="logo-text hover:opacity-80 transition-opacity duration-200"
      >
        justzoom
      </button>
    </div>
  );
};

export default FixedTopLogo;