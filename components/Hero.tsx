import React, { useState } from "react";
import { Grid3x3, Laptop, Terminal, Download } from "lucide-react";

const FeatureStat = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div>
    <div className="text-foreground font-bold text-xl mb-1">{title}</div>
    <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold">
      {subtitle}
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [platform, setPlatform] = useState<"windows" | "mac" | "linux">(
    "windows",
  );

  const platforms = {
    windows: {
      label: "Windows",
      file: "Deskly-Setup-2.0.4.exe",
      icon: Grid3x3,
    },
    mac: { label: "macOS", file: "Deskly-2.0.4.dmg", icon: Laptop },
    linux: { label: "Linux", file: "Deskly-2.0.4.AppImage", icon: Terminal },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
        <div className="w-full h-full border-l border-border bg-card translate-x-1/3 scale-125 opacity-40">
          {/* Placeholder for the background texture */}
          <img
            src="https://picsum.photos/seed/deskly-bg/1920/1080?grayscale&blur=2"
            alt="Background Texture"
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>
      </div>
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-10">
            <span className="flex h-2 w-2 rounded-full bg-chart-2 animate-pulse"></span>
            <span className="text-[10px] font-bold text-foreground uppercase tracking-[0.25em]">
              Connected to vtopcc.vit.ac.in
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tightest text-foreground mb-10 leading-[0.9]">
            Your Unified <br />
            <span className="text-muted-foreground">VIT Chennai Portal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Meet <span className="text-foreground font-semibold">Deskly</span>.
            The open source native desktop interface consolidating VTOP
            services, attendance, and campus utilities into one secure
            experience.
          </p>

          <div className="mb-8">
            <div className="inline-flex p-1 bg-card border border-border rounded-lg">
              {(Object.keys(platforms) as Array<keyof typeof platforms>).map(
                (key) => {
                  const IconComponent = platforms[key].icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setPlatform(key)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-[13px] font-bold transition-all ${
                        platform === key
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {platforms[key].label}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="w-full sm:w-auto h-14 px-10 rounded bg-primary text-primary-foreground text-[15px] font-black hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 shadow-xl">
              <Download className="h-4 w-4" />
              Download for {platforms[platform].label}
            </button>
            <button className="w-full sm:w-auto h-14 px-10 rounded border border-border bg-card/50 backdrop-blur text-foreground text-[15px] font-semibold hover:bg-card transition-colors">
              View App Tour
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-muted-foreground">
            <span>v2.0.4 (Stable)</span>
            <span className="h-1 w-1 rounded-full bg-border"></span>
            <span>{platforms[platform].file}</span>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
            <FeatureStat title="Direct API" subtitle="Live Data Sync" />
            <FeatureStat title="Native" subtitle="System Tray App" />
            <FeatureStat title="Secure" subtitle="Keytar Encryption" />
            <FeatureStat title="Auto-Updates" subtitle="Electron-Updater" />
          </div>
        </div>
      </div>
    </section>
  );
};
