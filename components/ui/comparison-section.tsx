"use client";

import { Check, X, PlusIcon, RotateCcw, Shield, Calendar, Bell, Zap, Database, Sun, Moon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const rows = [
  { icon: RotateCcw, label: "Auto VTOP Re-Login",      others: "Manual every session",           deskly: "One-click, always live" },
  { icon: Calendar,  label: "Live Timetable Dashboard", others: "Static screenshot / PDF",         deskly: "Real-time slot dashboard" },
  { icon: Zap,       label: "Attendance Tracking",      others: "Count it yourself",               deskly: "Auto-tracked with alerts" },
  { icon: Sun,       label: "Light & Dark Mode UI",     others: "Dark only or browser default",    deskly: "System-aware, both modes" },
  { icon: Shield,    label: "Credential Security",      others: "Plain text or cloud stored",      deskly: "AES-256 local encryption" },
  { icon: Database,  label: "Offline Vault",            others: "Requires active internet",        deskly: "Full offline, zero cloud" },
  { icon: Bell,      label: "Smart Alerts",             others: "No notifications",                deskly: "Native OS desktop alerts" },
  { icon: Moon,      label: "Session Persistence",      others: "VTOP logs you out",               deskly: "Kept alive silently" },
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
            Most VTOP tools are half-baked browser scripts. Deskly is a purpose-built desktop experience — secure, offline-first, and fully automated.
          </p>
        </div>

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

          {/* Column headers row */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/8">
            <div className="px-6 md:px-8 py-5">
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-zinc-600 font-sans select-none">
                Feature
              </span>
            </div>
            <div className="px-6 md:px-8 py-5 border-l border-white/8">
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-zinc-600 font-sans select-none">
                Other Tools
              </span>
            </div>
            <div className="px-6 md:px-8 py-5 border-l border-blue-500/20 flex items-center gap-2">
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
                className={`group grid grid-cols-[1fr_1fr_1fr] hover:bg-white/[0.02] transition-colors duration-150 ${!isLast ? "border-b border-white/5" : ""}`}
              >
                {/* Feature name */}
                <div className="px-6 md:px-8 py-4 md:py-5 flex items-center gap-3">
                  <Icon className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/75 text-xs md:text-sm font-sans font-normal leading-snug">
                    {row.label}
                  </span>
                </div>

                {/* Others */}
                <div className="px-6 md:px-8 py-4 md:py-5 border-l border-white/5 flex items-center gap-2.5">
                  <X className="w-3 h-3 text-zinc-700 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-zinc-600 text-[11px] md:text-xs font-sans">
                    {row.others}
                  </span>
                </div>

                {/* Deskly */}
                <div className="px-6 md:px-8 py-4 md:py-5 border-l border-blue-500/15 flex items-center gap-2.5">
                  <Check className="w-3 h-3 text-blue-400 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-zinc-200 text-[11px] md:text-xs font-sans">
                    {row.deskly}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Bottom CTA row */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-white/8">
            <div className="px-6 md:px-8 py-6 flex items-center">
              <span className="text-zinc-600 text-[11px] font-sans italic">
                100% open source · MIT License
              </span>
            </div>
            <div className="px-6 md:px-8 py-6 border-l border-white/5 flex items-center">
              <span className="text-zinc-700 text-[11px] font-sans">Limited / Broken</span>
            </div>
            <div className="px-6 md:px-8 py-6 border-l border-blue-500/15 flex items-center">
              <a
                href="/download"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2 rounded-[4px] text-xs font-medium shadow-lg shadow-blue-500/20 active:scale-95 transition-all font-sans whitespace-nowrap"
              >
                Download Free
                <span>✦</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
