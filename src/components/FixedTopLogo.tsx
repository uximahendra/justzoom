import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FixedTopLogo = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show logo with smooth slide up animation on initial load
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className={`fixed left-1/2 transform -translate-x-1/2 z-[900] transition-all duration-700 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ top: '32px' }}
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