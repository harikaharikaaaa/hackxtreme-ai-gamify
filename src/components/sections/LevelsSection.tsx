import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Lock, CheckCircle, Terminal } from 'lucide-react';
import { Zap, Bug, Network } from '@/components/ui/custom-icons';
const levels = [{
  name: "Novice",
  description: "Introduction to cybersecurity concepts and basic tools",
  isCompleted: true,
  isActive: false,
  progress: 100
}, {
  name: "Apprentice",
  description: "Network security fundamentals and scanning techniques",
  isCompleted: true,
  isActive: false,
  progress: 100
}, {
  name: "Practitioner",
  description: "Web vulnerabilities and common exploit methods",
  isCompleted: false,
  isActive: true,
  progress: 65
}, {
  name: "Specialist",
  description: "Advanced exploitation and privilege escalation",
  isCompleted: false,
  isActive: false,
  progress: 0
}, {
  name: "Expert",
  description: "Complex attack vectors and defense strategies",
  isCompleted: false,
  isActive: false,
  progress: 0
}, {
  name: "Master",
  description: "Red team operations and advanced persistence",
  isCompleted: false,
  isActive: false,
  progress: 0
}, {
  name: "Grandmaster",
  description: "Zero-day discovery and exploit development",
  isCompleted: false,
  isActive: false,
  progress: 0
}, {
  name: "Legend",
  description: "AI-powered attacks and next-gen defense",
  isCompleted: false,
  isActive: false,
  progress: 0
}, {
  name: "Cyber Guardian",
  description: "Critical infrastructure protection and advanced threat hunting",
  isCompleted: false,
  isActive: false,
  progress: 0
}, {
  name: "Digital Overlord",
  description: "Ultimate cybersecurity mastery and leadership",
  isCompleted: false,
  isActive: false,
  progress: 0
}];
const LevelsSection = () => {
  return <section id="levels" className="py-24 relative bg-cyber-darker">
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold mb-6">
            <span className="neon-text-blue">Level-Based</span> Learning
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="text-cyber-grey text-lg">
            Progress through 10 expertly designed cybersecurity levels. 
            Master skills, earn badges, and unlock increasingly complex challenges.
          </motion.p>
        </div>
        
        <div className="relative mt-12 mb-20">
          <div className="absolute h-2 bg-cyber-dark left-4 right-4 top-12 md:top-16 rounded-full overflow-hidden z-0">
            
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {levels.map((level, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="relative">
                <div className="flex flex-col items-center justify-start mb-8">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full z-10 flex items-center justify-center
                      ${level.isCompleted ? 'bg-cyber-blue' : level.isActive ? 'bg-cyber-purple animate-pulse-glow' : 'bg-cyber-dark border border-cyber-grey'}`}>
                    {level.isCompleted ? <CheckCircle className="w-5 h-5 text-cyber-darker" /> : level.isActive ? <Sparkles className="w-5 h-5 text-cyber-light" /> : <Lock className="w-4 h-4 text-cyber-grey" />}
                  </div>
                  <div className={`text-center mt-4 ${level.isActive ? 'text-cyber-light' : 'text-cyber-grey'}`}>
                    <p className={`font-bold text-sm md:text-base ${level.isCompleted ? 'text-cyber-blue' : level.isActive ? 'neon-text-purple' : ''}`}>
                      Level {index + 1}
                    </p>
                    <h3 className="text-sm md:text-base font-medium">{level.name}</h3>
                  </div>
                </div>
                
                <div className={`cyber-card h-32 ${level.isActive ? 'neon-border-purple' : ''} transition-all duration-300 hover:-translate-y-2`}>
                  <p className="text-xs md:text-sm text-cyber-grey">{level.description}</p>
                  {level.isActive && level.progress > 0 && <div className="mt-4">
                      <div className="w-full h-1.5 bg-cyber-dark/50 rounded-full overflow-hidden">
                        
                      </div>
                      
                    </div>}
                </div>
              </motion.div>)}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Sparkles className="text-cyber-blue mr-2" />
              <span>Experience Points</span>
            </h3>
            <div className="cyber-terminal p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyber-light">Current XP</span>
                  <span className="neon-text-blue">0 / 3,000</span>
                </div>
                <div className="h-2 bg-cyber-dark/50 rounded-full overflow-hidden">
                  
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cyber-grey">Complete Daily Challenge</span>
                  <span className="text-cyber-blue">+50 XP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-grey">Solve Practice Problem</span>
                  <span className="text-cyber-blue">+25 XP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-grey">Win CTF Challenge</span>
                  <span className="text-cyber-blue">+200 XP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-grey">Help Community Member</span>
                  <span className="text-cyber-blue">+30 XP</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="text-cyber-red mr-2" />
              <span>Achievement Badges</span>
            </h3>
            <div className="cyber-terminal p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-b from-cyber-blue to-cyber-purple flex items-center justify-center">
                    <Shield className="h-8 w-8 text-cyber-light" />
                  </div>
                  <span className="text-xs text-center mt-2 text-cyber-grey">Firewall Master</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-b from-cyber-red to-cyber-purple flex items-center justify-center">
                    <Zap className="h-8 w-8 text-cyber-light" />
                  </div>
                  <span className="text-xs text-center mt-2 text-cyber-grey">Ethical Hacker</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-cyber-dark/50 border border-cyber-grey/50 flex items-center justify-center grayscale opacity-50">
                    <Lock className="h-8 w-8 text-cyber-grey" />
                  </div>
                  <span className="text-xs text-center mt-2 text-cyber-grey">Crypto Expert</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-cyber-dark/50 border border-cyber-grey/50 flex items-center justify-center grayscale opacity-50">
                    <Bug className="h-8 w-8 text-cyber-grey" />
                  </div>
                  <span className="text-xs text-center mt-2 text-cyber-grey">Bug Hunter</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-cyber-dark/50 border border-cyber-grey/50 flex items-center justify-center grayscale opacity-50">
                    <Network className="h-8 w-8 text-cyber-grey" />
                  </div>
                  <span className="text-xs text-center mt-2 text-cyber-grey">Network Ninja</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-cyber-dark/50 border border-cyber-grey/50 flex items-center justify-center grayscale opacity-50">
                    <Terminal className="h-8 w-8 text-cyber-grey" />
                  </div>
                  <span className="text-xs text-center mt-2 text-cyber-grey">Code Wizard</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default LevelsSection;