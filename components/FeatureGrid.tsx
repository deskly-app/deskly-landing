import React from "react";
import { FeatureGridProps } from "@/types/type";

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  id,
  badge,
  title,
  description,
  features,
}) => {
  return (
    <section
      id={id}
      className="py-24 mb-8 border-t border-border bg-background scroll-mt-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 md:w-2/3">
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            {badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border bg-card/30 hover:bg-card hover:border-border transition-all duration-300"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6 border border-border">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
