import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";

export const Header: React.FC = () => {
  const navItems = [
    { label: "Core Features", href: "#features" },
    { label: "Single Sign-On", href: "#sso" },
    { label: "Architecture", href: "#architecture" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-[60] flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto flex h-16 w-full max-w-[1200px] items-center justify-between rounded-2xl border border-border bg-background/70 backdrop-blur-xl shadow-2xl px-6 transition-all duration-300">
        <a
          href="#"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/app-logo.png"
            alt="Deskly - VIT Chennai Desktop App Logo"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Deskly
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-card/50 p-1 rounded-full border border-border">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-5 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground hover:bg-accent transition-all cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 border border-border">
            <span className="h-1.5 w-1.5 rounded-full bg-chart-2 animate-pulse"></span>
            <span className="text-[11px] font-bold text-muted-foreground tracking-wider">
              1.4.0
            </span>
          </div>
          <a
            href="https://github.com/Vishal-770/Deskly"
            className="flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-[13px] font-bold text-primary-foreground transition hover:bg-primary/90 shadow-[0_0_20px_rgba(29,161,242,0.1)]"
          >
            <Github className="h-4 w-4 mr-2" />
            <span>GitHub</span>
          </a>
        </div>
      </header>
    </div>
  );
};
