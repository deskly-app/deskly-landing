import React from "react";
import Image from "next/image";
import { Globe, Github, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/app-logo.png"
                alt="Deskly"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Deskly
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The specialized desktop application designed exclusively for the
              VIT Chennai ecosystem.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-foreground uppercase tracking-[0.3em] mb-8">
              Features
            </h3>
            <ul className="space-y-4">
              {["VTOP Sync", "Attendance", "Mess Menu"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-foreground uppercase tracking-[0.3em] mb-8">
              Technical
            </h3>
            <ul className="space-y-4">
              {["Architecture", "Security Docs", "Changelog"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold text-foreground uppercase tracking-[0.3em] mb-8">
              Campus
            </h3>
            <ul className="space-y-4">
              {["VIT Chennai", "VTOP Portal"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[13px] text-muted-foreground font-medium">
            © 2026 Deskly Project. Open Source. Built exclusively for VIT
            Chennai Students. Not an official VIT University application.
          </p>
          <div className="flex gap-8">
            <a
              href="https://github.com/Vishal-770/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://vishaldev.space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Portfolio"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/vishal_7707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Twitter"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
