
import React from 'react';
import { Shield, Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darker border-t border-cyber-blue/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10 rounded-md overflow-hidden">
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
            </div>
            <p className="text-cyber-grey text-sm">
              An AI-powered, gamified cybersecurity learning platform. Learn, hack, and defend in an immersive environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-cyber-light font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Learning Paths</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Game Modes</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">AI Mentor</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Challenges</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-light font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Community</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Cybersecurity News</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-light font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Contact</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cyber-grey hover:text-cyber-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyber-grey text-sm">&copy; {new Date().getFullYear()} HackXtreme. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-cyber-grey text-sm">Designed with <span className="text-cyber-red">♥</span> for the cybersecurity community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
