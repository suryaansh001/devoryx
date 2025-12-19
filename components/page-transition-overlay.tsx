'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MetallicLogoDisplay } from './metallic-logo-display';

export function PageTransitionOverlay() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && !link.target && !link.hasAttribute('data-no-transition')) {
        const href = link.getAttribute('href');
        
        // Check if it's an internal link
        if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
          e.preventDefault();
          setIsTransitioning(true);

          // Navigate after showing the overlay
          const timer = setTimeout(() => {
            router.push(href);
            const hideTimer = setTimeout(() => {
              setIsTransitioning(false);
            }, 3000);

            return () => clearTimeout(hideTimer);
          }, 100);

          return () => clearTimeout(timer);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [router]);

  if (!isTransitioning) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <MetallicLogoDisplay />
    </div>
  );
}
