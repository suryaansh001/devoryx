'use client';

import { useState } from 'react';
import { SVGLoadingAnimation } from './svg-loading-animation';

export function LoadingTest() {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 50000 }}>
      <button
        onClick={() => setShowLoading(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        Test Loading Animation
      </button>

      {showLoading && (
        <SVGLoadingAnimation
          duration={3000}
          onComplete={() => {
            console.log('Test animation completed');
            setShowLoading(false);
          }}
        />
      )}
    </div>
  );
}
