
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelArtProps {
  className?: string;
  type: 'cursor' | 'robot' | 'computer' | 'star' | 'block';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const PixelArt: React.FC<PixelArtProps> = ({
  className,
  type,
  size = 'md',
  animated = true,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const getPixelArt = () => {
    switch (type) {
      case 'cursor':
        return (
          <svg viewBox="0 0 16 16" className="pixel-grid">
            <path fill="currentColor" d="M3 1v12l3-3 2 4 1-1-2-3h5z" />
          </svg>
        );
      case 'robot':
        return (
          <svg viewBox="0 0 16 16" className="pixel-grid">
            <path fill="currentColor" d="M6 1h4v2h-4zM4 3h8v10H4zM2 5h2v2H2zM12 5h2v2h-2zM5 8h2v2H5zM9 8h2v2H9zM6 13h1v2H6zM9 13h1v2H9z" />
          </svg>
        );
      case 'computer':
        return (
          <svg viewBox="0 0 16 16" className="pixel-grid">
            <path fill="currentColor" d="M2 3h12v8H2zM5 12h6v1H5zM4 13h8v1H4z" />
            <path fill="#3B82F6" d="M3 4h10v6H3z" />
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 16 16" className="pixel-grid">
            <path fill="currentColor" d="M8 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z" />
          </svg>
        );
      case 'block':
        return (
          <svg viewBox="0 0 16 16" className="pixel-grid">
            <path fill="currentColor" d="M1 1h14v14H1z" />
            <path fill="#3B82F6" d="M3 3h10v10H3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        'relative inline-block text-white',
        sizeClasses[size],
        animated && 'animate-pixel-float',
        className
      )}
    >
      {getPixelArt()}
    </div>
  );
};

export default PixelArt;
