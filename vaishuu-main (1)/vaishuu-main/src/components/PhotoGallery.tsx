import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import photo1 from '@/assets/photo1.jpeg';
import photo2 from '@/assets/photo2.jpeg';
import photo3 from '@/assets/photo3.jpeg';
import photo4 from '@/assets/photo4.jpeg';

const photos = [photo1, photo2, photo3, photo4];

const loveQuotes = [
  "You are my today and all of my tomorrows 💕",
  "Every love story is beautiful, but ours is my favorite 💗",
  "In you, I've found the love of my life 💖",
  "Forever wouldn't be long enough with you 💝",
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  };

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  };

  return (
    <div className="py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="flex justify-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-primary fill-current animate-pulse-soft" />
          <Heart className="w-8 h-8 text-primary fill-current animate-pulse-soft" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-6 h-6 text-primary fill-current animate-pulse-soft" style={{ animationDelay: '0.4s' }} />
        </div>
        <h2 className="text-4xl md:text-5xl font-romantic text-gradient mb-2">
          My Beautiful Queen
        </h2>
        <p className="text-muted-foreground font-body">
          Every picture tells our love story 💕
        </p>
      </div>

      {/* Photo Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            onClick={() => openLightbox(index)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Heart frame decoration */}
            <div className="absolute inset-0 border-4 border-primary/30 rounded-2xl z-10 pointer-events-none group-hover:border-primary/60 transition-colors duration-300" />
            
            {/* Image */}
            <img
              src={photo}
              alt={`Beautiful moment ${index + 1}`}
              className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <p className="text-primary-foreground font-body text-sm md:text-base px-4 text-center">
                {loveQuotes[index]}
              </p>
            </div>

            {/* Corner hearts */}
            <div className="absolute top-2 right-2 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-6 h-6 fill-current drop-shadow-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Love note */}
      <div className="text-center mt-12">
        <p className="font-romantic text-2xl md:text-3xl text-primary animate-pulse-soft">
          You make my heart skip a beat every single day 💓
        </p>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-primary-foreground hover:text-primary transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 text-primary-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 text-primary-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <div 
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhoto]}
              alt={`Photo ${selectedPhoto + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Heart border frame */}
            <div className="absolute -inset-2 border-4 border-primary rounded-3xl pointer-events-none animate-glow-pulse" />
            
            {/* Quote below */}
            <p className="text-center text-primary-foreground font-romantic text-xl mt-4">
              {loveQuotes[selectedPhoto]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
