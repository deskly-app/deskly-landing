"use client";

import React, { useState, useEffect } from "react";
import Component from "@/components/ui/gradient-bars-background";
import Footer from "@/components/ui/footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { 
  Download, 
  Apple, 
  Monitor, 
  Terminal, 
  CheckCircle2, 
  Shield, 
  Info, 
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu
} from "lucide-react";

type OS = "mac" | "windows" | "linux" | "unknown";

interface ReleaseFile {
  name: string;
  size: string;
  checksum: string;
  url: string;
  description: string;
}

const OS_DATA: Record<Exclude<OS, "unknown">, {
  title: string;
  icon: any;
  recommendation: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  installCommand?: string;
  files: ReleaseFile[];
}> = {
  mac: {
    title: "macOS",
    icon: Apple,
    recommendation: "Compatible with macOS 12 (Monterey) or later",
    primaryButtonText: "Download for Apple Silicon (M1/M2/M3)",
    primaryButtonUrl: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/Deskly_1.2.0_aarch64.dmg",
    installCommand: "brew install vishal-770/tap/deskly",
    files: [
      {
        name: "Deskly_1.2.0_aarch64.dmg",
        size: "34.2 MB",
        checksum: "sha256-4c405a2e99d79907c08de5718a2b53c1553c11a681df5dfb90c1f1c71286c123",
        url: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/Deskly_1.2.0_aarch64.dmg",
        description: "Apple Silicon (M1/M2/M3 chips)"
      },
      {
        name: "Deskly_1.2.0_x64.dmg",
        size: "36.8 MB",
        checksum: "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        url: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/Deskly_1.2.0_x64.dmg",
        description: "Intel Processors (Core i5/i7/i9)"
      }
    ]
  },
  windows: {
    title: "Windows",
    icon: Monitor,
    recommendation: "Compatible with Windows 10 / 11 (64-bit)",
    primaryButtonText: "Download Windows Installer (.msi)",
    primaryButtonUrl: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/Deskly_1.2.0_x64_en-US.msi",
    installCommand: "winget install Deskly",
    files: [
      {
        name: "Deskly_1.2.0_x64_en-US.msi",
        size: "28.5 MB",
        checksum: "sha256-e910543e11079907c08de5718a2b53c1553c11a681df5dfb90c1f1c71286c12f",
        url: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/Deskly_1.2.0_x64_en-US.msi",
        description: "Standard MSI Installer (Recommended)"
      },
      {
        name: "Deskly_1.2.0_x64-setup.exe",
        size: "29.1 MB",
        checksum: "sha256-b0a701dfc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8551a3",
        url: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/Deskly_1.2.0_x64-setup.exe",
        description: "Alternative Setup Executable"
      }
    ]
  },
  linux: {
    title: "Linux",
    icon: Terminal,
    recommendation: "Compatible with Ubuntu, Debian, Arch Linux & Fedora",
    primaryButtonText: "Download Linux AppImage",
    primaryButtonUrl: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/deskly_1.2.0_amd64.AppImage",
    installCommand: "yay -S deskly-bin",
    files: [
      {
        name: "deskly_1.2.0_amd64.AppImage",
        size: "32.4 MB",
        checksum: "sha256-a0f701cfc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855c42",
        url: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/deskly_1.2.0_amd64.AppImage",
        description: "Universal Portable AppImage (Executable)"
      },
      {
        name: "deskly_1.2.0_amd64.deb",
        size: "25.9 MB",
        checksum: "sha256-fc405a2e99d79907c08de5718a2b53c1553c11a681df5dfb90c1f1c71286c12a",
        url: "https://github.com/Vishal-770/deskly-tauri/releases/latest/download/deskly_1.2.0_amd64.deb",
        description: "Debian/Ubuntu Installer Package"
      }
    ]
  }
};

