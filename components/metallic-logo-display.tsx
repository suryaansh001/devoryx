'use client';

import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

export function MetallicLogoDisplay() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false);
      }
    }

    loadLogo();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-white">Loading metallic logo...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <MetallicPaint
        imageData={imageData ?? new ImageData(1, 1)}
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
