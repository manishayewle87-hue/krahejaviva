'use client';

import React from 'react';
import { X, Play, ShieldCheck, Film } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
  title?: string;
}

export const YouTubeVideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoId = 'tMMs4PBNG-4',
  title = 'K Raheja Viva Pirangut - Project & Site Drone Tour'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070C0B]/90 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Container */}
      <div className="relative w-full max-w-5xl bg-[#122A23] rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-2xl space-y-4 p-4 sm:p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-[#C5A059] uppercase tracking-widest font-bold block">
                VIDEO WALKTHROUGH
              </span>
              <h3 className="font-serif text-lg text-[#FAF8F5] font-bold">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#FAF8F5]/10 text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#122A23] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video iFrame Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-[#C5A059]/30 shadow-inner">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-xs text-[#9EAEA6] pt-2">
          <span className="flex items-center space-x-1.5 text-[#C5A059]">
            <ShieldCheck className="w-4 h-4" />
            <span>K Raheja Corp Project Film (ID: {videoId})</span>
          </span>
          <span className="hidden sm:inline">Pirangut, West Pune Estate Walkthrough</span>
        </div>

      </div>

    </div>
  );
};
