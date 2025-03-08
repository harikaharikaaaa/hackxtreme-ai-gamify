import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { Zap } from '@/components/ui/custom-icons';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-cyber-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-cyber-darker/95"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">
                <span className="neon-text-blue">Learn</span>, 
                <span className="neon-text-red"> Hack</span>, 
                <span className="neon-text-blue"> Defend</span>
              </span>
              <span className="block mt-2 text-cyber-light">
                AI-Powered Cyber Mastery
              </span>
            </h1>
            
            <p className="text-cyber-grey text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Master cybersecurity through immersive, AI-driven challenges. 
              Level up your skills and become the ultimate cyber defender in our 
              gamified learning environment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-cyber w-full sm:w-auto text-lg px-8 py-3">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="btn-cyber-red w-full sm:w-auto text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-cyber-blue/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-cyber-blue" />
                </div>
                <span className="ml-2 text-cyber-light">10K+ Active Defenders</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-cyber-red/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-cyber-red" />
                </div>
                <span className="ml-2 text-cyber-light">500+ AI Challenges</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Animated Defender vs Attacker Visual */}
              <div className="cyber-terminal rounded-lg p-1 h-[400px] w-full">
                <div className="h-full rounded-lg overflow-hidden relative p-4">
                  {/* Terminal header */}
                  <div className="flex items-center mb-4">
                    <div className="h-3 w-3 rounded-full bg-cyber-red mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-cyber-blue mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-cyber-purple mr-2"></div>
                    <div className="flex-1 ml-2 bg-cyber-dark/50 py-1 px-2 rounded text-xs text-cyber-blue font-mono">
                      hackxtreme_terminal@cyberspace:~
                    </div>
                  </div>
                  
                  {/* Terminal content */}
                  <div className="font-mono text-xs text-cyber-light">
                    <div className="mb-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="terminal-text ml-2">initiating cyber defense simulation...</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="ml-2">loading AI challenge module...</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-cyber-blue">[+]</span>
                      <span className="ml-2 text-cyber-blue">defender shields activated</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-cyber-red">[-]</span>
                      <span className="ml-2 text-cyber-red">incoming attack detected</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-cyber-red">[!]</span>
                      <span className="ml-2">port scan initiated from 192.168.1.100</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-cyber-blue">[+]</span>
                      <span className="ml-2">applying firewall rules...</span>
                    </div>
                    <div className="animate-pulse">
                      <span className="text-cyber-blue">$</span>
                      <span className="ml-2">_</span>
                    </div>
                    
                    {/* Animated elements */}
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                      <div className="h-20 w-20 relative">
                        <motion.div 
                          className="absolute h-16 w-16 rounded-full bg-cyber-blue/20 border border-cyber-blue flex items-center justify-center"
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 2
                          }}
                        >
                          <Shield className="h-8 w-8 text-cyber-blue" />
                        </motion.div>
                        <motion.div 
                          className="absolute top-4 left-4 h-16 w-16 rounded-full bg-cyber-red/20 border border-cyber-red flex items-center justify-center"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            x: [0, 5, 0], 
                            y: [0, -5, 0]
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 2,
                            delay: 0.5
                          }}
                        >
                          <Zap className="h-8 w-8 text-cyber-red" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-cyber-blue"></div>
              <div className="absolute -top-4 -right-4 h-8 w-8 border-t-2 border-r-2 border-cyber-red"></div>
              <div className="absolute -bottom-4 -left-4 h-8 w-8 border-b-2 border-l-2 border-cyber-red"></div>
              <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-cyber-blue"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-cyber-grey text-sm mb-2">Scroll to explore</span>
            <ArrowRight size={20} className="text-cyber-blue transform rotate-90" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
