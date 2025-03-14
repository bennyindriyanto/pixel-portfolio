
import React from 'react';
import Particles from '@/components/ui/Particles';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Particles
        particleColors={['#1e3a8a', '#3b82f6', '#ffffff']}
        particleCount={350}  // Increased from 200 to 350
        particleSpread={8}   // Decreased from 10 to 8 to make particles more concentrated
        speed={0.15}         // Slightly increased speed
        particleBaseSize={120} // Slightly larger particles
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;
