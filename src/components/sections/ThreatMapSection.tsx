
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, AlertTriangle, Shield, Zap } from 'lucide-react';

const generateRandomAttacks = () => {
  const countries = [
    "US", "RU", "CN", "UK", "DE", "FR", "BR", "IN", "JP", "KR", 
    "AU", "CA", "IR", "IL", "SA", "AE", "ZA", "NG", "MX", "AR"
  ];
  
  const attackTypes = [
    "DDoS", "Phishing", "Ransomware", "SQL Injection", "XSS", 
    "Brute Force", "Zero-Day", "Man in the Middle", "Malware", "Data Breach"
  ];
  
  const attacks = [];
  const now = new Date();
  
  for (let i = 0; i < 8; i++) {
    const sourceIndex = Math.floor(Math.random() * countries.length);
    let targetIndex = Math.floor(Math.random() * countries.length);
    while (targetIndex === sourceIndex) {
      targetIndex = Math.floor(Math.random() * countries.length);
    }
    
    const attackTypeIndex = Math.floor(Math.random() * attackTypes.length);
    const severity = Math.floor(Math.random() * 5) + 1;
    
    const minutesAgo = Math.floor(Math.random() * 60);
    const attackTime = new Date(now.getTime() - minutesAgo * 60000);
    
    attacks.push({
      id: i,
      source: countries[sourceIndex],
      target: countries[targetIndex],
      type: attackTypes[attackTypeIndex],
      severity,
      time: attackTime,
      status: Math.random() > 0.3 ? "Blocked" : "Active"
    });
  }
  
  return attacks.sort((a, b) => b.time.getTime() - a.time.getTime());
};

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
};

interface Attack {
  id: number;
  source: string;
  target: string;
  type: string;
  severity: number;
  time: Date;
  status: "Blocked" | "Active";
}

