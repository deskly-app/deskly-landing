"use client";

import { Check, X, PlusIcon, RotateCcw, Shield, Calendar, Bell, Zap, Database, Sun, Moon, Download, HardDrive } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const rows = [
  { icon: RotateCcw, label: "Auto VTOP Re-Login",      others: "Manual every session",           deskly: "One-click, always live" },
  { icon: Calendar,  label: "Live Timetable & ICS",     others: "Static screenshot / PDF",         deskly: "Live slots + 1-Click .ICS export" },
  { icon: Zap,       label: "Attendance & Skips",       others: "Count it yourself",               deskly: "Live 75% + Safe Skip calculations" },
  { icon: HardDrive, label: "Install Size",             others: "~60 MB – 150 MB+",               deskly: "~3MB (Desktop) / ~10MB (Android)" },
  { icon: Shield,    label: "Storage Optimization",     others: "Extracts 30–50MB to disk",        deskly: "4KB page-aligned memory-mapped" },
  { icon: Database,  label: "RAM & Webview Lag",        others: "Bundles Chromium (200MB+)",       deskly: "Native webview + <1KB bootstrap" },
  { icon: Bell,      label: "Android Home Widgets",     others: "None / Browser bookmarks",        deskly: "2x3 & 2x4 widgets (zero drain)" },
  { icon: Moon,      label: "Offline Access",           others: "Fails without network",           deskly: "0ms Stale-While-Revalidate (SWR)" },
  { icon: Sun,       label: "Telemetry & Ads",          others: "Ad networks & analytics",         deskly: "Zero ads, zero tracking, MIT" },
];

