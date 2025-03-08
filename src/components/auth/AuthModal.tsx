
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, login, signup } = useAuth();
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLoginView) {
        await login(email, password);
        toast.success('Successfully logged in');
      } else {
        await signup(email, username, password);
        toast.success('Account created successfully');
      }
      
      // Reset form
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (error) {
      toast.error('Authentication failed. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-cyber-darker border-2 border-cyber-blue/30 rounded-lg p-6 w-full max-w-md relative overflow-hidden"
          >
            {/* Close button */}
            <button 
              onClick={closeAuthModal}
              className="absolute top-4 right-4 text-cyber-light hover:text-cyber-red transition-colors"
            >
              <X size={20} />
            </button>
            
            {/* Background decorations */}
            <div className="absolute top-0 left-0 h-20 w-20 border-t-2 border-l-2 border-cyber-blue/20" />
            <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-cyber-red/20" />
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {isLoginView ? (
                  <><span className="neon-text-blue">Log</span> <span className="neon-text-red">In</span></>
                ) : (
                  <><span className="neon-text-blue">Sign</span> <span className="neon-text-red">Up</span></>
                )}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-cyber-light text-sm mb-1">Email</label>
                  <Input 
                    id="email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-cyber-dark/50 border-cyber-blue/30 text-cyber-light"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                {!isLoginView && (
                  <div>
                    <label htmlFor="username" className="block text-cyber-light text-sm mb-1">Username</label>
                    <Input 
                      id="username"
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-cyber-dark/50 border-cyber-blue/30 text-cyber-light"
                      placeholder="hackmaster"
                      required
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="password" className="block text-cyber-light text-sm mb-1">Password</label>
                  <Input 
                    id="password"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-cyber-dark/50 border-cyber-blue/30 text-cyber-light"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full btn-cyber">
                  {isLoginView ? 'Log In' : 'Sign Up'}
                </Button>
              </form>
              
              <div className="mt-4 text-center">
                <button 
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="text-sm text-cyber-blue hover:text-cyber-purple transition-colors"
                >
                  {isLoginView ? 'Need an account? Sign up' : 'Already have an account? Log in'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
