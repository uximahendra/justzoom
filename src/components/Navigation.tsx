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
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-8">
            <nav className="space-y-6">
              <a
                href="#home"
                className="block text-4xl font-serif hover-rise transition-colors hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-4xl font-serif hover-rise transition-colors hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-4xl font-serif hover-rise transition-colors hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-4xl font-serif hover-rise transition-colors hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;