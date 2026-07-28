'use client';

import { useEffect, useState } from 'react';

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function SocialProof() {
  const [viewers, setViewers] = useState(randomBetween(8, 18));
  const [bookings] = useState(randomBetween(44, 67));

  // Simulate live fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.max(5, Math.min(25, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <div className="flex items-center gap-2 px-4 py-2 bg-black/25 backdrop-blur-md border border-white/15 rounded-full">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
        <span className="text-white text-xs font-semibold">
          <span className="tabular-nums transition-all duration-700">{viewers}</span> people viewing plots now
        </span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-black/25 backdrop-blur-md border border-white/15 rounded-full">
        <span className="text-green-400 text-xs">✅</span>
        <span className="text-white text-xs font-semibold">{bookings} site visits booked this month</span>
      </div>
    </div>
  );
}
