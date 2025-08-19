import { X, Facebook, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OverlayMenu = ({ isOpen, onClose }: OverlayMenuProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleNavClick = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div
      className={`fixed inset-0 z-[2000] transition-all duration-300 ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}
      style={{ backgroundColor: 'hsl(var(--overlay-bg))' }}
    >
      <div className="h-full flex flex-col justify-center items-center relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 md:w-7 md:h-7" style={{ color: 'hsl(var(--text-inverse))' }} />
        </button>

        {/* Top Logo */}
        <div className="absolute top-24">
          <h1 className="logo-text-overlay">justzoom</h1>
        </div>

        {/* Main Navigation - Center */}
        <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <button
            onClick={() => handleNavClick('home')}
            className="nav-text transition-all duration-200 hover:underline hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="nav-text transition-all duration-200 hover:underline hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="nav-text transition-all duration-200 hover:underline hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="nav-text transition-all duration-200 hover:underline hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Contact
          </button>
        </nav>

        {/* Bottom Social Icons */}
        <div className="absolute bottom-24 flex items-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Facebook"
          >
            <Facebook className="w-full h-full" style={{ color: 'hsl(var(--text-inverse))' }} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-full h-full" style={{ color: 'hsl(var(--text-inverse))' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;