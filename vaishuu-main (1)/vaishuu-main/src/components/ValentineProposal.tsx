import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ValentineProposalProps {
  name: string;
}

export const ValentineProposal = ({ name }: ValentineProposalProps) => {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6 animate-pulse-soft">💍❤️💍</div>
          <h2 className="text-4xl md:text-6xl font-romantic text-gradient mb-6 animate-glow-pulse">
            I Love You Forever!
          </h2>
          <p className="text-xl md:text-2xl font-body text-foreground mb-8">
            You just made me the happiest person in the world, {name}! 
          </p>
          <div className="flex justify-center gap-4 text-4xl">
            💕 💖 💗 💓 💝 💕
          </div>
          <p className="mt-8 font-romantic text-3xl text-primary">
            Together forever and always ❤️
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="flex justify-center gap-4 mb-6">
          <Sparkles className="w-8 h-8 text-secondary animate-sparkle" />
          <Heart className="w-10 h-10 text-primary fill-current animate-float-heart" />
          <Sparkles className="w-8 h-8 text-secondary animate-sparkle" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Proposal card */}
        <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/30 relative overflow-hidden">
          {/* Background hearts */}
          <div className="absolute top-4 left-4 text-primary/20 text-4xl">❤️</div>
          <div className="absolute bottom-4 right-4 text-primary/20 text-4xl">❤️</div>
          <div className="absolute top-1/2 left-0 text-primary/10 text-6xl">💕</div>
          <div className="absolute top-1/2 right-0 text-primary/10 text-6xl">💕</div>

          <h2 className="text-3xl md:text-5xl font-romantic text-gradient mb-6 relative z-10">
            Will You Be My Valentine?
          </h2>
          
          <p className="text-lg md:text-xl font-body text-muted-foreground mb-8 relative z-10">
            {name}, from the moment I met you, my life changed forever. 
            You are the most beautiful person I've ever known, inside and out.
          </p>

          <div className="text-4xl mb-8">💝</div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button
              onClick={handleYes}
              className="px-12 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-body text-xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-soft"
            >
              Yes! I Love You Too! 💕
            </button>
            
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="px-8 py-4 bg-muted text-muted-foreground rounded-full font-body text-lg transition-all duration-200"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              }}
            >
              No 😢
            </button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground font-body">
            (Hint: There's only one right answer 😉💖)
          </p>
        </div>
      </div>
    </div>
  );
};
