
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, BarChart3 } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isRed?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, isRed = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`${isRed ? 'cyber-card-red' : 'cyber-card'} h-full transition-transform duration-300 hover:-translate-y-2`}
    >
      <div className="flex flex-col h-full">
        <div className={`w-14 h-14 rounded-md flex items-center justify-center mb-4 ${isRed ? 'bg-cyber-red/10' : 'bg-cyber-blue/10'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-3 ${isRed ? 'neon-text-red' : 'neon-text-blue'}`}>{title}</h3>
        <p className="text-cyber-grey mt-auto">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="neon-text-purple">AI-Powered</span> Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-cyber-grey text-lg"
          >
            HackXtreme leverages cutting-edge AI to deliver a personalized, immersive learning experience that adapts to your skill level.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-cyber-blue" />}
            title="AI Mentor"
            description="Get real-time guidance, hints, and explanations from your personalized AI cybersecurity tutor."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-cyber-red" />}
            title="Adaptive Challenges"
            description="Face dynamically generated challenges that adapt to your skill level and learning pace."
            delay={0.2}
            isRed
          />
          
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-cyber-blue" />}
            title="AI-Generated Attacks"
            description="Practice defending against realistic, AI-generated cyber attacks that mimic real-world threats."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8 text-cyber-red" />}
            title="Instant Feedback"
            description="Receive detailed analysis and visual explanations of your security solutions from the AI."
            delay={0.4}
            isRed
          />
        </div>
        
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                The <span className="neon-text-blue">Problem</span>
              </h3>
              <div className="cyber-terminal p-6 mb-6">
                <p className="text-cyber-grey mb-4">Traditional cybersecurity education faces significant challenges:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyber-red mr-2">✖</span>
                    <span>Static, outdated learning materials that don't reflect real-world threats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-red mr-2">✖</span>
                    <span>One-size-fits-all approaches that don't adapt to individual learning needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-red mr-2">✖</span>
                    <span>Lack of practical, hands-on experience in a safe environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-red mr-2">✖</span>
                    <span>Overwhelming complexity that discourages beginners</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our <span className="neon-text-blue">Solution</span>
              </h3>
              <div className="cyber-terminal p-6">
                <p className="text-cyber-grey mb-4">HackXtreme revolutionizes cybersecurity education:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyber-blue mr-2">✓</span>
                    <span>AI-generated challenges that stay current with emerging threats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-blue mr-2">✓</span>
                    <span>Personalized learning paths that adapt to your skill level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-blue mr-2">✓</span>
                    <span>Gamified experience that makes learning engaging and motivating</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-blue mr-2">✓</span>
                    <span>Real-time AI guidance to help you overcome obstacles</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="cyber-terminal rounded-lg h-[400px] overflow-hidden">
                  <div className="h-full p-4 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="h-3 w-3 rounded-full bg-cyber-red mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-cyber-blue mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-cyber-purple mr-2"></div>
                      <div className="flex-1 ml-2 bg-cyber-dark/50 py-1 px-2 rounded text-xs text-cyber-blue font-mono">
                        ai_mentor@hackxtreme:~
                      </div>
                    </div>
                    
                    <div className="flex-1 font-mono text-sm overflow-y-auto pr-2">
                      <div className="mb-3">
                        <span className="text-cyber-blue">AI Mentor &gt;</span>
                        <span className="text-cyber-light"> Analyzing your solution to the SQL injection challenge...</span>
                      </div>
                      <div className="mb-3">
                        <span className="text-cyber-blue">AI Mentor &gt;</span>
                        <span className="text-cyber-light"> Your code successfully prevented the basic SQL injection attack. Good job!</span>
                      </div>
                      <div className="mb-3">
                        <span className="text-cyber-red">Security Issue &gt;</span>
                        <span className="text-cyber-light"> However, I detected a potential vulnerability in your input validation.</span>
                      </div>
                      <div className="mb-3">
                        <span className="text-cyber-purple">Code Analysis &gt;</span>
                        <span className="text-cyber-light"> Line 24: The regular expression pattern is missing special characters validation.</span>
                      </div>
                      <div className="mb-3">
                        <span className="text-cyber-blue">AI Mentor &gt;</span>
                        <span className="text-cyber-light"> Try implementing a more comprehensive regex pattern like:</span>
                      </div>
                      <div className="mb-3 bg-cyber-dark/40 p-2 rounded">
                        <code className="text-cyber-purple">
                          /^[a-zA-Z0-9_\-\.]+$/
                        </code>
                      </div>
                      <div className="mb-3">
                        <span className="text-cyber-blue">AI Mentor &gt;</span>
                        <span className="text-cyber-light"> This would ensure that only alphanumeric characters and certain special characters are allowed.</span>
                      </div>
                      <div className="mb-3">
                        <span className="text-cyber-blue">AI Mentor &gt;</span>
                        <span className="text-cyber-light"> Would you like me to explain more about input validation techniques?</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Ask your AI mentor..."
                          className="w-full bg-cyber-dark/50 border border-cyber-blue/30 rounded-md py-2 px-4 text-cyber-light focus:outline-none focus:border-cyber-blue"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyber-blue hover:text-cyber-purple transition-colors">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-cyber-blue"></div>
                <div className="absolute -top-4 -right-4 h-8 w-8 border-t-2 border-r-2 border-cyber-blue"></div>
                <div className="absolute -bottom-4 -left-4 h-8 w-8 border-b-2 border-l-2 border-cyber-blue"></div>
                <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-cyber-blue"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
