import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema, organizationSchema, localBusinessSchema, speakableSchema, aggregateRatingSchema, eventSchema, videoObjectSchema } from '@/lib/seo';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export const viewport: Viewport = {
  themeColor: '#122A23',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'K Raheja Corp Viva Pirangut | Luxury NA Plots & Villa Community West Pune',
    template: '%s | K Raheja Corp Viva — Luxury Plots West Pune',
  },
  description: 'K Raheja Corp Viva — 100+ acre premium NA plotted development and villa community in Pirangut, West Pune. Low-density master plan, 40+ lifestyle amenities, Signature Clubhouse, and MahaRERA approved plots. 12 mins from Chandani Chowk.',
  keywords: [
    'K Raheja Corp Viva', 'K Raheja Viva', 'Raheja Viva Pune', 'K Raheja Viva Pirangut',
    'NA Plots Pune', 'NA Bungalow Plots Pune', 'Villa Plots Pune', 'Luxury Plots West Pune',
    'Gated Community Plots Pune', 'Plots in Pirangut', 'Pirangut Real Estate',
    'K Raheja Corp Homes', 'Plotted Development Pune', 'Luxury Plotted Township',
    'MahaRERA Approved Plots', 'West Pune Property', 'Buy Plot Pune 2025',
    'NA Plot Investment Pune', 'Pirangut NA Plots', 'K Raheja Corp',
  ].join(', '),
  metadataBase: new URL('https://www.krahejacorpviva.com'),
  alternates: {
    canonical: 'https://www.krahejacorpviva.com',
    languages: {
      'en-IN': 'https://www.krahejacorpviva.com',
      'en-US': 'https://www.krahejacorpviva.com',
      'hi': 'https://www.krahejacorpviva.com/hi',
      'mr': 'https://www.krahejacorpviva.com/hi',
      'x-default': 'https://www.krahejacorpviva.com',
    },
    types: {
      'application/rss+xml': 'https://www.krahejacorpviva.com/rss.xml',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.krahejacorpviva.com',
    title: 'K Raheja Corp Viva Pirangut | Luxury NA Plots & Villa Community West Pune',
    description: 'Premium NA villa plots & luxury community in 100+ acre estate, Pirangut, West Pune. 40+ amenities, Sahyadri views, MahaRERA approved.',
    siteName: 'K Raheja Corp Viva — K Raheja Corp Homes',
    images: [{
      url: 'https://www.krahejacorpviva.com/images/viva/viva-panoramic-aerial.jpg',
      width: 1200,
      height: 630,
      alt: 'K Raheja Corp Viva Pirangut — Luxury Plotted Development West Pune',
    }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K Raheja Corp Viva | Luxury NA Plots West Pune',
    description: 'Premium NA villa plots in Pirangut, West Pune. K Raheja Corp Homes flagship project.',
    images: ['https://www.krahejacorpviva.com/images/viva/viva-panoramic-aerial.jpg'],
    site: '@KRahejaCorpViva',
    creator: '@KRahejaCorpViva',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'ahPfnhhz_unmAEMLFUhCaspu9aTN8gCKU-Um9RXZLdk',
    other: {
      'msvalidate.01': 'BING_VERIFICATION_CODE',
      'yandex-verification': 'YANDEX_VERIFICATION_CODE',
      'baidu-site-verification': 'BAIDU_VERIFICATION_CODE',
    },
  },
  other: {
    // ─── Geo Tags ────────────────────────────────
    'geo.region': 'IN-MH',
    'geo.placename': 'Pirangut, Pune, Maharashtra, India',
    'geo.position': '18.5053;73.6856',
    'ICBM': '18.5053, 73.6856',
    // ─── Dublin Core (Yahoo, Ask, global crawlers) ────────────────────────
    'DC.title': 'K Raheja Corp Viva — Luxury NA Plots & Villa Community, Pirangut Pune',
    'DC.subject': 'Luxury NA Plots, Villa Plots, Plotted Development, West Pune, Pirangut, MahaRERA',
    'DC.description': 'Premium NA villa plots in 100+ acre gated estate, Pirangut, West Pune with Sahyadri mountain views.',
    'DC.publisher': 'K Raheja Corp Homes',
    'DC.contributor': 'K Raheja Corp Homes',
    'DC.language': 'en-IN',
    'DC.coverage': 'Pirangut, Pune, Maharashtra, India',
    'DC.rights': 'Copyright 2025 K Raheja Corp Homes. All rights reserved.',
    // ─── Global Search Engine Webmaster Verification ─────────────────────
    'google-site-verification': 'ahPfnhhz_unmAEMLFUhCaspu9aTN8gCKU-Um9RXZLdk',
    'msvalidate.01': 'BING_VERIFICATION_CODE',
    'yandex-verification': 'YANDEX_VERIFICATION_CODE',
    'baidu-site-verification': 'BAIDU_VERIFICATION_CODE',
    // ─── Apple / Pinterest ────────────────────────────────────────────────
    'apple-mobile-web-app-title': 'K Raheja Corp Viva',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'application-name': 'K Raheja Corp Viva',
    // ─── Rating & Classification ──────────────────────────────────────────
    'rating': 'general',
    'language': 'English',
    'revisit-after': '3 days',
    'category': 'Real Estate, Luxury Property, NA Plots, Villa Plots',
    'classification': 'Real Estate Developer',
    'coverage': 'India',
    'distribution': 'Global',
    'target': 'all',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" dir="ltr">
      <head>
        {/* ─── Google Site Verification (Search Console Hardened) ─── */}
        <meta name="google-site-verification" content="ahPfnhhz_unmAEMLFUhCaspu9aTN8gCKU-Um9RXZLdk" />
        {/* ─── Google Font & Resource Preloading — Core Web Vitals ─── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* ─── LCP Hero Image Preload — Core Web Vitals ─── */}
        <link
          rel="preload"
          as="image"
          href="/images/viva/hero-estate-aerial.jpg"
          type="image/jpeg"
        />
        {/* ─── Global JSON-LD Schema Stack ────────────────── */}
        <JsonLd data={[
          websiteSchema(),
          organizationSchema(),
          localBusinessSchema(),
          speakableSchema('/'),
          aggregateRatingSchema(),
          eventSchema(),
          videoObjectSchema({
            name: 'K Raheja Corp Viva Pirangut — Project & Site Walkthrough',
            description: 'Official site walkthrough of K Raheja Corp Viva — a 100+ acre luxury NA plotted estate in Pirangut, West Pune. Explore the Signature Clubhouse, villa enclaves, Sahyadri views and 40+ amenities.',
            uploadDate: '2024-12-01',
            duration: 'PT3M45S',
            embedUrl: 'https://www.youtube.com/embed/tMMs4PBNG-4',
            contentUrl: 'https://www.youtube.com/watch?v=tMMs4PBNG-4',
            path: '/',
          }),
        ]} />
      </head>
      <body
        className="bg-[#FAF8F5] text-[#122A23] antialiased selection:bg-[#C5A059] selection:text-[#FAF8F5]"
        style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', 'Roboto', sans-serif" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
    </html>
  );
}
