'use client';

import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'gold';
  className?: string;
  showSubtitle?: boolean;
}

export const KRahejaLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FAF8F5' : '#122A23';

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>

      {/* K Raheja Corp Homes — Pyramid Emblem (matches brand mark) */}
      <svg
        viewBox="0 0 44 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-11 shrink-0 group-hover:scale-105 transition-transform duration-200"
      >
        {/* Outer triangle */}
        <path
          d="M22 3 L41 46 L3 46 Z"
          stroke="#C5A059"
          strokeWidth="2.2"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Inner inverted triangle (cutout / shadow mark) */}
        <path
          d="M22 16 L32 38 L12 38 Z"
          fill={isLight ? 'rgba(197,160,89,0.15)' : 'rgba(18,42,35,0.12)'}
          stroke="#C5A059"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Centre vertical spine */}
        <line x1="22" y1="3" x2="22" y2="46" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Compact stacked brand text */}
      <div className="flex flex-col leading-none gap-[3px]">
        {/* Company line */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-[8px] uppercase tracking-[0.3em] font-black text-[#C5A059]">
            K Raheja Corp
          </span>
          <span className="text-[7.5px] uppercase tracking-[0.22em] font-semibold text-[#8A9E97]">
            Homes
          </span>
        </div>

        {/* Project name */}
        {showSubtitle && (
          <span
            className="font-serif text-[17px] font-bold tracking-[0.06em] leading-none group-hover:text-[#C5A059] transition-colors duration-200"
            style={{ color: textColor }}
          >
            RAHEJA VIVA
          </span>
        )}
      </div>

    </div>
  );
};
