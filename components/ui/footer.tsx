"use client";

import React from "react";
import { ArrowRightIcon, Github, Download } from "lucide-react";
import { GradientBars } from "@/components/ui/gradient-bars-background";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-20 sm:pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden min-h-[500px] flex flex-col justify-between">
      
      {/* Background Vertical Bars */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <GradientBars
          numBars={22}
          gradientFrom="#2563eb"
          gradientTo="transparent"
          animationDuration={5}
        />
      </div>

      {/* Top Fade-In from Black Section */}
      <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-black to-transparent pointer-events-none z-1" />

      {/* Center Horizontal Blue Beam Glow (Subtle horizontal lens-flare ellipse) */}
      <div 
        className="absolute left-1/2 bottom-[25%] -translate-x-1/2 w-[600px] md:w-[1000px] h-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at center, rgba(37, 99, 235, 0.22) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 80%)`,
          filter: "blur(60px)",
          zIndex: 1,
        }}
      />

      {/* Giant DESKLY background text centered & cut off at the bottom */}
      <div className="absolute bottom-[-15%] md:bottom-[-20%] left-0 w-full overflow-hidden select-none pointer-events-none z-5 flex justify-center">
        <h2 className="text-[5rem] sm:text-[8rem] md:text-[14rem] lg:text-[20rem] font-bold tracking-[0.06em] text-white/[0.035] leading-none select-none font-header">
          DESKLY
        </h2>
      </div>

      {/* Foreground Content Container */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 grid grid-cols-12 gap-y-10 lg:gap-x-12">
        
        {/* Left Column: Title, Subtitle and Buttons */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 items-start justify-start">
          <div className="flex items-center gap-2.5">
            <img src="/app-logo.png" alt="Deskly Logo" className="h-6 w-auto" />
            <span className="text-white font-semibold text-sm tracking-widest font-sans uppercase">Deskly</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white max-w-md font-header leading-[1.25]">
            Academic Tracking Without the Bloat
          </h2>
          
          <p className="text-zinc-400 text-xs md:text-sm max-w-sm font-sans font-normal leading-relaxed">
            An unofficial, ultra-fast student dashboard and attendance companion built with Rust and Tauri. Zero lag, zero ads, and 100% offline-ready.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a 
              href="/download"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-[4px] px-5 py-2.5 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-lg shadow-blue-500/25 active:scale-95 transition-all cursor-pointer font-sans"
            >
              Get Started Free
              <Download className="w-3.5 h-3.5" />
            </a>
            
            <a 
              href="https://github.com/deskly-app/deskly"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 hover:bg-white/5 text-white rounded-[4px] px-5 py-2.5 text-xs font-medium tracking-wide flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer font-sans"
            >
              See Architecture
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Columns: Links Grid */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-wider uppercase font-semibold text-zinc-500 select-none font-sans">Navigation</span>
            <ul className="flex flex-col gap-2.5">
              <li><a href="/#features" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Features</a></li>
              <li><a href="/#comparison" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Comparison</a></li>
              <li><a href="/#integrations" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Integrations</a></li>
              <li><a href="/#themes" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Themes</a></li>
            </ul>
          </div>

          {/* Column 2: Downloads */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-wider uppercase font-semibold text-zinc-500 select-none font-sans">Downloads</span>
            <ul className="flex flex-col gap-2.5">
              <li><a href="/download" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Android APK (~10MB)</a></li>
              <li><a href="/download" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Windows Installer</a></li>
              <li><a href="/download" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">macOS (DMG)</a></li>
              <li><a href="/download" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Linux (AppImage / DEB)</a></li>
            </ul>
          </div>

          {/* Column 3: Open Source */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-wider uppercase font-semibold text-zinc-500 select-none font-sans">Open Source</span>
            <ul className="flex flex-col gap-2.5">
              <li><a href="https://github.com/deskly-app/deskly" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">GitHub Repository</a></li>
              <li><a href="https://github.com/deskly-app/deskly/releases" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Releases &amp; Changelog</a></li>
              <li><a href="https://github.com/deskly-app/deskly/issues" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">Report an Issue</a></li>
              <li><a href="https://github.com/deskly-app/deskly/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-xs transition-colors font-sans">MIT License</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* What Deskly is NOT (Facts & Disclaimers) */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 border-t border-white/5 pt-8 mt-12 md:mt-16 text-zinc-500 text-[11px] font-sans leading-relaxed grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <span className="font-semibold text-zinc-400 block mb-1">Not an Official App</span>
          Independent open-source project. Not affiliated with, endorsed by, or sponsored by Vellore Institute of Technology (VIT).
        </div>
        <div>
          <span className="font-semibold text-zinc-400 block mb-1">Not a Cloud Platform</span>
          Zero user accounts or cloud databases. Credentials and timetable data live strictly on the local device.
        </div>
        <div>
          <span className="font-semibold text-zinc-400 block mb-1">Read-Only Companion</span>
          Designed for tracking and calculation. Does not register courses, bid for FFCS, or alter university records.
        </div>
        <div>
          <span className="font-semibold text-zinc-400 block mb-1">Platform Support</span>
          Available for Android (7.0+), Windows (10/11), macOS (Apple Silicon &amp; Intel), and Linux. No iOS support.
        </div>
      </div>

      {/* Subfooter bottom line */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 border-t border-white/5 pt-6 md:pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 select-none">
        <span className="text-zinc-500 text-[10px] font-sans">
          &copy; {new Date().getFullYear()} Deskly Assistant. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a 
            href="https://github.com/deskly-app/deskly#security--privacy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-zinc-300 text-[10px] transition-colors font-sans"
          >
            Zero-Cloud Privacy Policy
          </a>
          <a 
            href="https://github.com/deskly-app/deskly/blob/master/LICENSE" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-zinc-300 text-[10px] transition-colors font-sans"
          >
            MIT License
          </a>
        </div>
      </div>

    </footer>
  );
}
