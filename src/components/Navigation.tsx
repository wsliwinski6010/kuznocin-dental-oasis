
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-yellow-100">
      <div className="container-max">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-6">
            <img 
              src="/lovable-uploads/90825bce-0c80-4b06-a440-2df0d0de5c8d.png" 
              alt="Joanna Śliwińska Stomatologia Logo" 
              className="h-14 w-auto logo-elegant"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => handleSectionClick(section)} 
                className={`text-gray-700 hover:text-yellow-700 transition-all duration-300 font-medium text-lg ${
                  activeSection === section ? 'nav-active' : ''
                }`}
              >
                {section === 'home' && 'Strona główna'}
                {section === 'about' && 'O praktyce'}
                {section === 'services' && 'Usługi'}
                {section === 'gallery' && 'Gabinet'}
                {section === 'contact' && 'Kontakt'}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-yellow-100">
            <div className="py-6 space-y-4">
              {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => handleSectionClick(section)} 
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 text-lg font-medium"
                >
                  {section === 'home' && 'Strona główna'}
                  {section === 'about' && 'O praktyce'}
                  {section === 'services' && 'Usługi'}
                  {section === 'gallery' && 'Gabinet'}
                  {section === 'contact' && 'Kontakt'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
