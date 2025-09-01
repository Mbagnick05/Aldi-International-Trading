import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <img src="/Logoo.png" alt="ALDI Logo" className="w-8 h-8" />
            <span>ALDI International Trading</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-400' : ''}`}
            >
              Accueil
            </Link>
            <Link 
              to="/vehicles" 
              className={`hover:text-blue-400 transition-colors ${isActive('/vehicles') ? 'text-blue-400' : ''}`}
            >
              Voitures
            </Link>
            <Link 
              to="/supplies" 
              className={`hover:text-blue-400 transition-colors ${isActive('/supplies') ? 'text-blue-400' : ''}`}
            >
              Fournitures
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-400' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-400 transition-colors ${isActive('/about') ? 'text-blue-400' : ''}`}
            >
              À propos
            </Link>
            <Link 
              to="/admin" 
              className={`hover:text-blue-400 transition-colors ${isActive('/admin') ? 'text-blue-400' : ''}`}
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md hover:bg-slate-700 transition-colors ${isActive('/') ? 'bg-slate-700 text-blue-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/vehicles" 
                className={`block px-3 py-2 rounded-md hover:bg-slate-700 transition-colors ${isActive('/vehicles') ? 'bg-slate-700 text-blue-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Voitures
              </Link>
              <Link 
                to="/supplies" 
                className={`block px-3 py-2 rounded-md hover:bg-slate-700 transition-colors ${isActive('/supplies') ? 'bg-slate-700 text-blue-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Fournitures
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md hover:bg-slate-700 transition-colors ${isActive('/contact') ? 'bg-slate-700 text-blue-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md hover:bg-slate-700 transition-colors ${isActive('/about') ? 'bg-slate-700 text-blue-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/admin" 
                className={`block px-3 py-2 rounded-md hover:bg-slate-700 transition-colors ${isActive('/admin') ? 'bg-slate-700 text-blue-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;