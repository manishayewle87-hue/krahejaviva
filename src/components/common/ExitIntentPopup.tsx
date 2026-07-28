'use client';

import { useEffect, useState } from 'react';
import { X, Download, Phone } from 'lucide-react';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem('exitPopupShown')) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Delay attaching to avoid firing immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setIsVisible(false), 2500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Gold top bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#C5A059] via-amber-400 to-[#C5A059]" />

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <span className="text-3xl mb-3 block">🏡</span>
                <h2 className="text-2xl font-bold text-[#122A23] font-['Cinzel'] mb-2">
                  Before You Leave…
                </h2>
                <p className="text-[#5A6E67] text-sm leading-relaxed">
                  Get your <strong>exclusive K Raheja Viva brochure</strong> — floor plans, pricing, masterplan & investment analysis — delivered instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#122A23] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
                <div className="flex gap-2">
                  <span className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#5A6E67] bg-gray-50">+91</span>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-[#122A23] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C5A059] to-amber-500 text-white py-3.5 rounded-xl font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Free Brochure
                </button>
              </form>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#5A6E67]">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Or call us: <strong className="text-[#122A23]">+91 80 8044 5445</strong></span>
              </div>
              <p className="text-center text-[10px] text-gray-400 mt-2">
                🔒 Your data is safe. No spam, ever.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#122A23] font-['Cinzel'] mb-2">Thank You, {name}!</h3>
              <p className="text-[#5A6E67] text-sm">Our team will reach out within 2 hours with your exclusive brochure.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
