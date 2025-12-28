import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from './FloatingHearts';
import { Heart, Lock, Sparkles } from 'lucide-react';

interface SecretCodeEntryProps {
  onSuccess: (name: string) => void;
}

export const SecretCodeEntry = ({ onSuccess }: SecretCodeEntryProps) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter your name, sweetheart 💕');
      triggerShake();
      return;
    }

    if (code !== '1229') {
      setError('Wrong code! Try again, my love 💔');
      triggerShake();
      return;
    }

    onSuccess(name.trim());
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
      <FloatingHearts />
      
      {/* Decorative sparkles */}
      <div className="absolute top-20 left-20 text-gold animate-sparkle" style={{ animationDelay: '0s' }}>
        <Sparkles size={24} />
      </div>
      <div className="absolute top-40 right-32 text-primary animate-sparkle" style={{ animationDelay: '1s' }}>
        <Sparkles size={20} />
      </div>
      <div className="absolute bottom-32 left-40 text-gold animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Sparkles size={28} />
      </div>
      
      <div className={`relative z-10 w-full max-w-md ${shake ? 'animate-shake' : ''}`}>
        <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-primary/20">
          {/* Heart icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-soft">
              <Heart className="w-10 h-10 text-primary-foreground fill-current" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-romantic text-center text-gradient mb-2">
            A Special Surprise
          </h1>
          <p className="text-center text-muted-foreground mb-8 font-body">
            Awaits for someone special ✨
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                Your Name
              </label>
              <Input
                type="text"
                placeholder="Enter your beautiful name..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                className="bg-background/50 border-primary/30 focus:border-primary rounded-xl h-12 text-center font-body text-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Secret Code
              </label>
              <Input
                type="password"
                placeholder="Enter the secret code..."
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                }}
                className="bg-background/50 border-primary/30 focus:border-primary rounded-xl h-12 text-center font-body text-lg tracking-widest"
              />
            </div>

            {error && (
              <p className="text-center text-primary text-sm animate-fade-in-up">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-primary-foreground font-body text-lg shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Unlock My Surprise 💝
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Made with love 💕
          </p>
        </div>
      </div>
    </div>
  );
};
