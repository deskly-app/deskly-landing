import React from "react";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="download"
      className="relative py-48 border-t border-border bg-background overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-background to-background pointer-events-none"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <h2 className="text-6xl md:text-9xl font-bold tracking-tightest text-foreground mb-16 leading-[0.9]">
          Upgrade Your <br />
          Campus Life.
        </h2>
        <div className="flex flex-col items-center gap-10">
          <button className="h-16 px-16 rounded bg-primary text-primary-foreground text-lg font-black hover:bg-primary/90 transition-colors shadow-2xl">
            Download Deskly
          </button>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Open Source
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              VIT SSO Integrated
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5" />
              Native Performance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
