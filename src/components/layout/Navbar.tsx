
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Shield, Zap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-darker/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 rounded-md overflow-hidden animate-pulse-glow">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-20" />
            <div className="flex items-center justify-center h-full">
              <Shield className="h-6 w-6 text-cyber-blue" />
              <Zap className="h-6 w-6 text-cyber-red absolute" style={{ opacity: 0.7 }} />
            </div>
          </div>
          <span className="text-xl font-bold">
            <span className="neon-text-blue">Hack</span>
            <span className="neon-text-red">Xtreme</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-cyber-light hover:text-cyber-blue transition-colors">Features</a>
          <a href="#levels" className="text-cyber-light hover:text-cyber-blue transition-colors">Levels</a>
          <a href="#modes" className="text-cyber-light hover:text-cyber-blue transition-colors">Game Modes</a>
          <a href="#map" className="text-cyber-light hover:text-cyber-blue transition-colors">Threat Map</a>
          <a 
            href="https://copilot.microsoft.com/chats/4b2CqCrSSXHQvAPfAmqd7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyber-light hover:text-cyber-blue transition-colors"
          >
            AI Chat
          </a>
          <Button className="ml-4 btn-cyber">Join Now</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-cyber-light hover:text-cyber-blue"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-darker border-t border-cyber-blue/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-cyber-light hover:text-cyber-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#levels" 
              className="text-cyber-light hover:text-cyber-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Levels
            </a>
            <a 
              href="#modes" 
              className="text-cyber-light hover:text-cyber-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Game Modes
            </a>
            <a 
              href="#map" 
              className="text-cyber-light hover:text-cyber-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Threat Map
            </a>
            <a 
              href="https://copilot.microsoft.com/chats/4b2CqCrSSXHQvAPfAmqd7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyber-light hover:text-cyber-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Chat
            </a>
            <Button className="btn-cyber w-full">Join Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
