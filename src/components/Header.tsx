
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">बक</span>
            </div>
            <div className="font-bold text-xl md:text-2xl">
              <span className="text-primary">Bharatiya</span> <span className="text-accent">Kala</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/artforms" className="font-medium hover:text-primary transition-colors">Art Forms</Link>
            <Link to="/destinations" className="font-medium hover:text-primary transition-colors">Destinations</Link>
            <Link to="/trends" className="font-medium hover:text-primary transition-colors">Tourism Trends</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
            <Button variant="outline" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/artforms" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Art Forms</Link>
              <Link to="/destinations" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Destinations</Link>
              <Link to="/trends" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Tourism Trends</Link>
              <Link to="/about" className="font-medium hover:text-primary transition-colors" onClick={toggleMenu}>About</Link>
              <div className="relative mt-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
