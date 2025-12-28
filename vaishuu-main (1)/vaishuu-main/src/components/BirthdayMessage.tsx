import { useEffect, useState } from 'react';
import { Confetti } from './Confetti';
import { FloatingHearts } from './FloatingHearts';
import { FallingPetals } from './FallingPetals';
import { PhotoGallery } from './PhotoGallery';
import { ValentineProposal } from './ValentineProposal';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface BirthdayMessageProps {
  name: string;
}

export const BirthdayMessage = ({ name }: BirthdayMessageProps) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    
    const sectionTimers = [
      setTimeout(() => setCurrentSection(1), 500),
      setTimeout(() => setCurrentSection(2), 1500),
      setTimeout(() => setCurrentSection(3), 2500),
    ];

    return () => {
      clearTimeout(timer);
      sectionTimers.forEach(t => clearTimeout(t));
    };
  }, []);

  const highlightText = (text: string) => {
    return text
      .replace(/birthday/gi, '<span class="highlight-birthday">birthday</span>')
      .replace(/love/gi, '<span class="highlight-love">love</span>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
      {showConfetti && <Confetti />}
      <FloatingHearts />
      <FallingPetals />

      <div className="relative z-10">
        {/* Birthday greeting section */}
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              currentSection >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex justify-center gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-secondary animate-sparkle" />
              <Gift className="w-10 h-10 text-primary animate-float-heart" />
              <Sparkles className="w-8 h-8 text-secondary animate-sparkle" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-romantic text-gradient mb-4 animate-glow-pulse">
              Happy <span className="highlight-birthday">Birthday</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-romantic text-primary">
              {name}! 🎂
            </h2>
            <p className="mt-4 text-xl text-muted-foreground font-body">
              May all your dreams come true ✨
            </p>
          </div>

          {/* Main message card */}
          <div 
            className={`bg-card/80 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl border border-primary/20 max-w-3xl mx-auto transition-all duration-1000 ${
              currentSection >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Decorative hearts */}
            <div className="flex justify-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-primary fill-current" />
              <Heart className="w-6 h-6 text-primary fill-current animate-heartbeat" />
              <Heart className="w-5 h-5 text-primary fill-current" />
            </div>

            <div className="font-body text-lg md:text-xl leading-relaxed text-foreground space-y-6 text-center md:text-left">
              <p 
                className={`transition-all duration-700 ${
                  currentSection >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                dangerouslySetInnerHTML={{ 
                  __html: highlightText('I wish u all the best in life❤️☺️💍 may ur dream and wishes comes true❤️😘. Hope intha special day unnoda manasuku pidichcha aasa ellaththaum konduvarum💞🥳.')
                }}
              />

              <p 
                className={`transition-all duration-700 delay-300 ${
                  currentSection >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                dangerouslySetInnerHTML={{ 
                  __html: highlightText("And i'm so blessed nee en lifela kidachchathukku 😇💞 and i proudly said to everone u are my one and only and u are my girl😇❤️🥳. Entha oru msg aalayum express panna mudiyathu naan unna evloo love panran endu but thanks vaishu came in to my life and being the best soulmate ever 🩵💗.")
                }}
              />

              <p 
                className={`transition-all duration-700 delay-500 ${
                  currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                dangerouslySetInnerHTML={{ 
                  __html: highlightText("Today niraya birthday wishes varum unaku, i want u to know ithu ennoda manasalavula irunthu wish panran vaishu ennum niraya niraya unakuda pesanum solanum but ellaththayum orey msg layum solli mudikelaathu sollavum mudiyathu...")
                }}
              />

              <div className="mt-8 pt-6 border-t border-primary/20">
                <p 
                  className={`transition-all duration-700 delay-700 ${
                    currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText("Intha 2025 la en life la kidachcha athuvum naan expect pannama en life la vantha biggest gift na nee thaan vaishuu 🎁💝 atha I can't explain that feel, anthalavuku happy nee ena life la vanthathuku 😇💞")
                  }}
                />

                <p 
                  className={`transition-all duration-700 delay-1000 mt-4 ${
                    currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText("Ennum konja days la 2026 new year start aakapokuthu 🎆✨ athey maathiri yaar yaar en lifela irupaangaloo enaku theriyala but nee enkoodave irukkanum vaishuu 💍❤️ yes anthalavuku naan love panran I love you soo much vaishuu 💗🥰")
                  }}
                />

                <p 
                  className={`transition-all duration-700 delay-1000 mt-4 text-xl font-romantic text-primary ${
                    currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                >
                  2026 ready aakigo un kooda irunthu unna tholla pannaporan 😘🎉 and I <span className="highlight-love">love</span> you 💕💍
                </p>
              </div>

              {/* Special Love Message Section */}
              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="flex justify-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-primary fill-current animate-heartbeat" />
                  <span className="font-romantic text-xl text-primary">A Special Promise</span>
                  <Heart className="w-4 h-4 text-primary fill-current animate-heartbeat" />
                </div>

                <p 
                  className={`transition-all duration-700 delay-700 italic text-primary/90 ${
                    currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText("I will never get tired of loving you, because loving you is my happiness 💕 And naan unkooda irukum pothu I'm feel different vaishuu with you I'm soo happy atha sollave mudiyathu entha alavuku happy endu 🥰💗")
                  }}
                />

                <p 
                  className={`transition-all duration-700 delay-1000 mt-4 ${
                    currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText("When I'm with you, I act different, in a good way 😊 I smile more and laugh more 😄 I don't feel hurt and alone when I'm with you, instead I feel safe and loved 🥺💞 You're easy to talk to, and you listen to me 👂💕")
                  }}
                />

                <p 
                  className={`transition-all duration-700 delay-1000 mt-4 ${
                    currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText("I don't ever feel sad 😌 You show that you really care, and you're not just pretending 🥹💗 I really appreciate what you did, because with you, I'm different 🌟 With you, I'm happy 😇💝")
                  }}
                />

                <p 
                  className={`transition-all duration-700 delay-1000 mt-6 text-xl font-romantic text-primary bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 p-4 rounded-2xl border border-primary/30 ${
                    currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                >
                  I promise you I will never leave you no matter what life throws at us 💪❤️ I will never get tired of <span className="highlight-love">loving</span> you bcoz <span className="highlight-love">loving</span> you is my happiness 💕💍🥰
                </p>
              </div>
            </div>

            {/* Signature */}
            <div 
              className={`mt-10 text-center transition-all duration-700 delay-700 ${
                currentSection >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                <Heart className="w-5 h-5 text-primary fill-current animate-pulse-soft" />
                <span className="font-romantic text-2xl text-primary">
                  With all my <span className="highlight-love">love</span>
                </span>
                <Heart className="w-5 h-5 text-primary fill-current animate-pulse-soft" />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce text-muted-foreground">
            <p className="font-body text-sm mb-2">Scroll down for more surprises</p>
            <div className="text-2xl">👇💕</div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="bg-gradient-to-b from-transparent via-card/30 to-transparent">
          <PhotoGallery />
        </div>

        {/* Valentine Proposal Section */}
        <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent py-8">
          <ValentineProposal name={name} />
        </div>

        {/* Footer */}
        <div className="py-16 text-center">
          <div className="flex justify-center gap-3 text-3xl mb-4">
            💝 🎂 💕 🎉 💖 🌹 💗
          </div>
          <p className="text-muted-foreground font-body text-sm mb-2">
            Made with endless <span className="highlight-love">love</span> for you ❤️
          </p>
          <p className="font-romantic text-2xl text-primary animate-pulse-soft">
            Forever Yours 💍
          </p>
        </div>
      </div>
    </div>
  );
};
