import { BirthdayCake } from './BirthdayCake';
import { FloatingHearts } from './FloatingHearts';
import { Sparkles } from 'lucide-react';

interface CakeSectionProps {
  name: string;
  onCandlesBlown: () => void;
}

export const CakeSection = ({ name, onCandlesBlown }: CakeSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <FloatingHearts />

      {/* Decorative sparkles */}
      <div className="absolute top-20 left-10 text-gold animate-sparkle">
        <Sparkles size={32} />
      </div>
      <div className="absolute top-32 right-20 text-primary animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-40 left-20 text-secondary animate-sparkle" style={{ animationDelay: '1s' }}>
        <Sparkles size={28} />
      </div>
      <div className="absolute bottom-20 right-10 text-gold animate-sparkle" style={{ animationDelay: '1.5s' }}>
        <Sparkles size={20} />
      </div>

      <div className="relative z-10 text-center">
        {/* Birthday greeting */}
        <div className="mb-12 animate-fade-in-up">
          <p className="text-xl md:text-2xl text-muted-foreground font-body mb-2">
            🎉 Happy Birthday 🎉
          </p>
          <h1 className="text-5xl md:text-7xl font-romantic text-gradient animate-glow-pulse">
            {name}!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Time to make a wish and blow out the candles! 🌟
          </p>
        </div>

        {/* Birthday Cake */}
        <BirthdayCake onAllCandlesBlown={onCandlesBlown} />
      </div>
    </div>
  );
};
