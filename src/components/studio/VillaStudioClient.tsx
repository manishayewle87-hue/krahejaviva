'use client';

import React, { useState } from 'react';
import { VillaInspirationStudio } from '@/components/studio/VillaInspirationStudio';
import { BookSiteVisitModal } from '@/components/common/BookSiteVisitModal';

export function VillaStudioClient() {
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);

  return (
    <>
      <VillaInspirationStudio onBookConsultation={() => setIsSiteVisitOpen(true)} />
      <BookSiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
      />
    </>
  );
}
