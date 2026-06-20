"use client";

import React from "react";
import { Check, X, Sun, Moon, RotateCcw, Shield, Calendar, Bell, Zap, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: RotateCcw,
    label: "Auto VTOP Re-Login",
    description: "Automatically re-authenticates expired sessions without any interaction.",
    others: false,
    deskly: true,
  },
  {
    icon: Calendar,
    label: "Live Timetable Dashboard",
    description: "Real-time slot, faculty, and classroom data for your current day.",
    others: false,
    deskly: true,
  },
  {
    icon: Zap,
    label: "Attendance Tracker",
    description: "Tracks your percentage and warns you before hitting the 75% boundary.",
    others: false,
    deskly: true,
  },
  {
    icon: Sun,
    label: "Light & Dark Mode UI",
    description: "A fully themed interface with automatic system preference detection.",
    others: false,
    deskly: true,
  },
  {
    icon: Shield,
    label: "AES-256 Local Encryption",
    description: "Credentials are encrypted offline — your password never hits a server.",
    others: false,
    deskly: true,
  },
  {
    icon: Database,
    label: "Offline Vault Storage",
    description: "Works completely offline — no cloud dependency, no data exposure.",
    others: false,
    deskly: true,
  },
  {
    icon: Bell,
    label: "Smart Desktop Alerts",
    description: "Native OS notifications when attendance or session thresholds are breached.",
    others: false,
    deskly: true,
  },
  {
    icon: Moon,
    label: "Session Persistence",
    description: "Keeps you logged in across research tasks and portal timeouts.",
    others: false,
    deskly: true,
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 md:py-36 lg:py-48 bg-black overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37, 99, 235, 0.18) 0%, rgba(29, 78, 216, 0.06) 55%, transparent 85%)`,
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-20 gap-4">
          <Badge
            variant="outline"
            className="text-blue-400 border-blue-500/20 bg-blue-500/5 px-3 py-1 font-sans text-xs tracking-wider uppercase"
          >
            Competitive Edge
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white font-header leading-[1.15] max-w-3xl">
            Why Students Switch to Deskly
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans leading-relaxed max-w-xl px-2">
            Most VTOP tools are browser scripts or manual workflows. Deskly is a full desktop-grade experience built from the ground up.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative mx-auto max-w-5xl">

          {/* Deskly column highlight glow */}
          <div
            className="absolute right-0 md:right-[0%] top-0 h-full w-[33%] rounded-xl pointer-events-none z-0"
            style={{
              background: `linear-gradient(180deg, rgba(37,99,235,0.12) 0%, rgba(29,78,216,0.04) 100%)`,
            }}
          />

          {/* Column headers */}
          <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_160px_160px] gap-0 mb-0">
            {/* Feature label col */}
            <div className="px-5 md:px-6 py-4 text-left">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-600 font-sans select-none">
                Feature
              </span>
            </div>

            {/* Others header */}
            <div className="px-4 md:px-6 py-4 flex flex-col items-center justify-center border-l border-white/5">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-600 font-sans select-none hidden sm:block">
                  Other Tools
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-600 font-sans select-none sm:hidden">
                  Others
                </span>
              </div>
            </div>

            {/* Deskly header */}
            <div className="px-4 md:px-6 py-4 flex flex-col items-center justify-center border-l border-blue-500/20 relative">
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400 font-sans select-none">
                    Deskly
                  </span>
                  <span className="hidden sm:inline text-[8px] bg-blue-500/15 text-blue-300 border border-blue-500/20 px-1.5 py-0.5 rounded-full font-sans tracking-wider font-medium">
                    FREE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Border separating header from rows */}
          <div className="border-t border-white/8" />

          {/* Rows */}
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isLast = idx === features.length - 1;
            return (
              <div
                key={feature.label}
                className={`group grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_160px_160px] gap-0 hover:bg-white/[0.025] transition-colors duration-200 ${!isLast ? "border-b border-white/5" : ""}`}
              >
                {/* Feature name + description */}
                <div className="px-5 md:px-6 py-4 md:py-5 flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-white/5 border border-white/8 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-blue-400/70" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-xs sm:text-sm font-medium text-white font-sans leading-snug">
                      {feature.label}
                    </span>
                    <span className="text-[10px] sm:text-xs text-zinc-500 font-sans font-normal leading-relaxed hidden sm:block">
                      {feature.description}
                    </span>
                  </div>
                </div>

                {/* Others column */}
                <div className="px-4 md:px-6 py-4 md:py-5 flex items-center justify-center border-l border-white/5">
                  <div className="w-6 h-6 rounded-full bg-red-500/8 border border-red-500/15 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-400/60" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Deskly column */}
                <div className="px-4 md:px-6 py-4 md:py-5 flex items-center justify-center border-l border-blue-500/15 relative">
                  <div className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.25)]">
                    <Check className="w-3 h-3 text-blue-300" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom border */}
          <div className="border-t border-white/8" />

          {/* Footer row — CTA */}
          <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_160px_160px] gap-0 mt-0">
            <div className="px-5 md:px-6 py-5 flex items-center">
              <span className="text-zinc-500 text-xs font-sans italic">
                All features available for free, forever.
              </span>
            </div>
            <div className="px-4 md:px-6 py-5 flex items-center justify-center border-l border-white/5">
              <span className="text-zinc-600 text-[10px] font-sans text-center hidden sm:block">Partial / Paid</span>
            </div>
            <div className="px-4 md:px-6 py-5 flex items-center justify-center border-l border-blue-500/15">
              <a
                href="#"
                className="text-[10px] sm:text-xs font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-3 py-1.5 rounded-[4px] font-sans active:scale-95 transition-all whitespace-nowrap"
              >
                Download ✦
              </a>
            </div>
          </div>

          {/* Outer border frame */}
          <div className="absolute inset-0 border border-white/8 rounded-xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
