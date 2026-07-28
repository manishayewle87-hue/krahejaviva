'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookSiteVisitModal } from '@/components/common/BookSiteVisitModal';
import { DownloadBrochureModal } from '@/components/common/DownloadBrochureModal';
import { AIPropertyConcierge } from '@/components/ai/AIPropertyConcierge';
import { WhatsAppWidget } from '@/components/common/WhatsAppWidget';
import { PropertyChatbot } from '@/components/ai/PropertyChatbot';
import { ExitIntentPopup } from '@/components/common/ExitIntentPopup';
import { PriceAlertBanner } from '@/components/common/PriceAlertBanner';
import { StickyCtaBar } from '@/components/common/StickyCtaBar';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isAIConciergeOpen, setIsAIConciergeOpen] = useState(false);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedPlotForVisit, setSelectedPlotForVisit] = useState<string | undefined>();

  const handleOpenSiteVisit = (plotNumber?: string) => {
    setSelectedPlotForVisit(plotNumber);
    setIsSiteVisitOpen(true);
  };

  return (
    <>
      <Header
        onOpenAIConcierge={() => setIsAIConciergeOpen(true)}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
      />

      <main className="min-h-screen pt-20">
        {children}
      </main>

      <Footer />

      <BookSiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
        plotNumber={selectedPlotForVisit}
      />
      <DownloadBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
      <AIPropertyConcierge
        isOpen={isAIConciergeOpen}
        onClose={() => setIsAIConciergeOpen(false)}
        onSelectPlot={(plotId) => {
          window.location.href = `/masterplan?plot=${plotId}`;
        }}
      />
      <WhatsAppWidget />
      <PropertyChatbot />
      <ExitIntentPopup />
      <PriceAlertBanner />
      <StickyCtaBar />
    </>
  );
}
