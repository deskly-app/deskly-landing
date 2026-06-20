"use client";

import { Check, X, Sun, Moon, RotateCcw, Shield, Calendar, Bell, Zap, Database, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const rows = [
  {
    icon: RotateCcw,
    label: "Auto VTOP Re-Login",
    othersLabel: "Manual every session",
    desklyLabel: "One-click, always live",
  },
  {
    icon: Calendar,
    label: "Live Timetable",
    othersLabel: "Static screenshot / PDF",
    desklyLabel: "Real-time slot dashboard",
  },
  {
    icon: Zap,
    label: "Attendance Tracking",
    othersLabel: "Count it yourself",
    desklyLabel: "Auto-tracked with alerts",
  },
  {
    icon: Sun,
    label: "Light & Dark Mode",
    othersLabel: "Dark only or browser default",
    desklyLabel: "System-aware, both modes",
  },
  {
    icon: Shield,
    label: "Credential Security",
    othersLabel: "Plain text or cloud stored",
    desklyLabel: "AES-256 local encryption",
  },
  {
    icon: Database,
    label: "Offline Support",
    othersLabel: "Requires active internet",
    desklyLabel: "Full offline vault",
  },
  {
    icon: Bell,
    label: "Smart Alerts",
    othersLabel: "No notifications",
    desklyLabel: "Native OS desktop alerts",
  },
  {
    icon: Moon,
    label: "Session Persistence",
    othersLabel: "VTOP logs you out",
    desklyLabel: "Session kept alive silently",
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 md:py-36 lg:py-48 bg-black overflow-hidden">

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 75% 55% at 50% 50%, rgba(37,99,235,0.16) 0%, rgba(29,78,216,0.05) 60%, transparent 90%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-4">
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
            Most VTOP solutions are half-baked browser scripts. Deskly is a purpose-built desktop experience — secure, offline-first, and fully automated.
          </p>
        </div>

        {/* Two-card comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">

          {/* ── Left Card: Other Tools ── */}
          <div className="relative rounded-2xl bg-white/[0.03] p-6 md:p-8 flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center gap-3 pb-5 border-b border-white/6">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/60 border border-white/8 flex items-center justify-center">
                <Minus className="w-4 h-4 text-zinc-500" strokeWidth={2} />
              </div>
              <div>
                <p className="text-white/80 font-semibold text-sm font-sans tracking-wide">Other Tools</p>
                <p className="text-zinc-600 text-[10px] font-sans">Browser scripts, manual workflows</p>
              </div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-3">
              {rows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700/50 flex items-center justify-center">
                      <X className="w-2.5 h-2.5 text-zinc-600" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-zinc-500 text-xs font-medium font-sans line-through decoration-zinc-700">
                        {row.label}
                      </span>
                      <span className="text-zinc-700 text-[11px] font-sans">
                        {row.othersLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right Card: Deskly ── */}
          <div className="relative rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col gap-5">

            {/* Blue glow background layer */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `radial-gradient(ellipse 100% 80% at 50% 0%, rgba(37,99,235,0.22) 0%, rgba(15,23,42,0.95) 70%)`,
              }}
            />
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl border border-blue-500/20 z-0 pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between pb-5 border-b border-blue-500/15">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.3)]">
                  <Check className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm font-sans tracking-wide">Deskly</p>
                  <p className="text-blue-400/70 text-[10px] font-sans">Desktop-grade. Always free.</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-blue-500/15 text-blue-300 border border-blue-500/25 px-2.5 py-1 rounded-full font-sans tracking-wider uppercase">
                Free Forever
              </span>
            </div>

            {/* Rows */}
            <div className="relative z-10 flex flex-col gap-3">
              {rows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shadow-[0_0_8px_rgba(37,99,235,0.2)]">
                      <Check className="w-2.5 h-2.5 text-blue-300" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white text-xs font-medium font-sans">
                        {row.label}
                      </span>
                      <span className="text-blue-300/50 text-[11px] font-sans">
                        {row.desklyLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-2">
              <a
                href="#"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-[6px] text-sm font-medium shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer font-sans"
              >
                Download Free
                <span className="text-xs">✦</span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom label */}
        <p className="text-center text-zinc-700 text-xs font-sans mt-10 select-none">
          All features included. No sign-up. No telemetry. Open source under MIT.
        </p>

      </div>
    </section>
  );
}
