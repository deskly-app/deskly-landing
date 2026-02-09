import React from "react";
import { PainPointSectionProps } from "@/types/type";

export const FeatureSection: React.FC<PainPointSectionProps> = ({
  painPoint,
  title,
  description,
  solutionTitle,
  imageSrc,
  reversed = false,
}) => {
  return (
    <div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-20 mb-40`}
    >
      <div className="lg:w-1/2">
        <div className="inline-flex mb-6 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
          Pain Point
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
          {description}
        </p>
        <div className="flex items-center gap-4 text-foreground font-bold uppercase text-xs tracking-widest">
          <span className="h-px w-8 bg-border"></span>
          {solutionTitle}
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="relative group rounded-3xl border border-border bg-card p-2 overflow-hidden shadow-2xl transition hover:border-border">
          {/* Placeholder replacement for complex UI components */}
          <div className="aspect-video bg-background rounded-2xl overflow-hidden relative">
            <img
              src={imageSrc}
              alt={`${title} - ${solutionTitle} feature in Deskly VIT Chennai app`}
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={450}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-md border border-border px-4 py-2 rounded-lg">
                <span className="flex h-2 w-2 rounded-full bg-chart-2 animate-pulse"></span>
                <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                  Live Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
