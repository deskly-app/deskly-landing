import React from 'react';

interface GradientBarsProps {
  numBars?: number;
  gradientFrom?: string;
  gradientTo?: string;
  animationDuration?: number;
  className?: string;
}

const GradientBars: React.FC<GradientBarsProps> = ({
  numBars = 22,
  gradientFrom = '#2563eb',
  gradientTo = 'transparent',
  animationDuration = 4,
  className = '',
}) => {
  const calculateOpacity = (index: number, total: number) => {
    const position = index / (total - 1);
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    
    // Base opacity: center bars are more prominent
    const baseOpacity = 0.12 + (1 - distanceFromCenter) * 0.14; // 0.12 to 0.26
    
    // Add distinct vertical banding using a sine wave variation
    const variation = Math.sin(index * 1.6) * 0.08;
    
    return Math.max(0.04, Math.min(0.35, baseOpacity + variation));
  };

  return (
    <>
      <style>{`
        @keyframes pulseOpacity {
          0% { opacity: var(--min-opacity); }
          100% { opacity: var(--max-opacity); }
        }
      `}</style>
      
      <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
        <div 
          className="flex h-full w-full"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {Array.from({ length: numBars }).map((_, index) => {
            const baseOpacity = calculateOpacity(index, numBars);
            return (
              <div
                key={index}
                style={{
                  flex: `1 0 calc(100% / ${numBars})`,
                  maxWidth: `calc(100% / ${numBars})`,
                  height: '100%',
                  background: `linear-gradient(to bottom, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                  opacity: baseOpacity.toFixed(5),
                  transition: 'opacity 0.5s ease-in-out',
                  animation: `pulseOpacity ${animationDuration}s ease-in-out infinite alternate`,
                  animationDelay: `${index * 0.2}s`,
                  outline: '1px solid rgba(0, 0, 0, 0)',
                  boxSizing: 'border-box',
                  // @ts-ignore
                  '--min-opacity': (baseOpacity * 0.5).toFixed(5),
                  // @ts-ignore
                  '--max-opacity': (baseOpacity * 1.3).toFixed(5),
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

interface ComponentProps {
  numBars?: number;
  gradientFrom?: string;
  gradientTo?: string;
  animationDuration?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function Component({
  numBars = 22,
  gradientFrom = '#2563eb',
  gradientTo = 'transparent',
  animationDuration = 4,
  backgroundColor = '#000000',
  children,
}: ComponentProps) {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Central radial glow from top center to match the reference image (offset above screen to avoid sharp point) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% -20%, rgba(255, 254, 245, 0.22) 0%, rgba(147, 197, 253, 0.08) 45%, transparent 75%),
            radial-gradient(circle at 50% -15%, rgba(37, 99, 235, 0.38) 0%, rgba(29, 78, 216, 0.18) 50%, rgba(3, 7, 18, 0) 85%)
          `,
          zIndex: 1,
        }}
      />

      <GradientBars
        numBars={numBars}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        animationDuration={animationDuration}
      />
      
      {/* Bottom fade overlay to blend the background smoothly into the next section */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[35%] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${backgroundColor} 100%)`,
          zIndex: 2,
        }}
      />
      
      {children && (
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
          {children}
        </div>
      )}
    </div>
  );
}

export { Component, GradientBars };