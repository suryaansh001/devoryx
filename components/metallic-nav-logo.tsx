'use client';

import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

export function MetallicNavLogo() {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadLogo() {
      try {
        const response = await fetch('/images/cliste-logo.png');
        const blob = await response.blob();
        const file = new File([blob], 'cliste-logo.png', { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error('Error loading logo:', err);
      }
    }

    loadLogo();
  }, []);

  if (!imageData) {
    return <div className="w-12 h-12 md:w-16 md:h-16" />;
  }

  return (
    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
      <MetallicPaint
        imageData={imageData}
        params={{
          edge: 2,
          patternBlur: 0.005,
          patternScale: 2,
          refraction: 0.015,
          speed: 0.3,
          liquid: 0.07
        }}
      />
    </div>
  );
}
