"use client";

import React from "react";
import { PlusIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="relative w-full py-20 sm:py-28 md:py-36 lg:py-48 bg-black overflow-hidden">
      
      {/* Background Radial Glow (Highly visible horizontal lens-flare ellipse) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37, 99, 235, 0.20) 0%, rgba(29, 78, 216, 0.06) 50%, transparent 85%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">
        
        {/* Retro Grid Styled Box */}
        <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-between gap-y-8 border-y border-white/10 bg-[radial-gradient(45%_80%_at_50%_0%,rgba(37,99,235,0.08),transparent)] px-8 py-14">
          
          {/* Plus icons on the corners */}
          <PlusIcon
            className="absolute top-[-12px] left-[-12px] z-10 size-6 text-blue-500/50"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute top-[-12px] right-[-12px] z-10 size-6 text-blue-500/50"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute bottom-[-12px] left-[-12px] z-10 size-6 text-blue-500/50"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute right-[-12px] bottom-[-12px] z-10 size-6 text-blue-500/50"
            strokeWidth={1}
          />

          {/* Border grid guides */}
          <div className="-inset-y-8 pointer-events-none absolute left-0 w-px border-l border-white/10" />
          <div className="-inset-y-8 pointer-events-none absolute right-0 w-px border-r border-white/10" />
          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-white/5" />

          {/* Text Content */}
          <div className="space-y-3 text-center px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-header">
              Academic Tracking Without the Bloat
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-sans font-normal leading-relaxed">
              Zero lag. Zero ads. 100% offline-ready. Built with pure Rust for students who value instant speed and zero tracking.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-white/10 hover:bg-white/5 text-white rounded-[4px] px-6 py-2 transition-all active:scale-95 cursor-pointer font-sans"
              asChild
            >
              <a 
                href="https://github.com/deskly-app/deskly"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Architecture
              </a>
            </Button>
            <Button 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-[4px] px-6 py-2 transition-all active:scale-95 cursor-pointer font-sans"
              asChild
            >
              <a href="/download">
                Download Free <Download className="size-4 ml-1.5" />
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
