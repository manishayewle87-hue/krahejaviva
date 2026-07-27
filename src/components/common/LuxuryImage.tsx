'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Home, Trees, ShieldCheck, Sun, Compass } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  fallbackCategory?: 'villa' | 'nature' | 'club' | 'estate';
}

export const LuxuryImage: React.FC<LuxuryImageProps> = ({
  src,
  alt,
  className = '',
  fallbackCategory = 'estate'
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`relative w-full h-full bg-gradient-to-br from-[#122A23] via-[#1A3D33] to-[#0A1814] flex flex-col items-center justify-center p-6 text-center overflow-hidden border border-[#C5A059]/30 ${className}`}>
        {/* Vector Background Graphic */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 300">
          <path d="M0 200 Q 100 120, 200 180 T 400 150 L 400 300 L 0 300 Z" fill="#C5A059" />
          <circle cx="320" cy="60" r="40" fill="#FFD700" opacity="0.3" />
        </svg>

        <div className="relative z-10 space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5]/10 border border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059]">
            {fallbackCategory === 'villa' ? (
              <Home className="w-6 h-6" />
            ) : fallbackCategory === 'nature' ? (
              <Trees className="w-6 h-6" />
            ) : (
              <Compass className="w-6 h-6" />
            )}
          </div>
          <div className="font-serif text-sm font-bold text-[#FAF8F5] tracking-wide">{alt}</div>
          <div className="text-[10px] text-[#C5A059] font-mono tracking-widest uppercase">K Raheja Viva Estate</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
};