const ThreatMapSection = () => {
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [stats, setStats] = useState({
    totalAttacks: 0,
    blockedAttacks: 0,
    criticalThreats: 0,
    activeDefenses: 0
  });
  
  useEffect(() => {
    // Initial attacks
    const initialAttacks = generateRandomAttacks();
    setAttacks(initialAttacks);
    
    // Calculate initial stats
    const blocked = initialAttacks.filter(a => a.status === "Blocked").length;
    const critical = initialAttacks.filter(a => a.severity >= 4).length;
    
    setStats({
      totalAttacks: initialAttacks.length,
      blockedAttacks: blocked,
      criticalThreats: critical,
      activeDefenses: Math.floor(Math.random() * 50) + 50
    });
    
    // Update attacks periodically
    const interval = setInterval(() => {
      const newAttacks = generateRandomAttacks();
      setAttacks(newAttacks);
      
      const blocked = newAttacks.filter(a => a.status === "Blocked").length;
      const critical = newAttacks.filter(a => a.severity >= 4).length;
      
      setStats(prev => ({
        totalAttacks: prev.totalAttacks + Math.floor(Math.random() * 3),
        blockedAttacks: prev.blockedAttacks + blocked - prev.blockedAttacks,
        criticalThreats: critical,
        activeDefenses: Math.floor(Math.random() * 50) + 50
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="map" className="py-24 relative bg-cyber-darker">
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="neon-text-purple">Live</span> Threat Map
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-cyber-grey text-lg"
          >
            Visualize global cyber threats in real-time. Our AI-powered simulation displays attacks and defense activities happening across the world.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Panels */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="cyber-card flex flex-col items-center justify-center py-4"
            >
              <div className="h-12 w-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-cyber-blue" />
              </div>
              <p className="text-3xl font-bold neon-text-blue">{stats.totalAttacks}</p>
              <p className="text-cyber-grey text-sm">Total Attacks</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="cyber-card flex flex-col items-center justify-center py-4"
            >
              <div className="h-12 w-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-cyber-blue" />
              </div>
              <p className="text-3xl font-bold neon-text-blue">{stats.blockedAttacks}</p>
              <p className="text-cyber-grey text-sm">Attacks Blocked</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="cyber-card flex flex-col items-center justify-center py-4"
            >
              <div className="h-12 w-12 rounded-full bg-cyber-red/10 flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-cyber-red" />
              </div>
              <p className="text-3xl font-bold neon-text-red">{stats.criticalThreats}</p>
              <p className="text-cyber-grey text-sm">Critical Threats</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="cyber-card flex flex-col items-center justify-center py-4"
            >
              <div className="h-12 w-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-cyber-purple" />
              </div>
              <p className="text-3xl font-bold neon-text-purple">{stats.activeDefenses}</p>
              <p className="text-cyber-grey text-sm">Active Defenses</p>
            </motion.div>
          </div>
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="cyber-terminal p-4 h-[400px] relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10 flex items-center">
                <Globe className="h-5 w-5 text-cyber-blue mr-2" />
                <span className="text-cyber-blue text-sm font-mono">Global Threat Monitor</span>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* World map background (simplified representation) */}
                  <div className="absolute inset-0 bg-cyber-dark/30 rounded-lg flex items-center justify-center overflow-hidden">
                    <svg 
                      width="100%" 
                      height="100%" 
                      viewBox="0 0 1000 500" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-30"
                    >
                      <path d="M200,250 Q400,150 600,250 T1000,250" stroke="#0EA5E9" strokeWidth="0.5" fill="none" />
                      <path d="M0,250 Q200,350 400,250 T800,250" stroke="#0EA5E9" strokeWidth="0.5" fill="none" />
                      <path d="M100,100 Q300,200 500,100 T900,100" stroke="#0EA5E9" strokeWidth="0.5" fill="none" />
                      <path d="M100,400 Q300,300 500,400 T900,400" stroke="#0EA5E9" strokeWidth="0.5" fill="none" />
                      
                      {/* Simplified continents */}
                      <path d="M200,150 Q250,120 300,150 T400,150 Q450,180 400,200 Q350,250 300,200 Q250,180 200,150 Z" fill="#0E1622" stroke="#0EA5E9" strokeWidth="0.5" />
                      <path d="M500,200 Q550,170 600,200 T700,200 Q750,230 700,250 Q650,300 600,250 Q550,230 500,200 Z" fill="#0E1622" stroke="#0EA5E9" strokeWidth="0.5" />
                      <path d="M300,300 Q350,270 400,300 T500,300 Q550,330 500,350 Q450,400 400,350 Q350,330 300,300 Z" fill="#0E1622" stroke="#0EA5E9" strokeWidth="0.5" />
                      <path d="M600,300 Q650,270 700,300 T800,300 Q850,330 800,350 Q750,400 700,350 Q650,330 600,300 Z" fill="#0E1622" stroke="#0EA5E9" strokeWidth="0.5" />
                    </svg>
                    
                    {/* Attack lines animation */}
                    {attacks.map((attack, i) => {
                      // Generate random positions for animation
                      const startX = 100 + Math.random() * 800;
                      const startY = 100 + Math.random() * 300;
                      const endX = 100 + Math.random() * 800;
                      const endY = 100 + Math.random() * 300;
                      
                      return (
                        <motion.div
                          key={`${attack.id}-${i}`}
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1, 0] }}
                          transition={{ 
                            duration: 2, 
                            delay: i * 0.5,
                            repeat: Infinity,
                            repeatDelay: 8 + i
                          }}
                          className="absolute"
                          style={{
                            left: startX,
                            top: startY,
                            width: 4,
                            height: 4,
                          }}
                        >
                          <div className={`h-1 rounded-full bg-cyber-${attack.status === "Active" ? "red" : "blue"}`} style={{
                            width: Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)),
                            transform: `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`,
                            transformOrigin: '0 0',
                            opacity: 0.7
                          }}></div>
                        </motion.div>
                      );
                    })}
                    
                    {/* Hotspots */}
                    {Array.from({ length: 20 }).map((_, i) => {
                      const x = 100 + Math.random() * 800;
                      const y = 100 + Math.random() * 300;
                      return (
                        <motion.div
                          key={i}
                          className="absolute h-2 w-2 rounded-full bg-cyber-blue"
                          style={{ left: x, top: y }}
                          animate={{ 
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 text-xs text-cyber-grey font-mono">
                Simulated data - For demonstration purposes
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Recent attacks list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-xl font-bold mb-4">Recent Attack Activity</h3>
          <div className="cyber-terminal overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyber-blue/20">
                  <th className="text-left py-3 px-4 text-cyber-blue font-mono">Type</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-mono">Source</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-mono">Target</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-mono">Severity</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-mono">Time</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-mono">Status</th>
                </tr>
              </thead>
              <tbody>
                {attacks.map((attack) => (
                  <tr key={attack.id} className="border-b border-cyber-blue/10 hover:bg-cyber-blue/5">
                    <td className="py-3 px-4 text-cyber-light">{attack.type}</td>
                    <td className="py-3 px-4 text-cyber-light">{attack.source}</td>
                    <td className="py-3 px-4 text-cyber-light">{attack.target}</td>
                    <td className="py-3 px-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1.5 w-6 ${i < attack.severity ? 'bg-cyber-red' : 'bg-cyber-grey/30'} 
                                     ${i === 0 ? 'rounded-l-full' : ''} ${i === 4 ? 'rounded-r-full' : ''}`}
                          ></div>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-cyber-grey">{formatTimeAgo(attack.time)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs 
                                    ${attack.status === 'Blocked' ? 'bg-cyber-blue/20 text-cyber-blue' : 'bg-cyber-red/20 text-cyber-red'}`}>
                        {attack.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreatMapSection;
