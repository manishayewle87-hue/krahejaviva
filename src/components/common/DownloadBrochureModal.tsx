'use client';

import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Mail, Phone, User } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadBrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    buyingTimeline: '0-3 Months',
    plotPreference: 'Forest Facing'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel-gold rounded-2xl p-6 sm:p-8 border border-viva-gold/40 shadow-2xl">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-viva-sand hover:text-viva-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-viva-gold/20 border border-viva-gold text-viva-gold flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl text-viva-sand">Brochure Sent & Instant Download Ready</h3>
            <p className="text-xs text-viva-muted max-w-sm mx-auto">
              We have dispatched the high-resolution **K Raheja Viva Master Plan & E-Brochure PDF** to <span className="text-viva-gold font-semibold">{formData.email}</span>.
            </p>
            <div className="pt-2">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Master Plan PDF Download Started (Simulated)"); }}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-viva-gold text-viva-dark font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Masterplan PDF (24 MB)</span>
              </a>
            </div>
            <button
              onClick={() => { setDownloaded(false); onClose(); }}
              className="block mx-auto text-xs text-viva-muted hover:text-viva-gold pt-2"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center space-x-1 text-viva-gold text-xs font-semibold uppercase tracking-widest">
                <FileText className="w-4 h-4" />
                <span>E-BROCHURE</span>
              </div>
              <h3 className="font-serif text-2xl text-viva-sand">
                Download Master Plan & Cost Sheet
              </h3>
              <p className="text-xs text-viva-muted">
                Includes full GIS plot layout, price list, RERA approvals, and villa architecture guidelines.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-viva-gold/70 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Aditya Kulkarni"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 pl-9 pr-4 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-viva-gold/70 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="aditya@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 pl-9 pr-4 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-viva-gold/70 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98900 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 pl-9 pr-4 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Plot Preference</label>
                <select
                  value={formData.plotPreference}
                  onChange={(e) => setFormData({...formData, plotPreference: e.target.value})}
                  className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 px-3 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                >
                  <option>Forest Facing Plots (400 - 600 sq yds)</option>
                  <option>Sahyadri Hill Crest Plots (600 - 800 sq yds)</option>
                  <option>Signature Club Facing Plots</option>
                  <option>Large Estate Plots (800 - 1200+ sq yds)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-viva-gold text-viva-dark font-bold text-xs uppercase tracking-widest hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Get Instant E-Brochure</span>
              </button>

              <p className="text-[10px] text-center text-viva-muted flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-viva-gold" />
                <span>100% Spam Free. Instant PDF Link Delivered via WhatsApp & Email.</span>
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
