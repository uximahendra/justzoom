import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MinimalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 flex items-center justify-center hover-rise bg-background/80 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-foreground" />
          ) : (
            <Menu className="w-7 h-7 text-foreground" />
          )}
        </button>
      </header>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-foreground z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center text-center px-6">
          {/* Logo at top */}
          <div className="absolute top-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-background font-light tracking-wide font-noto">
              justzoom
            </h1>
          </div>

          {/* Main navigation - centered */}
          <nav className="space-y-8 mb-16">
            <a
              href="#services"
              className="block text-2xl md:text-3xl lg:text-4xl text-background hover-rise transition-colors hover:text-accent font-light font-noto"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-2xl md:text-3xl lg:text-4xl text-background hover-rise transition-colors hover:text-accent font-light font-noto"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-2xl md:text-3xl lg:text-4xl text-background hover-rise transition-colors hover:text-accent font-light font-noto"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          {/* Contact info at bottom */}
          <div className="absolute bottom-24 text-center">
            <p className="text-lg text-background mb-4 font-noto">
              Get in touch
            </p>
            <a
              href="mailto:hello@justzoom.com"
              className="text-accent hover:text-background transition-colors font-noto"
            >
              hello@justzoom.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinimalHeader;