'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Compass, ArrowRight, Download, Bot, ShieldCheck, MapPin, 
  Sparkles, Sun, Award, CheckCircle2, ChevronRight, Phone, Play, TreePine, Bird, Film, Video, Camera
} from 'lucide-react';
import { InteractiveGIS } from '@/components/masterplan/InteractiveGIS';
import { VillaInspirationStudio } from '@/components/studio/VillaInspirationStudio';
import { InvestmentCalculators } from '@/components/investment/InvestmentCalculators';
import { SignatureClubMicrosite } from '@/components/club/SignatureClubMicrosite';
import { NatureExperience } from '@/components/nature/NatureExperience';
import { LocationIntelligenceMap } from '@/components/location/LocationIntelligenceMap';
import { ReviewSlider } from '@/components/reviews/ReviewSlider';
import { BookSiteVisitModal } from '@/components/common/BookSiteVisitModal';
import { DownloadBrochureModal } from '@/components/common/DownloadBrochureModal';
import { YouTubeVideoModal } from '@/components/common/YouTubeVideoModal';
import { LuxuryImage } from '@/components/common/LuxuryImage';
import { SocialProof } from '@/components/common/SocialProof';
import { PlotAvailabilityBadge } from '@/components/common/PlotAvailabilityBadge';
import { SiloClusterLinker } from '@/components/seo/SiloClusterLinker';
import { VIVA_RERA_INFO } from '@/data/reraData';
import {
  CustomCursor,
  ScrollProgress,
  GoldParticles,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  MagneticButton,
  TiltCard,
  ParallaxLayer,
  RevealText,
  GlowCard,
  SlideIn,
  AmbientOrbs,
  HeroParallax,
  GoldDivider,
  FloatingBadge,
  ImageReveal,
  SparkleDot,
} from '@/components/animations/Motion';

const heroImages = [
  { src: '/images/viva/hero-estate-aerial.jpg',   alt: 'K Raheja Corp Viva — 100+ Acre Luxury Estate, Sahyadri Foothills, Pirangut West Pune', tag: 'THE ESTATE'      },
  { src: '/images/viva/hero-villa-enclaves.jpg',  alt: 'K Raheja Corp Viva — Premium Villa Enclaves & NA Plots, Twin Villas Pirangut',         tag: 'VILLA ENCLAVES'  },
  { src: '/images/viva/hero-clubhouse-night.jpg', alt: 'K Raheja Corp Viva — 20,000 Sq Ft Signature Clubhouse & Infinity Pool at Dusk',        tag: 'SIGNATURE CLUB'  },
  { src: '/images/viva/hero-infinity-pool.jpg',   alt: 'K Raheja Corp Viva — Infinity Pool with Sahyadri Mountain Views, West Pune',           tag: 'LIFESTYLE'       },
];

export default function HomePage() {
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedPlotForVisit, setSelectedPlotForVisit] = useState<string | undefined>();
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<{ url: string; title: string } | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroSlide(p => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleBookVisit = (plotNum?: string) => {
    setSelectedPlotForVisit(plotNum);
    setIsSiteVisitOpen(true);
  };

  const officialSiteGallery = [
    {
      title: "Ultra-Wide 360° Panoramic Valley & Estate Aerial",
      subtitle: "Breathtaking wide view of the 100+ acre estate nestled in Sahyadri green slopes",
      image: "/images/viva/viva-panoramic-aerial.jpg",
      category: "Panoramic Aerial"
    },
    {
      title: "Framed Forest View of Terracotta Villas",
      subtitle: "Naturally framed through native tree branches overlooking the Sahyadri valley enclaves",
      image: "/images/viva/viva-forest-framed.jpg",
      category: "Forest & Villas"
    },
    {
      title: "Sunset Deck & Terrace Pool Lounge",
      subtitle: "High-angle perspective of wooden lounge deck, swimming pool, and sports lawn",
      image: "/images/viva/viva-deck-sunset.jpg",
      category: "Clubhouse Sunset Deck"
    },
    {
      title: "25m Infinity Pool & Floodlit Sports Lawn (Dusk)",
      subtitle: "Dusk panorama over the elevated pool deck and lush green sports precinct",
      image: "/images/viva/viva-pool-dusk.jpg",
      category: "Dusk Pool Deck"
    },
    {
      title: "Indoor/Outdoor Hospitality Lounge & Corridor",
      subtitle: "Warm ambient LED trough lighting, polished travertine floor & bamboo screen patio",
      image: "/images/viva/viva-club-lounge.jpg",
      category: "Indoor Lounge"
    },
    {
      title: "Signature Clubhouse & Cascading Pool (Day View)",
      subtitle: "Exposed terracotta brick masonry, lattice jali screens & poolside sunbeds",
      image: "/images/viva/viva-infinity-pool-day.jpg",
      category: "Signature Clubhouse"
    },
    {
      title: "Illuminated Signature Club & Pool (Twilight View)",
      subtitle: "Breathtaking evening glow, underwater pool lights & grand lawn amphitheater",
      image: "/images/viva/viva-clubhouse-night.jpg",
      category: "Night Ambiance"
    },
    {
      title: "Luxury Villa Enclaves & Modern White Mansions",
      subtitle: "Architectural blend of modern white mansions & terracotta twin villas",
      image: "/images/viva/viva-villas-aerial.jpg",
      category: "Villa Enclaves"
    },
    {
      title: "Villa Balcony View & Blooming Yellow Gardens",
      subtitle: "View onto yellow Tabebuia blooms, manicured lawns & kids park",
      image: "/images/viva/viva-balcony-view.jpg",
      category: "Landscape & Flora"
    }
  ];

  return (
    <div className="space-y-8 pb-10 bg-[#FAF8F5] text-[#122A23]">
      <CustomCursor />
      <ScrollProgress />
      
      {/* SECTION 1: FULLSCREEN IMAGE HERO — WORLD CLASS */}
      <section className="relative h-screen min-h-[620px] flex flex-col justify-end overflow-hidden -mt-20 bg-[#050D09]">

        {/* ── Full-Bleed Image Carousel with Ken Burns ── */}
        {heroImages.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              opacity: idx === heroSlide ? 1 : 0,
              transition: 'opacity 1.5s cubic-bezier(0.4,0,0.2,1)',
              zIndex: idx === heroSlide ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={idx === 0}
              quality={95}
              style={{
                transform: idx === heroSlide ? 'scale(1.08)' : 'scale(1.0)',
                transition: 'transform 9s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
          </div>
        ))}

        {/* Gold Particles */}
        <GoldParticles count={8} />

        {/* Cinematic Overlay Stack */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#020907]/97 via-[#020907]/45 to-[#020907]/10" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#020907]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#020907]/35 via-transparent to-transparent" />
        <div className="noise-overlay z-[3]" />

        {/* ── Slide Indicators — top right ── */}
        <div className="absolute top-24 right-8 z-20 hidden lg:flex flex-col items-end space-y-3">
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A059]/90 font-bold">
            {heroImages[heroSlide].tag}
          </span>
          <div className="flex space-x-2 items-center">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className="rounded-full transition-all duration-500"
                style={{
                  width: idx === heroSlide ? '32px' : '7px',
                  height: '7px',
                  background: idx === heroSlide ? '#C5A059' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Hero Content — bottom-anchored ── */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-10 pt-16">
          <div className="max-w-6xl mx-auto">

            {/* Location Badge */}
            <FadeUp delay={0.1}>
              <FloatingBadge>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/20 backdrop-blur-md border border-[#C5A059]/55 text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.28em] mb-6">
                  <SparkleDot />
                  <span>K Raheja Corp Homes · Pirangut, West Pune · MahaRERA Approved</span>
                  <SparkleDot />
                </div>
              </FloatingBadge>
            </FadeUp>

            {/* World-Class Headline — speakable-title for Google Assistant Voice Search */}
            <h1 className="speakable-title font-serif font-bold text-white leading-[1.04] tracking-tight mb-5">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[82px]">
                <RevealText text="Where Nature" delay={0.15} />
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[82px]">
                <RevealText text="Meets Luxury" delay={0.30} />
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                <RevealText text="at K Raheja Corp Viva" delay={0.48} className="text-[#C5A059]" />
              </span>
            </h1>

            {/* World-class sub-copy — speakable-summary for Google Assistant Voice Search */}
            <FadeUp delay={0.62}>
              <p className="speakable-summary text-white/72 text-sm sm:text-[15px] max-w-2xl mb-7 leading-relaxed font-medium">
                K Raheja Corp Viva — set in the pristine Sahyadri foothills — a masterfully planned{' '}
                <span className="text-white/90 font-semibold">100+ acre luxury NA plotted estate</span> where 6,500+ trees
                breathe life into every morning. NA villa plots, twin villas &amp; townhouses,
                just{' '}
                <span className="text-[#C5A059] font-semibold">12 minutes from Chandani Chowk, Pirangut, West Pune</span>.
              </p>
            </FadeUp>

            {/* Social Proof — Live Viewer Count */}
            <FadeUp delay={0.68}>
              <div className="mb-5">
                <SocialProof />
              </div>
            </FadeUp>

            {/* Premium CTAs */}
            <FadeUp delay={0.74}>
              <div className="flex flex-wrap gap-3 mb-9">
                <MagneticButton>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="btn-magnetic flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/12 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest border border-white/28 hover:bg-white/20 hover:border-white/45 transition-all shadow-xl"
                  >
                    <Play className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                    <span>Watch Film</span>
                  </button>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/masterplan"
                    className="btn-magnetic flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] via-amber-500 to-[#C5A059] bg-[length:200%] hover:bg-right text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-[0_0_35px_rgba(197,160,89,0.55)] transition-all duration-500"
                  >
                    <Compass className="w-4 h-4" />
                    <span>GIS Masterplan</span>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <button
                    onClick={() => handleBookVisit()}
                    className="btn-magnetic flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0e2119] text-white font-bold text-xs uppercase tracking-widest border border-[#C5A059]/45 shadow-xl hover:border-[#C5A059] hover:bg-[#122A23] transition-all"
                  >
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                    <span>Book Private Tour</span>
                  </button>
                </MagneticButton>
              </div>
            </FadeUp>

            {/* Stats Strip */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { num: 6500, suffix: '+', label: 'Native Trees' },
                { num: 60,   suffix: '+', label: 'Bird Species' },
                { num: 40,   suffix: '+', label: 'Amenities' },
                { num: 100,  suffix: '+', label: 'Acres Estate' },
              ].map(s => (
                <StaggerItem key={s.label}>
                  <TiltCard className="bg-black/25 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 cursor-default hover:border-[#C5A059]/50 transition-colors duration-300">
                    <div className="font-serif text-2xl font-bold text-white">
                      <AnimatedCounter target={s.num} suffix={s.suffix} duration={1800} />
                    </div>
                    <div className="text-[11px] text-[#C5A059] font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Plot Availability Badge */}
            <FadeUp delay={0.8}>
              <PlotAvailabilityBadge />
            </FadeUp>

          </div>
        </div>

        {/* Scroll chevron */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce opacity-60">
          <div className="w-px h-7 bg-gradient-to-b from-transparent to-[#C5A059]" />
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

      </section>

      {/* SECTION: OFFICIAL SITE PHOTOGRAPHY & AERIAL GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SlideIn direction="left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em] block mb-1">AUTHENTIC SITE PHOTOGRAPHY</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#122A23] font-bold">Site & Aerial Gallery</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-[#122A23]">
              <Camera className="w-4 h-4 text-[#C5A059]" />
              <span>Captured at K Raheja Viva Site, Pirangut</span>
            </div>
          </div>
        </SlideIn>

        {/* Gallery Grid with stagger + ImageReveal wipe + 3D tilt */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officialSiteGallery.map((item, idx) => (
            <StaggerItem key={idx}>
              <GlowCard className="h-full">
                <ImageReveal delay={idx * 0.08} className="h-full">
                  <div
                    onClick={() => setSelectedGalleryImg({ url: item.image, title: item.title })}
                    className="glass-panel rounded-2xl overflow-hidden border border-[#C5A059]/30 cursor-pointer bg-white group flex flex-col justify-between h-full"
                  >
                    {/* Image with zoom on hover */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#122A23] img-zoom-wrap">
                      <LuxuryImage
                        src={item.image}
                        alt={item.title}
                        fallbackCategory="estate"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/80 via-transparent to-transparent group-hover:from-[#122A23]/40 transition-all duration-500" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#122A23] text-[#C5A059] text-[10px] font-bold border border-[#C5A059]/30">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg text-[#122A23] font-bold group-hover:text-[#C5A059] transition-colors leading-snug">{item.title}</h3>
                        <p className="text-xs text-[#5A6E67] mt-1 line-clamp-2">{item.subtitle}</p>
                      </div>
                      <div className="pt-3 text-[11px] font-bold text-[#C5A059] flex items-center space-x-1">
                        <span>Click to view full photo</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </ImageReveal>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 2: INTERACTIVE GIS MASTERPLAN PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SlideIn direction="right">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em] block mb-1">GIS-LEVEL REAL ESTATE EXPLORATION</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#122A23] font-bold">Interactive Estate Masterplan</h2>
            </div>
            <Link
              href="/masterplan"
              className="text-xs font-bold text-[#122A23] uppercase tracking-wider flex items-center space-x-1 hover:text-[#C5A059] transition-colors"
            >
              <span>Launch Fullscreen GIS Studio</span>
              <ChevronRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>
        </SlideIn>

        <FadeUp delay={0.1}>
          <InteractiveGIS onBookVisit={(plotNum) => handleBookVisit(plotNum)} />
        </FadeUp>
      </section>

      {/* SECTION 3: PLOT COLLECTIONS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">CURATED LIVING PORTFOLIO</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#122A23] font-bold">Distinguished Plot Collections</h2>
            <p className="text-xs text-[#5A6E67]">Select from specialized ecological orientation zones designed for maximum privacy, wind flow, and hill views.</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Collection 1 */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 border-[#C5A059]/30 glass-card-hover bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[16/10] w-full relative rounded-xl overflow-hidden bg-[#122A23]">
                <LuxuryImage
                  src="/images/viva/viva-forest-framed.jpg"
                  alt="Forest Facing Plot Collection"
                  fallbackCategory="nature"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#122A23] text-[#FAF8F5] text-[10px] font-bold">
                  400 - 600 Sq Yds
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#122A23] font-bold">Forest Facing Plots</h3>
              <p className="text-xs text-[#5A6E67]">Directly touching the reserved Sahyadri green belt with permanent forest views and zero future construction in front.</p>
            </div>
            <Link
              href="/masterplan?filter=Forest Facing"
              className="inline-flex items-center space-x-1 text-xs text-[#122A23] font-bold hover:text-[#C5A059] pt-2"
            >
              <span>Explore Available Forest Plots</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          </div>

          {/* Collection 2 */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 border-[#C5A059]/30 glass-card-hover bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[16/10] w-full relative rounded-xl overflow-hidden bg-[#122A23]">
                <LuxuryImage
                  src="/images/viva/viva-panoramic-aerial.jpg"
                  alt="Sahyadri Hill Facing Plots"
                  fallbackCategory="estate"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#122A23] text-[#FAF8F5] text-[10px] font-bold">
                  600 - 800 Sq Yds
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#122A23] font-bold">Sahyadri Crest Plots</h3>
              <p className="text-xs text-[#5A6E67]">Perched along the elevated ridge lines offering panoramic 360° views of the misty western hills during monsoon months.</p>
            </div>
            <Link
              href="/masterplan?filter=Hill Facing"
              className="inline-flex items-center space-x-1 text-xs text-[#122A23] font-bold hover:text-[#C5A059] pt-2"
            >
              <span>Explore Hill Crest Plots</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          </div>

          {/* Collection 3 */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 border-[#C5A059]/30 glass-card-hover bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[16/10] w-full relative rounded-xl overflow-hidden bg-[#122A23]">
                <LuxuryImage
                  src="/images/viva/viva-villas-aerial.jpg"
                  alt="Large Trophy Estate Plots"
                  fallbackCategory="villa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122A23]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#122A23] text-[#FAF8F5] text-[10px] font-bold">
                  800 - 1,200+ Sq Yds
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#122A23] font-bold">Grand Estate Collections</h3>
              <p className="text-xs text-[#5A6E67]">Sprawling estate land designed for multi-generational mansions with private pool lawns, subterranean garages, and staff quarters.</p>
            </div>
            <Link
              href="/masterplan?filter=Large Estate"
              className="inline-flex items-center space-x-1 text-xs text-[#122A23] font-bold hover:text-[#C5A059] pt-2"
            >
              <span>Explore Grand Estates</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4: VILLA INSPIRATION STUDIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VillaInspirationStudio onBookConsultation={() => handleBookVisit()} />
      </section>

      {/* SECTION 5: SIGNATURE CLUB MICROSITE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignatureClubMicrosite onBookVisit={() => handleBookVisit()} />
      </section>

      {/* SECTION 6: NATURE & MICRO-CLIMATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NatureExperience />
      </section>

      {/* SECTION 7: INVESTMENT & ROI CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InvestmentCalculators />
      </section>

      {/* SECTION 8: LOCATION & CONNECTIVITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationIntelligenceMap />
      </section>

      {/* SECTION 8.5: REVIEWS */}
      <section className="w-full bg-[#FAF8F5]">
        <ReviewSlider />
      </section>

      {/* SECTION 9: MAHARERA TRUST & DISCLOSURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 text-center space-y-4 shadow-xl">
          <ShieldCheck className="w-12 h-12 text-[#C5A059] mx-auto" />
          
          <h2 className="font-serif text-3xl sm:text-4xl text-[#122A23] font-bold">
            100% NA Clear Title & MahaRERA Sanctioned
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6E67] max-w-2xl mx-auto leading-relaxed font-medium">
            K Raheja Viva is fully approved by PMRDA with 100% Non-Agricultural (NA) land title clearance, environmental approvals, and underground utility infrastructure. Pre-approved for home loans with India's leading banks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#122A23]">
            {VIVA_RERA_INFO.approvedSanctions.slice(0, 3).map((sanc, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white border border-[#C5A059]/30 shadow-sm">
                ✓ {sanc}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={() => handleBookVisit()}
              className="px-8 py-4 rounded-full bg-[#122A23] text-[#FAF8F5] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl hover:bg-[#1A3D33]"
            >
              Schedule Private Estate Tour Today
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Image Preview Modal */}
      {selectedGalleryImg && (
        <div 
          onClick={() => setSelectedGalleryImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070C0B]/90 backdrop-blur-xl animate-in fade-in duration-200 cursor-pointer"
        >
          <div className="relative max-w-5xl w-full aspect-[16/10] rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-2xl bg-[#070C0B]">
            <LuxuryImage
              src={selectedGalleryImg.url}
              alt={selectedGalleryImg.title}
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#C5A059]/30">
              <div className="font-serif text-lg text-[#122A23] font-bold">{selectedGalleryImg.title}</div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">HAVE QUESTIONS?</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#122A23] font-bold">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {[
            {
              q: "What is the location of K Raheja Corp Viva?",
              a: "K Raheja Corp Viva is located in Pirangut, West Pune, beautifully nestled in the pristine Sahyadri foothills, just 12 minutes away from Chandani Chowk."
            },
            {
              q: "What types of properties are available in Phase 1?",
              a: "Phase 1 offers a curated selection of NA Villa Plots, ranging from 400 Sq Yds to 1,200+ Sq Yds, including Forest Facing, Hill Crest, and Grand Estate collections."
            },
            {
              q: "Are the land titles clear and is the project RERA approved?",
              a: "Yes, the project has 100% Non-Agricultural (NA) clear titles and is fully sanctioned by MahaRERA and PMRDA. It is also pre-approved for home loans by leading banks."
            },
            {
              q: "What amenities are included in the estate?",
              a: "The estate features 40+ world-class amenities, including a 20,000 Sq Ft Signature Clubhouse, a 25m infinity pool, sports lawns, indoor lounges, and extensive nature trails."
            },
            {
              q: "Is there a dedicated green zone within the project?",
              a: "Absolutely. The 100+ acre luxury estate boasts over 6,500 native trees and supports more than 60 bird species, providing an authentic ecological living experience."
            },
            {
              q: "Can I customize my villa design?",
              a: "While we provide comprehensive Villa Inspiration guidelines and templates to maintain the aesthetic integrity of the estate, buyers have the flexibility to design their dream homes within those parameters."
            },
            {
              q: "How far is the project from major IT hubs in Pune?",
              a: "K Raheja Corp Viva is strategically located in West Pune, offering excellent connectivity to major IT parks in Hinjawadi and Baner, typically within a 30-40 minute drive."
            },
            {
              q: "How can I schedule a site visit?",
              a: "You can schedule a private site visit by clicking on the 'Book Private Tour' button, using our sticky CTA bar, or reaching out via our WhatsApp widget for instant assistance."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-[#C5A059]/20 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#122A23] font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-[#5A6E67] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JSON-LD for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the location of K Raheja Corp Viva?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "K Raheja Corp Viva is located in Pirangut, West Pune, beautifully nestled in the pristine Sahyadri foothills, just 12 minutes away from Chandani Chowk."
                }
              },
              {
                "@type": "Question",
                "name": "What types of properties are available in Phase 1?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Phase 1 offers a curated selection of NA Villa Plots, ranging from 400 Sq Yds to 1,200+ Sq Yds, including Forest Facing, Hill Crest, and Grand Estate collections."
                }
              },
              {
                "@type": "Question",
                "name": "Are the land titles clear and is the project RERA approved?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the project has 100% Non-Agricultural (NA) clear titles and is fully sanctioned by MahaRERA and PMRDA. It is also pre-approved for home loans by leading banks."
                }
              },
              {
                "@type": "Question",
                "name": "What amenities are included in the estate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The estate features 40+ world-class amenities, including a 20,000 Sq Ft Signature Clubhouse, a 25m infinity pool, sports lawns, indoor lounges, and extensive nature trails."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a dedicated green zone within the project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. The 100+ acre luxury estate boasts over 6,500 native trees and supports more than 60 bird species, providing an authentic ecological living experience."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize my villa design?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While we provide comprehensive Villa Inspiration guidelines and templates to maintain the aesthetic integrity of the estate, buyers have the flexibility to design their dream homes within those parameters."
                }
              },
              {
                "@type": "Question",
                "name": "How far is the project from major IT hubs in Pune?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "K Raheja Corp Viva is strategically located in West Pune, offering excellent connectivity to major IT parks in Hinjawadi and Baner, typically within a 30-40 minute drive."
                }
              },
              {
                "@type": "Question",
                "name": "How can I schedule a site visit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can schedule a private site visit by clicking on the 'Book Private Tour' button, using our sticky CTA bar, or reaching out via our WhatsApp widget for instant assistance."
                }
              }
            ]
          })
        }}
      />

      {/* Topic Silo Cluster Internal Link Graph */}
      <SiloClusterLinker currentSiloId="sizes" currentUrl="/" />

      {/* Global Modals */}
      <BookSiteVisitModal 
        isOpen={isSiteVisitOpen} 
        onClose={() => setIsSiteVisitOpen(false)} 
        plotNumber={selectedPlotForVisit}
      />

      <DownloadBrochureModal 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
      />

      <YouTubeVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="tMMs4PBNG-4"
        title="K Raheja Viva Pirangut - Project & Site Walkthrough"
      />

    </div>
  );
}
