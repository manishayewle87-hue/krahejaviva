'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

type Message = { from: 'bot' | 'user'; text: string };

const FLOWS: Record<string, { message: string; options?: string[]; next?: string }> = {
  start: {
    message: "👋 Hi! I'm Viva, your K Raheja Viva property assistant. Are you looking for a luxury NA plot in Pune?",
    options: ['Yes, I\'m interested!', 'Just browsing'],
    next: 'budget',
  },
  just_browsing: {
    message: "No problem! Feel free to explore. I'm here if you have questions. You can ask me about plots, pricing, amenities or book a site visit. 😊",
    options: ['Tell me about plots', 'What amenities are there?', 'I want to book a visit'],
  },
  budget: {
    message: "Great choice! 🏡 K Raheja Viva offers premium NA plots from 2000 to 6000+ sq ft. What's your investment budget?",
    options: ['₹80L – ₹1.5 Cr', '₹1.5 Cr – ₹3 Cr', '₹3 Cr+'],
    next: 'timeline',
  },
  timeline: {
    message: "Perfect! When are you planning to make this investment?",
    options: ['Immediately (0-3 months)', 'This year (3-12 months)', 'Just researching'],
    next: 'purpose',
  },
  purpose: {
    message: "And what's the primary purpose for this plot?",
    options: ['Build my dream villa', 'Pure investment / appreciation', 'Weekend home'],
    next: 'capture',
  },
  capture: {
    message: "Excellent! Our investment counsellor can share exclusive pricing & floor plans. May I have your name?",
    next: 'phone',
  },
  phone: {
    message: "Thank you! And your mobile number so our team can reach you? (We'll never spam you 🔒)",
    next: 'done',
  },
  done: {
    message: "🎉 Wonderful! Our investment counsellor will call you within 2 hours with exclusive details & a special site visit slot. You can also call us directly at +91 80 8044 5445.",
    options: ['Book a site visit online →'],
  },
  amenities: {
    message: "K Raheja Viva offers 40+ world-class amenities including: 🏊 25m Infinity Pool, 🏋️ Fitness Center, 🎭 20,000 sq ft Signature Clubhouse, 🌳 6,500+ native trees, 🎾 Sports Courts, and much more!",
    options: ['Tell me about plot sizes', 'I want to book a visit', 'Investment returns?'],
  },
  plot_sizes: {
    message: "We have plots from 2,000 to 6,000+ sq ft, categorized as Forest Facing, Hill Crest (Sahyadri views), and Grand Estate. All with 100% clear NA titles and MahaRERA approval.",
    options: ["What's the pricing?", 'Book a site visit', 'Investment returns?'],
  },
  returns: {
    message: "📈 West Pune (Pirangut) has delivered 12-15% CAGR historically, outperforming FDs & gold. The upcoming Pune Ring Road will further boost appreciation. Check our ROI Calculator!",
    options: ['View ROI Calculator →', 'I want to book a visit'],
  },
};

const OPTION_MAP: Record<string, string> = {
  'Just browsing': 'just_browsing',
  'Tell me about plots': 'plot_sizes',
  'What amenities are there?': 'amenities',
  'I want to book a visit': 'capture',
  'Tell me about plot sizes': 'plot_sizes',
  'Investment returns?': 'returns',
  'What\'s the pricing?': 'capture',
  'View ROI Calculator →': 'roi',
  'Book a site visit online →': 'visit_link',
};

export function PropertyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [currentFlow, setCurrentFlow] = useState('start');
  const [waitingForText, setWaitingForText] = useState(false);
  const [textStep, setTextStep] = useState<'name' | 'phone' | null>(null);
  const [userName, setUserName] = useState('');
  const [hasOpened, setHasOpened] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Show pulse after 15s to attract attention
  useEffect(() => {
    const t = setTimeout(() => setShowPulse(true), 15000);
    return () => clearTimeout(t);
  }, []);

  const open = () => {
    setIsOpen(true);
    setShowPulse(false);
    if (!hasOpened) {
      setHasOpened(true);
      setTimeout(() => addBotMessage('start'), 400);
    }
  };

  const addBotMessage = (flowKey: string) => {
    const flow = FLOWS[flowKey];
    if (!flow) return;
    setMessages(prev => [...prev, { from: 'bot', text: flow.message }]);
    setCurrentFlow(flowKey);
    if (flowKey === 'capture') { setWaitingForText(true); setTextStep('name'); }
    if (flowKey === 'phone') { setWaitingForText(true); setTextStep('phone'); }
  };

  const handleOption = (option: string) => {
    setMessages(prev => [...prev, { from: 'user', text: option }]);
    const nextKey = OPTION_MAP[option] || FLOWS[currentFlow]?.next;
    if (option === 'View ROI Calculator →') {
      window.open('/investment-calculator', '_blank');
      return;
    }
    if (option === 'Book a site visit online →') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    setTimeout(() => nextKey && addBotMessage(nextKey), 600);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages(prev => [...prev, { from: 'user', text: userText }]);
    setInput('');

    if (textStep === 'name') {
      setUserName(userText);
      setTextStep(null);
      setWaitingForText(false);
      setTimeout(() => addBotMessage('phone'), 600);
    } else if (textStep === 'phone') {
      setTextStep(null);
      setWaitingForText(false);
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text: `🎉 Thanks ${userName}! Our counsellor will call you at ${userText} within 2 hours with exclusive details. You can also reach us at +91 80 8044 5445.` }]);
      }, 600);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const currentFlowData = FLOWS[currentFlow];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 right-4 md:left-6 md:right-auto md:w-[360px] z-[998] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[520px] animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#122A23] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">Viva Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/60 text-xs">Online — typically replies instantly</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF8F5]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-[#122A23] text-white rounded-br-sm'
                    : 'bg-white text-[#122A23] shadow-sm border border-gray-100 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Quick Reply Options */}
            {!waitingForText && currentFlowData?.options && messages.length > 0 && messages[messages.length - 1]?.from === 'bot' && (
              <div className="flex flex-wrap gap-2 pt-1">
                {currentFlowData.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleOption(opt)}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-[#C5A059]/40 text-[#122A23] hover:bg-amber-50 hover:border-[#C5A059] transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {waitingForText && (
            <div className="p-3 border-t border-gray-100 bg-white flex gap-2">
              <input
                type={textStep === 'phone' ? 'tel' : 'text'}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder={textStep === 'phone' ? 'Enter your mobile number…' : 'Enter your name…'}
                className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-sm text-[#122A23] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                autoFocus
              />
              <button onClick={handleSend} className="p-2 bg-[#C5A059] rounded-xl hover:bg-amber-500 transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={isOpen ? () => setIsOpen(false) : open}
        className="fixed bottom-6 left-6 z-[998] w-14 h-14 rounded-full bg-[#122A23] border-2 border-[#C5A059] flex items-center justify-center shadow-xl hover:scale-110 transition-all"
        aria-label="Open chat assistant"
      >
        {showPulse && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#C5A059] animate-ping opacity-25" />
        )}
        {isOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Bot className="w-6 h-6 text-[#C5A059]" />}
      </button>
    </>
  );
}
