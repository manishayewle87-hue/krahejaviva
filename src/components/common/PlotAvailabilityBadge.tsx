'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export function PlotAvailabilityBadge() {
  const [plotsRemaining, setPlotsRemaining] = useState<number | null>(null);

  useEffect(() => {
    // Generate random 8-18 once per session (reusing same value if already generated)
    const stored = sessionStorage.getItem('viva_plots_remaining');
    if (stored) {
      setPlotsRemaining(parseInt(stored, 10));
    } else {
      const randomPlots = Math.floor(Math.random() * (18 - 8 + 1)) + 8;
      sessionStorage.setItem('viva_plots_remaining', randomPlots.toString());
      setPlotsRemaining(randomPlots);
    }
  }, []);

  if (plotsRemaining === null) return null;

  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-widest mt-6 animate-pulse">
      <AlertTriangle className="w-4 h-4" />
      <span>Only {plotsRemaining} plots remaining in Phase 1</span>
    </div>
  );
}
