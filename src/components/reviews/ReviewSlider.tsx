'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
}

export function ReviewSlider() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        const json = await res.json();
        if (json.success) {
          setReviews(json.data);
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-48 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C5A059]"></div>
      </div>
    );
  }

  if (reviews.length === 0) return null;

  return (
    <div className="w-full overflow-hidden relative bg-[#FAF8F5] py-12">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-['Cinzel'] text-[#122A23] mb-2">Verified Investor Reviews</h2>
        <p className="text-[#5A6E67]">See what our elite community says about K Raheja Viva</p>
      </div>
      
      {/* CSS Marquee Animation */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-6 px-4 whitespace-nowrap">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
          {/* Duplicate for seamless looping */}
          {reviews.map((review, i) => (
            <ReviewCard key={`dup-${i}`} review={review} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[350px] md:w-[400px] shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-[#C5A059]/20 flex flex-col justify-between whitespace-normal h-full transition-transform hover:-translate-y-1 hover:shadow-md">
      <div>
        <div className="flex items-center gap-1 mb-4 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
          ))}
        </div>
        <p className="text-[#3A4E45] text-sm leading-relaxed mb-6 italic line-clamp-4">"{review.text}"</p>
      </div>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-[#122A23] text-white flex items-center justify-center font-bold font-['Cinzel'] overflow-hidden">
          {review.profile_photo_url.includes('default-user') 
            ? review.author_name.charAt(0) 
            : <img src={review.profile_photo_url} alt={review.author_name} className="w-full h-full object-cover" />}
        </div>
        <div>
          <h4 className="text-[#122A23] font-bold text-sm">{review.author_name}</h4>
          <p className="text-xs text-[#5A6E67]">
            {new Date(review.time * 1000).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
          </p>
        </div>
        <div className="ml-auto">
          <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
