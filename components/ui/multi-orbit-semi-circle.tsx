"use client";
import React, { useState, useEffect } from "react";
import { 
  Clock, 
  Shield, 
  Calendar, 
  Bell, 
  Cpu, 
  Database, 
  User, 
  CreditCard, 
  Utensils, 
  Shirt, 
  GraduationCap, 
  RefreshCw 
} from "lucide-react";

const MODULES = [
  { name: "CAPTCHA Classifier", icon: Cpu },
  { name: "OS Keyring (Keychain)", icon: Shield },
  { name: "Attendance Predictor", icon: GraduationCap },
  { name: "Google Calendar Sync", icon: Calendar },
  { name: "ICS Calendar Exporter", icon: Calendar },
  { name: "Academic Scrapers", icon: Database },
  { name: "Student Profile Hub", icon: User },
  { name: "Payment Receipts PDF", icon: CreditCard },
  { name: "Hostel Mess Menu", icon: Utensils },
  { name: "Laundry Schedule Planner", icon: Shirt },
  { name: "Auto Re-Login Engine", icon: RefreshCw },
  { name: "Live VTOP Timetable", icon: Clock },
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, startIndex }: any) {
  return (
    <>
      {/* Semi-circle glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[1000px] h-[800px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25),transparent_70%)]
            dark:bg-[radial-gradient(ellipse_80%_70%_at_center,rgba(37,99,235,0.18),transparent_75%)]
            blur-3xl 
            -mt-40 
            pointer-events-none
          "
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        
        const moduleIndex = (startIndex + index) % MODULES.length;
        const currentModule = MODULES[moduleIndex];
        const IconComponent = currentModule.icon;

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div 
              className="flex items-center justify-center rounded-full bg-[#0a0d16] border border-white/10 hover:border-blue-500/40 text-zinc-400 hover:text-blue-400 transition-all hover:scale-110 shadow-lg shadow-black/50 cursor-pointer"
              style={{ 
                width: iconSize, 
                height: iconSize, 
                minWidth: iconSize, 
                minHeight: iconSize 
              }}
            >
              <IconComponent style={{ width: iconSize * 0.45, height: iconSize * 0.45 }} strokeWidth={1.5} />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block w-32 rounded-md bg-[#0a0f1d] border border-white/10 px-2.5 py-1.5 text-[10px] text-white shadow-xl text-center font-sans tracking-wide z-50`}
            >
              {currentModule.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-white/10 rotate-45 bg-[#0a0f1d] ${
                  tooltipAbove ? "top-full -mt-1" : "bottom-full -mb-1"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.8, 700);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(30, baseWidth * 0.08)
      : size.width < 768
      ? Math.max(36, baseWidth * 0.09)
      : Math.max(42, baseWidth * 0.1);

  return (
    <section id="architecture" className="py-20 sm:py-28 md:py-36 lg:py-48 relative w-full overflow-hidden bg-black">
      <div className="relative flex flex-col items-center text-center z-10 px-5 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3 md:mb-4 font-header leading-[1.2]">
          Modular Desktop Client Architecture
        </h2>
        <p className="mb-10 md:mb-16 max-w-2xl text-zinc-400 text-sm md:text-base font-sans font-normal leading-relaxed">
          Hover over each node to explore Deskly's submodules. Built with native Google Calendar synchronization and cross-platform ICS batch exports supporting Apple Calendar, Outlook, and more.
        </p>

        <div
          className="relative"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={4} iconSize={iconSize} startIndex={0} />
          <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} startIndex={4} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={8} iconSize={iconSize} startIndex={10} />
        </div>
      </div>
    </section>
  );
}
