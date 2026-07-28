import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';
import { MapPin, ArrowRight, ChevronRight } from 'lucide-react';

const categories = {
  schools: {
    title: 'Top Schools Near K Raheja Viva, Pirangut | West Pune',
    description: 'Best CBSE, ICSE and IB schools near K Raheja Viva, Pirangut. Reputed schools within 10-20 mins driving distance from the estate.',
    heading: 'Top Schools Near K Raheja Viva',
    intro: 'One of the key considerations for families buying a home is proximity to quality schools. K Raheja Viva in Pirangut is well-connected to some of the most prestigious schools in West Pune, making it an ideal choice for families.',
    items: [
      { name: 'Indus International School, Pune', distance: '18 min', type: 'IB / IGCSE', note: 'Top-ranked international school' },
      { name: 'Orchid International School', distance: '12 min', type: 'CBSE', note: 'State of the art campus' },
      { name: 'Symbiosis International School', distance: '20 min', type: 'IB / CBSE', note: 'Part of Symbiosis group' },
      { name: 'Delhi Public School (DPS), Pune', distance: '22 min', type: 'CBSE', note: 'Premium CBSE school' },
      { name: 'Euro School, Wakad', distance: '15 min', type: 'CBSE', note: 'Modern curriculum & facilities' },
    ]
  },
  hospitals: {
    title: 'Hospitals & Healthcare Near K Raheja Viva, Pirangut',
    description: 'Top hospitals, clinics and healthcare facilities near K Raheja Viva, Pirangut, West Pune.',
    heading: 'Healthcare Near K Raheja Viva',
    intro: 'Living at K Raheja Viva means having access to world-class healthcare. Several top-rated multi-specialty hospitals are within easy reach of the estate, ensuring complete peace of mind for residents.',
    items: [
      { name: 'Ruby Hall Clinic, Hinjawadi', distance: '18 min', type: 'Multi-Specialty', note: 'JCI Accredited' },
      { name: 'Sahyadri Super Specialty Hospital', distance: '25 min', type: 'Super Specialty', note: 'Advanced cardiac & neuro care' },
      { name: 'Medipoint Hospital, Aundh', distance: '22 min', type: 'Multi-Specialty', note: 'Emergency & ICU' },
      { name: 'Healtheon Hospital, Wakad', distance: '14 min', type: 'Multi-Specialty', note: '24/7 emergency services' },
      { name: 'Life Care Hospital, Chandani Chowk', distance: '8 min', type: 'General & Day-care', note: 'Closest hospital to the estate' },
    ]
  },
  restaurants: {
    title: 'Restaurants & Dining Near K Raheja Viva, Pirangut',
    description: 'Top restaurants, cafes and dining options near K Raheja Viva, Pirangut, West Pune.',
    heading: 'Food & Dining Near K Raheja Viva',
    intro: 'The Pirangut and Chandani Chowk belt has evolved into a vibrant food scene with everything from fine dining to weekend brunch spots and popular dhabas, all within easy reach of the estate.',
    items: [
      { name: 'Sante Spa Cuisine, Mulshi', distance: '20 min', type: 'Fine Dining / Organic', note: 'Award-winning farm-to-table' },
      { name: 'Bhukha Shukha Restaurant', distance: '5 min', type: 'Maharashtrian Cuisine', note: 'Local favourite' },
      { name: 'Pizza Hut & Dominos, Chandani Chowk', distance: '12 min', type: 'Fast Food / Casual', note: 'Weekend go-to' },
      { name: 'The Fat Pig, Baner', distance: '20 min', type: 'Continental / Bar', note: 'Popular weekend destination' },
      { name: 'Hotel Abhishek, Pirangut', distance: '4 min', type: 'Indian / Veg & Non-Veg', note: 'Closest to the estate' },
    ]
  },
  connectivity: {
    title: 'Connectivity & Distance from K Raheja Viva, Pirangut',
    description: 'Road, metro and highway connectivity from K Raheja Viva, Pirangut to key locations in Pune.',
    heading: 'Connectivity from K Raheja Viva',
    intro: 'K Raheja Viva\'s strategic location in Pirangut provides excellent connectivity to Pune\'s key employment hubs, lifestyle destinations, and transport infrastructure.',
    items: [
      { name: 'Chandani Chowk Junction', distance: '12 min', type: 'Road Connectivity', note: 'Main entry to Pune city' },
      { name: 'Hinjawadi IT Park (Phase 1, 2, 3)', distance: '20 min', type: 'IT Corridor', note: 'Infosys, TCS, Wipro & 200+ companies' },
      { name: 'Mumbai-Pune Expressway (Katraj)', distance: '35 min', type: 'Highway', note: 'Direct Mumbai access in 2.5 hrs' },
      { name: 'Pune International Airport', distance: '45 min', type: 'Air Connectivity', note: 'Via Pune bypass road' },
      { name: 'Pune Ring Road (Upcoming)', distance: 'Adjacent', type: 'Upcoming Infrastructure', note: 'Will dramatically cut travel times' },
    ]
  }
};

type Category = keyof typeof categories;
const validCategories = Object.keys(categories) as Category[];

export function generateStaticParams() {
  return validCategories.map(cat => ({ category: cat }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  if (!validCategories.includes(params.category as Category)) return {};
  const data = categories[params.category as Category];
  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/pirangut/${params.category}`,
  });
}

export default function NeighbourhoodPage({ params }: { params: { category: string } }) {
  if (!validCategories.includes(params.category as Category)) notFound();
  const data = categories[params.category as Category];

  return (
    <>
      <JsonLd data={[breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Pirangut', url: '/pirangut/connectivity' },
        { name: data.heading, url: `/pirangut/${params.category}` },
      ])]} />

      <main className="min-h-screen bg-[#FAF8F5] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {validCategories.map(cat => (
                <Link
                  key={cat}
                  href={`/pirangut/${cat}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-colors ${
                    cat === params.category
                      ? 'bg-[#122A23] text-white'
                      : 'bg-white border border-gray-200 text-[#5A6E67] hover:border-[#C5A059]'
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#122A23] font-['Cinzel'] mb-4">{data.heading}</h1>
            <p className="text-[#5A6E67] leading-relaxed">{data.intro}</p>
          </div>

          <div className="space-y-4 mb-12">
            {data.items.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#C5A059]/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#122A23] text-white flex items-center justify-center font-bold shrink-0 font-['Cinzel']">{i + 1}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#122A23]">{item.name}</h3>
                  <p className="text-xs text-[#5A6E67]">{item.type} · {item.note}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-1 text-[#C5A059] font-bold text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.distance}
                  </div>
                  <p className="text-[10px] text-[#5A6E67]">from Viva</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#122A23] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white font-['Cinzel'] mb-3">Experience the Lifestyle</h2>
            <p className="text-white/70 text-sm mb-6">Book a private site visit to K Raheja Viva and experience the neighbourhood firsthand.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-colors">
              Book Private Estate Tour <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
