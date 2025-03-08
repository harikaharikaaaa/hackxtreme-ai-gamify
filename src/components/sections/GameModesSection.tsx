
import React from 'react';
import { motion } from 'framer-motion';
import { Robot, Users, Flag, RadioTower, ChevronRight } from 'lucide-react';

interface GameModeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const GameModeCard: React.FC<GameModeCardProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="cyber-card group cursor-pointer transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 bg-cyber-blue/10 rounded-md flex items-center justify-center mr-4 group-hover:bg-cyber-blue/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold neon-text-blue">{title}</h3>
      </div>
      
      <p className="text-cyber-grey mb-6">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <ChevronRight className="h-5 w-5 text-cyber-blue mr-2 shrink-0 mt-0.5" />
            <span className="text-cyber-light text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-cyber-blue/20 flex justify-end">
        <button className="text-cyber-blue hover:text-cyber-purple transition-colors duration-300 flex items-center text-sm font-semibold">
          Learn more
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

const GameModesSection = () => {
  const modes = [
    {
      icon: <Robot className="h-6 w-6 text-cyber-blue" />,
      title: "AI vs. Player",
      description: "Test your skills against adaptive AI hackers and defenders that learn from your tactics.",
      features: [
        "AI opponents that adapt to your skill level",
        "Dynamic attack patterns that evolve over time",
        "Real-time feedback and suggestions",
        "Performance analysis after each match"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-cyber-blue" />,
      title: "Co-op Mode",
      description: "Team up with friends and get AI-powered hints to tackle complex cybersecurity challenges.",
      features: [
        "Collaborative defense scenarios",
        "Role-based team challenges",
        "AI mentor to provide guidance",
        "Shared achievements and rewards"
      ]
    },
    {
      icon: <Flag className="h-6 w-6 text-cyber-blue" />,
      title: "CTF Challenges",
      description: "Compete in AI-generated Capture The Flag puzzles with varying difficulty levels.",
      features: [
        "Weekly refreshed CTF challenges",
        "Leaderboards and rankings",
        "Multiple security categories",
        "Detailed solution walkthroughs"
      ]
    },
    {
      icon: <RadioTower className="h-6 w-6 text-cyber-blue" />,
      title: "Cyber Range",
      description: "Practice in realistic network environments with simulated infrastructure and threats.",
      features: [
        "Full network topology simulations",
        "Real-world enterprise scenarios",
        "Incident response training",
        "Infrastructure defense strategies"
      ]
    }
  ];

  return (
    <section id="modes" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="neon-text-red">Game</span> Modes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-cyber-grey text-lg"
          >
            Choose from multiple engaging game modes that make learning cybersecurity skills fun and addictive.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modes.map((mode, index) => (
            <GameModeCard 
              key={index}
              icon={mode.icon}
              title={mode.title}
              description={mode.description}
              features={mode.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModesSection;
