import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema, localBusinessSchema } from '@/lib/seo';

export const viewport: Viewport = {
  themeColor: '#122A23',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'K Raheja Viva Pirangut | Luxury NA Plots & Villa Community West Pune',
    template: '%s | K Raheja Viva — Luxury Plots West Pune',
  },
  description: 'K Raheja Viva — 100+ acre premium NA plotted development and villa community in Pirangut, West Pune. Low-density master plan, 40+ lifestyle amenities, Signature Clubhouse, and MahaRERA approved plots. 12 mins from Chandani Chowk.',
  keywords: [
    'K Raheja Viva', 'Raheja Viva Pune', 'K Raheja Viva Pirangut', 'NA Plots Pune',
    'NA Bungalow Plots Pune', 'Villa Plots Pune', 'Luxury Plots West Pune',
    'Gated Community Plots Pune', 'Plots in Pirangut', 'Pirangut Real Estate',
    'K Raheja Corp Homes', 'Plotted Development Pune', 'Luxury Plotted Township',
    'MahaRERA Approved Plots', 'West Pune Property',
  ].join(', '),
  metadataBase: new URL('https://www.raheja-viva.com'),
  alternates: {
    canonical: 'https://www.raheja-viva.com',
    languages: {
      'en-IN': 'https://www.raheja-viva.com',
      'x-default': 'https://www.raheja-viva.com',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.raheja-viva.com',
    title: 'K Raheja Viva Pirangut | Luxury NA Plots & Villa Community West Pune',
    description: 'Premium NA villa plots & luxury community in 100+ acre estate, Pirangut, West Pune. 40+ amenities, Sahyadri views, MahaRERA approved.',
    siteName: 'K Raheja Viva — K Raheja Corp Homes',
    images: [{ url: 'https://www.raheja-viva.com/images/viva/viva-panoramic-aerial.jpg', width: 1200, height: 630, alt: 'K Raheja Viva Pirangut — Luxury Plotted Development West Pune' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K Raheja Viva | Luxury NA Plots West Pune',
    description: 'Premium NA villa plots in Pirangut, West Pune. K Raheja Corp Homes flagship project.',
    images: ['https://www.raheja-viva.com/images/viva/viva-panoramic-aerial.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pirangut, Pune, Maharashtra" />
        <meta name="geo.position" content="18.5053;73.6856" />
        <meta name="ICBM" content="18.5053, 73.6856" />
        <JsonLd data={[websiteSchema(), localBusinessSchema()]} />
      </head>
      <body
        className="bg-[#FAF8F5] text-[#122A23] antialiased selection:bg-[#C5A059] selection:text-[#FAF8F5]"
        style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', 'Roboto', sans-serif" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
