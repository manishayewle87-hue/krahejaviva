'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, Car, CheckCircle2, Phone, Mail, User, ShieldCheck } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  plotNumber?: string;
}

export const BookSiteVisitModal: React.FC<ModalProps> = ({ isOpen, onClose, plotNumber }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    timeSlot: '11:00 AM - 01:00 PM',
    needCabPickUp: true,
    pickupLocation: 'Chandani Chowk',
    interest: 'Plot Purchase'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.visitDate,
          message: `Time Slot: ${formData.timeSlot} | Cab Pickup: ${formData.needCabPickUp ? formData.pickupLocation : 'No'}${plotNumber ? ` | Plot: ${plotNumber}` : ''}`,
          source: 'Book VIP Site Visit Modal',
        }),
      });
    } catch (err) {
      console.error('Lead submit error:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel-gold rounded-2xl p-6 sm:p-8 border border-viva-gold/40 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-viva-sand hover:text-viva-gold hover:bg-viva-forest/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-viva-gold/20 border border-viva-gold text-viva-gold flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl text-viva-sand">VIP Site Visit Confirmed!</h3>
            <p className="text-xs text-viva-muted max-w-sm mx-auto">
              Thank you, <span className="text-viva-gold font-semibold">{formData.name}</span>. Our Raheja Viva Property Advisor will call you within 15 minutes to confirm your luxury chauffeur pickup on <span className="text-viva-sand font-semibold">{formData.visitDate || 'your selected date'}</span>.
            </p>
            {plotNumber && (
              <div className="p-3 glass-panel rounded-lg text-xs text-viva-gold">
                Priority Inspection Reserved for: <strong>{plotNumber}</strong>
              </div>
            )}
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2.5 rounded-full bg-viva-gold text-viva-dark font-bold text-xs uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-viva-gold font-semibold block">
                EXPERIENCE THE ESTATE IN PERSON
              </span>
              <h3 className="font-serif text-2xl text-viva-sand">
                Book a Private VIP Site Visit
              </h3>
              {plotNumber && (
                <p className="text-xs text-viva-gold font-medium">
                  Inspecting Plot: {plotNumber}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-viva-gold/70 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Vikas Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 pl-9 pr-4 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-viva-gold/70 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98220 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 pl-9 pr-4 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-viva-gold/70 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="vikas@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 pl-9 pr-4 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
                    className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 px-3 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-viva-sand/80 mb-1">Time Slot</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                    className="w-full bg-viva-dark/80 border border-viva-gold/25 rounded-xl py-2.5 px-3 text-xs text-viva-sand focus:outline-none focus:border-viva-gold"
                  >
                    <option>10:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 02:00 PM</option>
                    <option>02:00 PM - 04:00 PM</option>
                    <option>04:00 PM - 06:00 PM (Sunset Tour)</option>
                  </select>
                </div>
              </div>

              {/* Complimentary Cab Pick Up Toggle */}
              <div className="p-3 bg-viva-forest/40 border border-viva-gold/20 rounded-xl space-y-2">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="flex items-center space-x-2 text-xs font-medium text-viva-sand">
                    <Car className="w-4 h-4 text-viva-gold" />
                    <span>Complimentary Luxury SUV Pick-up</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={formData.needCabPickUp}
                    onChange={(e) => setFormData({...formData, needCabPickUp: e.target.checked})}
                    className="accent-viva-gold w-4 h-4"
                  />
                </label>

                {formData.needCabPickUp && (
                  <select
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                    className="w-full bg-viva-dark/90 border border-viva-gold/30 rounded-lg py-1.5 px-2 text-xs text-viva-gold focus:outline-none"
                  >
                    <option>Pick-up Location: Chandani Chowk Flyover Junction</option>
                    <option>Pick-up Location: Baner High Street</option>
                    <option>Pick-up Location: Kothrud Stand</option>
                    <option>Pick-up Location: Hinjawadi Phase 1</option>
                    <option>Pick-up Location: Home / Office Pickup (West Pune)</option>
                  </select>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-viva-gold via-amber-500 to-viva-gold text-viva-dark font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-viva-gold/40 hover:scale-[1.01] transition-all mt-2"
              >
                Confirm VIP Appointment
              </button>

              <p className="text-[10px] text-center text-viva-muted flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-viva-gold" />
                <span>Your information is strictly protected by K Raheja Corp Homes privacy policy.</span>
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
