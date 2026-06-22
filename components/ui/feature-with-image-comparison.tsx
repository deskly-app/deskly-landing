"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

export default function FeatureWithImageComparison() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-48 relative w-full overflow-hidden bg-black">
      
      {/* Background Radial Glow (Highly visible horizontal lens-flare ellipse) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37, 99, 235, 0.24) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 85%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">
        
        {/* Title/Header Block */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div>
            <Badge variant="outline" className="text-blue-400 border-blue-500/20 bg-blue-500/5 px-3 py-1 font-sans text-xs tracking-wider uppercase">
              UI Showcase
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white font-header leading-[1.2]">
            Designed for Day and Night
          </h2>
          <p className="max-w-2xl text-zinc-400 text-sm md:text-base font-sans font-normal leading-relaxed px-2">
            Slide to compare Deskly's immersive dark mode and clean, vibrant light mode desktop dashboard layouts.
          </p>
        </div>

        {/* Browser Mockup Wrapper */}
        <div className="w-full max-w-[1250px] mx-auto mt-8 md:mt-10 lg:mt-12">
          <div className="bg-[#0b0f19] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Mac Browser Frame Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1220] border-b border-white/5 select-none">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              {/* URL bar */}
              <div className="flex-1 max-w-xs mx-auto bg-[#070a12] rounded-md py-1 px-3 text-center text-[10px] text-white/40 font-mono tracking-wide border border-white/5 select-none">
                deskly.app
              </div>
              {/* Actions Placeholder */}
              <div className="flex items-center gap-2 text-white/30">
              </div>
            </div>

            {/* Interactive Image Comparison Container */}
            <div
              className="relative aspect-video w-full h-full overflow-hidden select-none bg-zinc-950 cursor-ew-resize"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onMouseLeave={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              {/* Bottom Image (Before - Left Side) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/main.png"
                  alt="Deskly Dark Mode Theme"
                  fill
                  sizes="(max-w-7xl) 100vw"
                  priority
                  className="object-cover select-none pointer-events-none"
                />
                
                {/* Floating Left Label */}
                <div className="absolute left-6 bottom-6 z-10 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-[4px] text-[10px] tracking-widest uppercase font-semibold text-zinc-400 select-none pointer-events-none">
                  Dark Mode
                </div>
              </div>

              {/* Top Image (After - Right Side, Clipped from left) */}
              <div 
                className="absolute inset-0 w-full h-full z-10"
                style={{
                  clipPath: `inset(0 0 0 ${inset}%)`,
                }}
              >
                <Image
                  src="/light.png"
                  alt="Deskly Light Mode Theme"
                  fill
                  sizes="(max-w-7xl) 100vw"
                  priority
                  className="object-cover select-none pointer-events-none"
                />

                {/* Floating Right Label */}
                <div className="absolute right-6 bottom-6 z-20 bg-blue-600/90 backdrop-blur-md border border-blue-500/20 px-3 py-1.5 rounded-[4px] text-[10px] tracking-widest uppercase font-semibold text-white select-none pointer-events-none">
                  Light Mode
                </div>
              </div>

              {/* Slider Handle Divider */}
              <div
                className="absolute h-full w-0.5 bg-blue-500/80 z-20 top-0 select-none pointer-events-none"
                style={{
                  left: `${inset}%`,
                }}
              >
                {/* Handle Button */}
                <button
                  className="bg-blue-600 hover:bg-blue-500 rounded-full hover:scale-110 active:scale-95 shadow-lg shadow-blue-500/35 border border-blue-400/30 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 pointer-events-auto cursor-ew-resize flex justify-center items-center text-white"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
