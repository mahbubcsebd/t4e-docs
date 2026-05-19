'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function TrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Ensuring HubSpot tracking is triggered on route changes for SPA navigation
    if (typeof window !== 'undefined' && window._hsq) {
      const url = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
      window._hsq.push(['setPath', url]);
      window._hsq.push(['trackPageView']);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function HubSpotRouteTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerContent />
    </Suspense>
  );
}
