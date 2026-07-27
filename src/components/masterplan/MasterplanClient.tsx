'use client';

import React, { useState } from 'react';
import { InteractiveGIS } from '@/components/masterplan/InteractiveGIS';
import { BookSiteVisitModal } from '@/components/common/BookSiteVisitModal';

export function MasterplanClient() {
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string | undefined>();

  return (
    <>
      <InteractiveGIS 
        onBookVisit={(plotNum) => {
          setSelectedPlot(plotNum);
          setIsSiteVisitOpen(true);
        }} 
      />

      <BookSiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
        plotNumber={selectedPlot}
      />
    </>
  );
}
