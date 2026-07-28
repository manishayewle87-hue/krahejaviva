import { buildMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'पुणे में NA प्लॉट | K Raheja Corp Viva — लक्ज़री विला प्लॉट, पश्चिम पुणे',
  description: 'K Raheja Corp Viva — पिरंगुट, पश्चिम पुणे में 100+ एकड़ लक्ज़री NA प्लॉटेड एस्टेट। MahaRERA अनुमोदित, 40+ सुविधाएं, सह्याद्री पर्वत दृश्य। अभी बुक करें!',
  path: '/hi',
  keywords: ['पुणे में NA प्लॉट', 'पुणे में जमीन', 'पश्चिम पुणे प्रॉपर्टी', 'पिरंगुट प्लॉट', 'K Raheja Viva'],
});

export default function HindiPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">K Raheja Corp Homes · पिरंगुट, पुणे</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#122A23] font-['Cinzel'] mt-4 mb-5 leading-tight">
            पुणे में लक्ज़री NA प्लॉट
          </h1>
          <p className="text-lg text-[#5A6E67] max-w-2xl mx-auto leading-relaxed">
            K Raheja Corp Viva — पश्चिम पुणे के पिरंगुट में एक शानदार 100+ एकड़ लक्ज़री NA प्लॉटेड एस्टेट। सह्याद्री की हरियाली के बीच अपना सपनों का घर बनाएं।
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/" className="flex items-center gap-2 bg-[#122A23] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#1A3D33] transition-colors">
              प्रोजेक्ट देखें <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+918080445445" className="flex items-center gap-2 bg-white border-2 border-[#C5A059] text-[#122A23] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-amber-50 transition-colors">
              <Phone className="w-4 h-4 text-[#C5A059]" /> अभी कॉल करें
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { num: '100+', label: 'एकड़ एस्टेट' },
            { num: '40+', label: 'सुविधाएं' },
            { num: '6500+', label: 'देशी पेड़' },
            { num: '12 मिनट', label: 'चंदनी चौक से' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 text-center border border-[#C5A059]/20 shadow-sm">
              <div className="text-2xl font-bold text-[#C5A059] font-['Cinzel']">{stat.num}</div>
              <div className="text-xs text-[#5A6E67] mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 border border-[#C5A059]/20 shadow-sm mb-10">
          <h2 className="text-2xl font-bold text-[#122A23] font-['Cinzel'] mb-6">K Raheja Viva क्यों चुनें?</h2>
          <ul className="space-y-4">
            {[
              { icon: '✅', text: 'MahaRERA अनुमोदित — 100% कानूनी सुरक्षा' },
              { icon: '🏔️', text: 'सह्याद्री पर्वत के मनोरम दृश्य' },
              { icon: '🏊', text: '25 मीटर इन्फिनिटी पूल + 20,000 sq ft सिग्नेचर क्लबहाउस' },
              { icon: '📈', text: 'पिरंगुट में 12-15% वार्षिक प्रशंसा दर' },
              { icon: '🌿', text: 'कम घनत्व — प्रति एकड़ सीमित प्लॉट, अधिकतम गोपनीयता' },
              { icon: '🏦', text: 'SBI, HDFC, ICICI द्वारा पूर्व-अनुमोदित होम लोन' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[#3A4E45] font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-[#122A23] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white font-['Cinzel'] mb-2">आज ही साइट विज़िट बुक करें</h2>
          <p className="text-white/70 text-sm mb-6">हमारी विशेषज्ञ टीम आपको प्लॉट, कीमत और निवेश विश्लेषण के बारे में विस्तार से बताएगी।</p>
          <a href="tel:+918080445445" className="inline-flex items-center gap-2 bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-amber-500 transition-colors">
            <Phone className="w-5 h-5" /> +91 80 8044 5445 पर कॉल करें
          </a>
        </div>
      </div>
    </main>
  );
}
