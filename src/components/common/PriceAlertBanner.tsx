'use client';

import { useState, useEffect } from 'react';
import { Bell, X, CheckCircle2 } from 'lucide-react';

export function PriceAlertBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('priceAlertDismissed')) return;
    // Show after 8 seconds of scrolling engagement
    const timer = setTimeout(() => setIsVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem('priceAlertDismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/price-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, page: window.location.pathname }),
      });
    } catch {}
    setSubmitted(true);
    setTimeout(dismiss, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[997] animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#122A23] text-white rounded-2xl shadow-2xl p-5 border border-[#C5A059]/30">
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                <Bell className="w-4.5 h-4.5 text-[#C5A059]" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#FAF8F5] leading-snug">
                  🔔 Plot Prices Moving Fast
                </p>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Get instant alerts when prices update or new plots launch.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#C5A059] hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
            <p className="text-sm font-semibold text-white">You're on the list! We'll alert you first. 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
}