export default function ComparisonSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 md:py-36 lg:py-48 bg-black overflow-hidden">

      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37,99,235,0.18) 0%, rgba(29,78,216,0.06) 55%, transparent 85%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-20 gap-4">
          <Badge
            variant="outline"
            className="text-blue-400 border-blue-500/20 bg-blue-500/5 px-3 py-1 font-sans text-xs tracking-wider uppercase"
          >
            Competitive Edge
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white font-header leading-[1.15] max-w-3xl">
            Built Different. Built Better.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans leading-relaxed max-w-xl px-2">
            Most VTOP tools are half-baked browser scripts. Deskly is a purpose-built client experience — secure, offline-first, and fully automated.
          </p>
        </div>

        {/* CTA-style retro grid container */}
        {/* CTA-style retro grid container */}
        <div className="relative mx-auto w-full max-w-5xl border-y border-white/10 bg-[radial-gradient(45%_80%_at_50%_0%,rgba(37,99,235,0.07),transparent)]">

          {/* Plus corner markers */}
          <PlusIcon className="absolute top-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />

          {/* Vertical side guides */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px border-l border-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px border-r border-white/10" />

          {/* Scroll wrapper for mobile screens with subtle hint */}
          <div className="overflow-x-auto scrollbar-none w-full">
            <div className="min-w-[580px] sm:min-w-0">

              {/* Column headers row */}
              <div className="grid grid-cols-[1.3fr_1fr_1.1fr] border-b border-white/8">
                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-zinc-500 font-sans select-none">
                    Feature
                  </span>
                </div>
                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-l border-white/8">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-zinc-500 font-sans select-none">
                    Other Tools
                  </span>
                </div>
                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-l border-blue-500/20 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-blue-400 font-sans select-none">
                    Deskly
                  </span>
                  <span className="text-[8px] bg-blue-500/10 text-blue-300/80 border border-blue-500/20 px-1.5 py-0.5 font-sans tracking-wider font-semibold">
                    FREE
                  </span>
                </div>
              </div>

              {/* Feature rows */}
              {rows.map((row, idx) => {
                const Icon = row.icon;
                const isLast = idx === rows.length - 1;
                return (
                  <div
                    key={row.label}
                    className={`group grid grid-cols-[1.3fr_1fr_1.1fr] hover:bg-white/[0.02] transition-colors duration-150 ${!isLast ? "border-b border-white/5" : ""}`}
                  >
                    {/* Feature name */}
                    <div className="px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 flex items-center gap-2.5 sm:gap-3">
                      <Icon className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-white/85 text-xs sm:text-xs md:text-sm font-sans font-normal leading-snug">
                        {row.label}
                      </span>
                    </div>

                    {/* Others */}
                    <div className="px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 border-l border-white/5 flex items-center gap-2 sm:gap-2.5">
                      <X className="w-3 h-3 text-zinc-600 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-zinc-500 text-[11px] md:text-xs font-sans leading-tight">
                        {row.others}
                      </span>
                    </div>

                    {/* Deskly */}
                    <div className="px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 border-l border-blue-500/15 flex items-center gap-2 sm:gap-2.5 bg-blue-500/[0.015]">
                      <Check className="w-3 h-3 text-blue-400 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-zinc-100 font-medium text-[11px] md:text-xs font-sans leading-tight">
                        {row.deskly}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Bottom CTA row */}
              <div className="grid grid-cols-[1.3fr_1fr_1.1fr] border-t border-white/8">
                <div className="px-4 sm:px-6 md:px-8 py-5 flex items-center">
                  <span className="text-zinc-500 text-[10px] font-sans italic">
                    100% open source · MIT
                  </span>
                </div>
                <div className="px-4 sm:px-6 md:px-8 py-5 border-l border-white/5 flex items-center">
                  <span className="text-zinc-600 text-[10px] font-sans">Bloated / Slow</span>
                </div>
                <div className="px-4 sm:px-6 md:px-8 py-5 border-l border-blue-500/15 flex items-center">
                  <a
                    href="/download"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 sm:px-5 py-2 rounded-[4px] text-xs font-medium shadow-lg shadow-blue-500/20 active:scale-95 transition-all font-sans whitespace-nowrap"
                  >
                    Download Free
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Rust & Size Brag Section */}
        <div className="relative mx-auto w-full max-w-5xl mt-16 border-y border-white/10 bg-[radial-gradient(45%_80%_at_50%_0%,rgba(37,99,235,0.07),transparent)]">
          {/* Plus corner markers */}
          <PlusIcon className="absolute top-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />

          {/* Vertical side guides */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px border-l border-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px border-r border-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Left side: text block */}
            <div className="md:col-span-7 p-6 md:p-10 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-blue-400 font-sans">
                Performance &amp; Engineering
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight font-header leading-tight">
                Powered by Rust: Memory-Mapped &amp; Uncompressed APK
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm font-sans leading-relaxed">
                Deskly Android downloads at just ~10 MB (9.88 MB for modern arm64 phones) with targeted builds for every device architecture (arm64, 32-bit arm, x86, x86_64, universal, and Google Play AAB). Native .so shared libraries are 4KB page-aligned and uncompressed inside the APK (useLegacyPackaging = false), saving 30–50 MB of device storage by letting the Android kernel memory-map files directly without extracting them to disk.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm font-sans leading-relaxed">
                By hooking directly into native system webviews, memory usage stays at a fraction of traditional wrappers. The entry bootstrap file is under 1 KB, and 100% of app icons and illustrations use WebP to eliminate cold-boot lag.
              </p>
            </div>

            {/* Right side: Absolute Size stats */}
            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10 h-full">
              {/* Desktop Size Card */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[160px] hover:bg-white/[0.01] transition-colors">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/80 font-sans">Desktop App</span>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-sans mt-2">2.9 <span className="text-sm font-normal text-foreground/80">MB</span></h4>
                </div>
                <p className="text-muted-foreground text-[10px] sm:text-xs font-sans mt-4 leading-normal">
                  Fully-featured native desktop client. Compiled directly from Rust to bare metal.
                </p>
              </div>

              {/* Mobile Size Card */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[160px] hover:bg-white/[0.01] transition-colors">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/80 font-sans">Android Mobile</span>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-sans mt-2">9.8 <span className="text-sm font-normal text-foreground/80">MB</span></h4>
                </div>
                <p className="text-muted-foreground text-[10px] sm:text-xs font-sans mt-4 leading-normal">
                  arm64 APK download. All formats supported: arm, arm64, x86, x86_64, universal, and AAB.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
