import React from "react";
import { Code, Terminal, Shield, Zap, Globe, Palette } from "lucide-react";

const TechCard = ({
  icon: IconComponent,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <div className="p-8 rounded-3xl border border-border bg-card/40 hover:bg-card/60 transition-colors group">
    <div className="h-12 w-12 flex items-center justify-center rounded bg-primary/10 text-primary mb-8 transition-colors">
      <IconComponent className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wider">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export const TechStack: React.FC = () => {
  return (
    <section
      id="architecture"
      className="py-32 border-t border-border bg-background scroll-mt-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center mb-24">
        <span className="text-sm font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6 block">
          Under the Hood
        </span>
        <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
          Modern Engineering
        </h2>
      </div>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <TechCard
          icon={Code}
          title="Frontend Core"
          description="Powered by Next.js 16 and React 19 using TypeScript for a type-safe, high-performance student dashboard."
        />
        <TechCard
          icon={Terminal}
          title="Desktop Engine"
          description="Electron framework with direct IPC communication to native OS APIs and system tray integration."
        />
        <TechCard
          icon={Shield}
          title="Security Layer"
          description="Credentials encrypted via OS-level keychain (Keytar). Zero-trust architecture with secure token management."
        />
        <TechCard
          icon={Zap}
          title="Build System"
          description="Optimized with Turbopack for rapid development and creating highly compressed production builds."
        />
        <TechCard
          icon={Globe}
          title="API Client"
          description="Custom Axios client tailored for reliable communication with VIT Chennai's vtopcc.vit.ac.in endpoints."
        />
        <TechCard
          icon={Palette}
          title="UI System"
          description="Styled with Tailwind CSS and Shadcn/UI for a consistent, dark-mode native application aesthetic."
        />
      </div>
    </section>
  );
};
