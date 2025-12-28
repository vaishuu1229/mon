import { useState } from 'react';
import { Flame } from 'lucide-react';

interface CandleProps {
  index: number;
  isLit: boolean;
  onBlow: () => void;
}

const Candle = ({ index, isLit, onBlow }: CandleProps) => {
  return (
    <div 
      className="relative flex flex-col items-center cursor-pointer group"
      onClick={onBlow}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Flame */}
      {isLit && (
        <div className="absolute -top-8 flex flex-col items-center">
          {/* Glow effect */}
          <div className="absolute w-8 h-8 bg-secondary/40 rounded-full blur-xl animate-pulse-soft" />
          {/* Flame */}
          <div className="relative animate-flicker">
            <div className="w-4 h-6 bg-gradient-to-t from-secondary via-orange-400 to-yellow-200 rounded-full transform -translate-y-1" 
              style={{ 
                clipPath: 'ellipse(50% 70% at 50% 70%)',
                filter: 'drop-shadow(0 0 8px hsl(45, 90%, 55%))'
              }} 
            />
            <div className="absolute inset-0 w-2 h-3 bg-gradient-to-t from-orange-500 to-yellow-100 rounded-full mx-auto mt-2"
              style={{ clipPath: 'ellipse(50% 70% at 50% 70%)' }}
            />
          </div>
        </div>
      )}
      
      {/* Smoke when blown */}
      {!isLit && (
        <div className="absolute -top-10 opacity-50">
          <div className="w-1 h-8 bg-gradient-to-t from-muted-foreground/30 to-transparent rounded-full animate-fade-in-up" />
        </div>
      )}
      
      {/* Candle body */}
      <div className="w-3 h-12 bg-gradient-to-b from-rose-light to-primary rounded-t-sm shadow-md relative overflow-hidden">
        {/* Wax drip effect */}
        <div className="absolute top-0 left-0 w-full h-2 bg-rose-dark/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-full bg-accent/30" />
      </div>
      
      {/* Candle holder */}
      <div className="w-5 h-2 bg-gold rounded-sm shadow-sm" />
    </div>
  );
};

interface BirthdayCakeProps {
  onAllCandlesBlown: () => void;
}

export const BirthdayCake = ({ onAllCandlesBlown }: BirthdayCakeProps) => {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [hasStartedBlowing, setHasStartedBlowing] = useState(false);

  const blowCandle = (index: number) => {
    if (!candles[index]) return;
    
    setHasStartedBlowing(true);
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);

    if (newCandles.every(c => !c)) {
      setTimeout(onAllCandlesBlown, 500);
    }
  };

  const blowAllCandles = () => {
    setHasStartedBlowing(true);
    setCandles([false, false, false, false, false]);
    setTimeout(onAllCandlesBlown, 500);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Instruction */}
      <p className="text-muted-foreground mb-6 text-center font-body animate-pulse-soft">
        {hasStartedBlowing ? 'Keep going! 🎂' : 'Tap the candles to blow them out! 🎂'}
      </p>

      <div className="relative animate-fade-in-up">
        {/* Cake glow */}
        <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-150" />
        
        {/* Candles container */}
        <div className="flex gap-6 justify-center mb-4 relative z-10">
          {candles.map((isLit, index) => (
            <Candle 
              key={index} 
              index={index} 
              isLit={isLit} 
              onBlow={() => blowCandle(index)} 
            />
          ))}
        </div>

        {/* Cake */}
        <div className="relative">
          {/* Top tier */}
          <div className="w-48 h-16 mx-auto bg-gradient-to-b from-rose-light to-primary rounded-t-lg relative overflow-hidden shadow-lg">
            {/* Frosting drips */}
            <div className="absolute -top-2 left-0 w-full h-6 bg-gradient-to-b from-primary-foreground to-rose-light rounded-t-lg" />
            <div className="absolute top-4 left-4 w-6 h-8 bg-primary-foreground/80 rounded-b-full" />
            <div className="absolute top-4 left-16 w-4 h-6 bg-primary-foreground/80 rounded-b-full" />
            <div className="absolute top-4 right-8 w-5 h-7 bg-primary-foreground/80 rounded-b-full" />
            <div className="absolute top-4 right-20 w-4 h-5 bg-primary-foreground/80 rounded-b-full" />
            {/* Decorations */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="w-2 h-2 rounded-full bg-secondary" />
            </div>
          </div>

          {/* Middle tier */}
          <div className="w-64 h-20 mx-auto bg-gradient-to-b from-secondary to-gold rounded-lg relative -mt-1 shadow-lg overflow-hidden">
            {/* Frosting pattern */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-secondary/50 to-transparent" />
            {/* Rose decorations */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 w-6 h-6 bg-primary rounded-full opacity-80" />
            <div className="absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 bg-primary rounded-full opacity-80" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs">🌸 🌸 🌸</div>
          </div>

          {/* Bottom tier */}
          <div className="w-80 h-24 mx-auto bg-gradient-to-b from-accent to-burgundy rounded-lg relative -mt-1 shadow-xl overflow-hidden">
            {/* Frosting waves */}
            <svg className="absolute top-0 left-0 w-full h-6" viewBox="0 0 320 24" preserveAspectRatio="none">
              <path 
                d="M0,24 Q40,0 80,12 T160,12 T240,12 T320,12 V24 Z" 
                fill="hsl(var(--rose-light))"
                opacity="0.6"
              />
            </svg>
            {/* Decorative hearts */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-6 text-primary-foreground text-sm">
              ❤️ ❤️ ❤️
            </div>
            {/* Side decorations */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">🎀</div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xl">🎀</div>
          </div>

          {/* Cake stand */}
          <div className="w-72 h-4 mx-auto bg-gradient-to-b from-gold to-gold-light rounded-b-lg shadow-lg" />
          <div className="w-56 h-6 mx-auto bg-gradient-to-b from-gold-light to-gold rounded-b-xl shadow-lg -mt-1" />
        </div>
      </div>

      {/* Blow all button */}
      {candles.some(c => c) && (
        <button
          onClick={blowAllCandles}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-body text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-soft"
        >
          ✨ Make a Wish & Blow! ✨
        </button>
      )}
    </div>
  );
};
