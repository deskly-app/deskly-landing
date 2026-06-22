"use client";
import React, { useState, useEffect } from "react";

const ICONS = [
  "/google-calendar.svg",
  "/apple.svg",
  "/outlook.svg",
  "/notion.svg",
  "/calendar.svg"
];

const APP_NAMES = [
  "Google Calendar",
  "Apple Calendar",
  "Microsoft Outlook",
  "Notion Workspace",
  "Other Calendar Services"
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize }: any) {
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
        const icon = ICONS[index % ICONS.length];

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
            <div className="flex items-center justify-center cursor-pointer">
              <img
                src={icon}
                alt={`icon-${index}`}
                width={iconSize}
                height={iconSize}
                className="object-contain"
                style={{ minWidth: iconSize, minHeight: iconSize }} // fix accidental shrink
              />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block w-32 rounded-md bg-[#0a0f1d] border border-white/10 px-2.5 py-1.5 text-[10px] text-white shadow-xl text-center font-sans tracking-wide z-50`}
            >
              {APP_NAMES[index % APP_NAMES.length]}
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
      ? Math.max(32, baseWidth * 0.08)
      : size.width < 768
      ? Math.max(40, baseWidth * 0.09)
      : Math.max(48, baseWidth * 0.1);

  return (
    <section id="architecture" className="py-20 sm:py-28 md:py-36 lg:py-48 relative w-full overflow-hidden bg-black">
      <div className="relative flex flex-col items-center text-center z-10 px-5 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3 md:mb-4 font-header leading-[1.2]">
          Seamless Calendar &amp; Workspace Sync
        </h2>
        <p className="mb-10 md:mb-16 max-w-2xl text-zinc-400 text-sm md:text-base font-sans font-normal leading-relaxed">
          Deskly syncs your VTOP academic schedule and slot updates directly with your favorite calendar and productivity workspaces.
        </p>

        <div
          className="relative"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.45} centerX={centerX} centerY={centerY} count={10} iconSize={iconSize} />
        </div>
      </div>
    </section>
  );
}
