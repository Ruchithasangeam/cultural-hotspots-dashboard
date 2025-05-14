
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-sm">बक</span>
              </div>
              <span>Bharatiya Kala</span>
            </h3>
            <p className="text-sm mb-4">
              Discover India's rich cultural heritage, traditional art forms, and engage in responsible tourism that preserves our cultural treasures.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/artforms" className="text-white/80 hover:text-white transition-colors">Art Forms</Link></li>
              <li><Link to="/destinations" className="text-white/80 hover:text-white transition-colors">Cultural Destinations</Link></li>
              <li><Link to="/trends" className="text-white/80 hover:text-white transition-colors">Tourism Trends</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://www.data.gov.in" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Data.gov.in</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cultural Preservation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Government Initiatives</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <p className="text-sm mb-2">Subscribe to our newsletter</p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-black rounded-l-md w-full"
              />
              <button className="bg-accent text-white px-4 rounded-r-md hover:bg-accent/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Bharatiya Kala. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="text-white/80 hover:text-white transition-colors mx-2">Privacy Policy</Link>
            <Link to="/terms" className="text-white/80 hover:text-white transition-colors mx-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
