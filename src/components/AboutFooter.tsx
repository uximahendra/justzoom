import { Facebook, Linkedin } from 'lucide-react';

const AboutFooter = () => {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-8 bg-background border-t border-border/10">
      <div className="global-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo */}
          <div>
            <h3 className="text-xl font-poppins font-bold text-foreground">justzoom</h3>
          </div>

          {/* Center: Navigation */}
          <nav className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm font-poppins text-foreground hover:opacity-60 transition-opacity duration-200"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about-intro')}
              className="text-sm font-poppins text-foreground hover:opacity-60 transition-opacity duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-sm font-poppins text-foreground hover:opacity-60 transition-opacity duration-200"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-sm font-poppins text-foreground hover:opacity-60 transition-opacity duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 text-foreground hover:opacity-60 transition-opacity duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-full h-full" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 text-foreground hover:opacity-60 transition-opacity duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;