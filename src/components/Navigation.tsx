import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 flex items-center justify-center hover-rise"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center text-center px-6">
          {/* Décript logo at top */}
          <div className="absolute top-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium">
              décript
            </h1>
          </div>

          {/* Main navigation - centered */}
          <nav className="space-x-8 md:space-x-12 lg:space-x-16 mb-16">
            <a
              href="#services"
              className="text-xl md:text-2xl lg:text-3xl font-serif text-white hover-rise transition-colors hover:text-gray-300 underline"
              onClick={() => setIsMenuOpen(false)}
            >
              We do
            </a>
            <a
              href="#about"
              className="text-xl md:text-2xl lg:text-3xl font-serif text-white hover-rise transition-colors hover:text-gray-300 underline"
              onClick={() => setIsMenuOpen(false)}
            >
              We are
            </a>
            <a
              href="#contact"
              className="text-xl md:text-2xl lg:text-3xl font-serif text-white hover-rise transition-colors hover:text-gray-300 underline"
              onClick={() => setIsMenuOpen(false)}
            >
              You'll be
            </a>
            <a
              href="#contact"
              className="text-xl md:text-2xl lg:text-3xl font-serif text-white hover-rise transition-colors hover:text-gray-300 underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Say hi
            </a>
          </nav>

          {/* Social section at bottom */}
          <div className="absolute bottom-24 text-center">
            <h3 className="text-lg md:text-xl font-serif text-white mb-6">
              Be social
            </h3>
            <div className="space-x-8">
              <a
                href="#"
                className="text-base md:text-lg font-serif text-white hover-rise transition-colors hover:text-gray-300 underline"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-base md:text-lg font-serif text-white hover-rise transition-colors hover:text-gray-300 underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;