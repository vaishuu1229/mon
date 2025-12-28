import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
  rotation: number;
}

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initialPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 15 + 10,
      duration: Math.random() * 5 + 8,
      rotation: Math.random() * 360,
    }));
    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-70"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            animation: `petal-fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  );
};
