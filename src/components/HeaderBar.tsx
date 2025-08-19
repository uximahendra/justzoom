import { Menu } from 'lucide-react';

interface HeaderBarProps {
  onMenuClick: () => void;
}

const HeaderBar = ({ onMenuClick }: HeaderBarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] h-16 md:h-16">
      <div className="global-container h-full flex items-center justify-end">
        <button
          onClick={onMenuClick}
          className="w-10 h-10 flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;