export default function DownloadPage() {
  const [detectedOS, setDetectedOS] = useState<OS>("unknown");
  const [activeTab, setActiveTab] = useState<OS>("windows");

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    let os: OS = "unknown";
    if (ua.indexOf("win") !== -1) {
      os = "windows";
    } else if (ua.indexOf("mac") !== -1) {
      os = "mac";
    } else if (ua.indexOf("linux") !== -1 || ua.indexOf("x11") !== -1) {
      os = "linux";
    }
    setDetectedOS(os);
    if (os !== "unknown") {
      setActiveTab(os);
    } else {
      setActiveTab("windows");
    }
  }, []);

  const activeOSData = OS_DATA[activeTab as Exclude<OS, "unknown">] || OS_DATA.windows;

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden flex flex-col justify-start">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden">
        <Component
          numBars={22}
          gradientFrom="#2563eb"
          gradientTo="transparent"
          backgroundColor="#000000"
          animationDuration={5}
        />
      </div>

      {/* Navbar / Header */}
      <header className="absolute top-0 left-0 w-full z-50">
        <ScrollReveal duration={1000} delay={100} margin="0px">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 cursor-pointer">
              <img src="/app-logo.png" alt="Deskly Logo" className="h-7 md:h-8 w-auto" />
              <span className="text-white font-semibold text-sm md:text-base tracking-wider font-sans">Deskly</span>
            </a>

            {/* Navigation back */}
            <a
              href="/"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors font-sans"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </a>
          </div>
        </ScrollReveal>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-32 md:pt-40 pb-20 max-w-7xl mx-auto px-5 md:px-8 w-full flex flex-col items-center">
        
        {/* Title & Headline */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-400 mb-6 tracking-wide select-none font-sans uppercase">
              <Sparkles className="w-3 h-3" />
              Latest Stable Release — v1.2.0
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-header leading-[1.15]">
              Get VTOP Student Client, Reimagined
            </h1>
            <p className="text-zinc-400 text-sm md:text-base font-sans font-normal leading-relaxed max-w-xl mx-auto">
              Download the secure hardware-keyring integrated Tauri desktop client. Auto-login classifiers, attendance statistics, mess schedules, all rendered native and offline.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Highlight Card (OS Specific recommendation) */}
        {detectedOS !== "unknown" && (
          <ScrollReveal delay={100}>
            <div className="w-full max-w-3xl mb-12 p-6 rounded-lg bg-gradient-to-r from-blue-950/20 to-zinc-900/40 border border-blue-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/10">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="p-3.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {React.createElement(OS_DATA[detectedOS as Exclude<OS, "unknown">].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider font-sans mb-1">Auto-Detected System</div>
                  <h3 className="text-lg font-semibold text-white font-header">Deskly for {OS_DATA[detectedOS as Exclude<OS, "unknown">].title}</h3>
                  <p className="text-zinc-400 text-xs mt-0.5">{OS_DATA[detectedOS as Exclude<OS, "unknown">].recommendation}</p>
                </div>
              </div>
              <a
                href={OS_DATA[detectedOS as Exclude<OS, "unknown">].primaryButtonUrl}
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-[4px] px-6 py-3 text-xs font-semibold tracking-wide flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all cursor-pointer font-sans w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4" />
                {detectedOS === "mac" ? "Download DMG" : detectedOS === "windows" ? "Download MSI" : "Download AppImage"}
              </a>
            </div>
          </ScrollReveal>
        )}

        {/* Multi-OS Platform Tabs / Selector */}
        <ScrollReveal delay={150}>
          <div className="w-full max-w-4xl bg-[#0a0d16]/30 border border-white/5 rounded-xl p-6 backdrop-blur-md shadow-2xl">
            
            {/* Tab Headers */}
            <div className="flex border-b border-white/10 mb-8 pb-1 gap-2 overflow-x-auto scrollbar-none">
              {(Object.keys(OS_DATA) as Array<Exclude<OS, "unknown">>).map((key) => {
                const item = OS_DATA[key];
                const Icon = item.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-5 py-3 text-xs font-semibold transition-all border-b-2 -mb-[3px] outline-none cursor-pointer whitespace-nowrap font-sans uppercase tracking-wider ${
                      isActive 
                        ? "border-blue-500 text-white bg-white/[0.02]" 
                        : "border-transparent text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.title}
                  </button>
                );
              })}
            </div>

            {/* Tab Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Recommended Button & Instructions */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-header mb-2">Recommended Setup</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans">{activeOSData.recommendation}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={activeOSData.primaryButtonUrl}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-[4px] px-6 py-3.5 text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 active:scale-95 transition-all cursor-pointer font-sans"
                  >
                    <Download className="w-4.5 h-4.5" />
                    {activeOSData.primaryButtonText}
                  </a>
                  
                  <span className="text-center text-[10px] text-zinc-500 select-none">
                    Security verified: local encryption active. No remote analytics.
                  </span>
                </div>

                {/* Package manager command if exists */}
                {activeOSData.installCommand && (
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-sans flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      Developer Install Command
                    </span>
                    <div className="bg-black/60 rounded border border-white/5 px-4 py-3 flex items-center justify-between font-mono text-xs text-blue-400 shadow-inner">
                      <code>{activeOSData.installCommand}</code>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(activeOSData.installCommand || "");
                        }}
                        className="text-[10px] text-zinc-500 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all cursor-pointer uppercase font-sans font-bold"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Files & Verification checksums */}
              <div className="lg:col-span-6 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest font-sans mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Available Release Packages
                </h3>

                <div className="flex flex-col gap-4">
                  {activeOSData.files.map((file, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div className="overflow-hidden">
                          <a 
                            href={file.url}
                            className="text-white hover:text-blue-400 font-semibold text-xs font-mono truncate block"
                          >
                            {file.name}
                          </a>
                          <span className="text-[10px] text-zinc-500 font-sans block mt-0.5">{file.description}</span>
                        </div>
                        <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded-full select-none whitespace-nowrap">
                          {file.size}
                        </span>
                      </div>
                      
                      {/* Checksum details */}
                      <div className="mt-3 flex items-start gap-2 bg-black/50 p-2 rounded text-[9px] font-mono text-zinc-500 border border-white/[0.02]">
                        <span className="text-zinc-600 font-semibold select-none uppercase">SHA256:</span>
                        <span className="break-all">{file.checksum}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Feature Cards Grid Section */}
        <ScrollReveal delay={200}>
          <div className="w-full max-w-4xl mt-20 sm:mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Local Vault */}
            <div className="p-6 rounded-lg bg-[#0a0d16]/20 border border-white/5 flex flex-col gap-4">
              <div className="p-2.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white font-header">Offline Credential Vault</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Deskly saves all VTOP login hashes inside secure OS keyrings (Keychain/Credential Manager), keeping credentials 100% offline.
              </p>
            </div>

            {/* Card 2: Micro Architecture */}
            <div className="p-6 rounded-lg bg-[#0a0d16]/20 border border-white/5 flex flex-col gap-4">
              <div className="p-2.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white font-header">Lightweight Rust Engine</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Powered by Tauri and Rust, Deskly boots in less than 50ms, uses under 30MB of RAM, and leaves no footprint on your system.
              </p>
            </div>

            {/* Card 3: Auto Updates */}
            <div className="p-6 rounded-lg bg-[#0a0d16]/20 border border-white/5 flex flex-col gap-4">
              <div className="p-2.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white font-header">Safe and Open Source</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                All sources are fully audited and hosted on GitHub. Deskly communicates only with official university portals directly.
              </p>
            </div>

          </div>
        </ScrollReveal>

      </main>

      {/* Footer */}
      <ScrollReveal delay={100}>
        <Footer />
      </ScrollReveal>

    </div>
  );
}
