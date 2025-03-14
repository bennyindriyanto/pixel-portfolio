
import React from 'react';
import Particles from '@/components/ui/Particles';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Particles
        particleColors={['#1e3a8a', '#3b82f6', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;
