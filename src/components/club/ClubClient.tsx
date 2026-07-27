'use client';

import React, { useState } from 'react';
import { SignatureClubMicrosite } from '@/components/club/SignatureClubMicrosite';
import { BookSiteVisitModal } from '@/components/common/BookSiteVisitModal';

export function ClubClient() {
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);

  return (
    <>
      <SignatureClubMicrosite onBookVisit={() => setIsSiteVisitOpen(true)} />
      <BookSiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
      />
    </>
  );
}
