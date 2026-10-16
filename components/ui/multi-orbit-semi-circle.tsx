"use client";
import React, { useState, useEffect } from "react";

const INTEGRATIONS = [
  { icon: "/google-calendar.svg", name: "Google Calendar" },
  { icon: "/apple.svg", name: "Apple Calendar" },
  { icon: "/outlook.svg", name: "Microsoft Outlook" },
  { icon: "/notion.svg", name: "Notion Workspace" },
  { icon: "/calendar.svg", name: "Other Calendar Services" }
];

function getRandomizedIntegrations(count: number, arcId: number) {
  let seed = arcId * 12345 + 9876;
  const lcg = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  const list: typeof INTEGRATIONS = [];
  let lastItem: typeof INTEGRATIONS[0] | null = null;

  for (let i = 0; i < count; i++) {
    const available = INTEGRATIONS.filter(item => item !== lastItem);
    const randomIndex = Math.floor(lcg() * available.length);
    const selected = available[randomIndex];
    list.push(selected);
    lastItem = selected;
  }
  return list;
}

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, arcId }: any) {
  const items = getRandomizedIntegrations(count, arcId);

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
      {items.map((item, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

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
                src={`${item.icon}?v=3`}
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
              {item.name}
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
    <section id="architecture" className="py-20 sm:py-28 md:py-36 lg:py-48 relative w-full overflow-hidden bg-transparent">
      <div className="relative flex flex-col items-center text-center z-10 px-5 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3 md:mb-4 font-header leading-[1.2]">
          1-Click .ICS Calendar &amp; Schedule Export
        </h2>
        <p className="mb-10 md:mb-16 max-w-2xl text-zinc-400 text-sm md:text-base font-sans font-normal leading-relaxed">
          Export your complete exam schedule, slot timings, seating venues, reporting times, and course timetable straight into Google Calendar, Apple Calendar, or Microsoft Outlook in one click.
        </p>

        <div
          className="relative"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={4} iconSize={iconSize} arcId={1} />
          <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} arcId={2} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={10} iconSize={iconSize} arcId={3} />
        </div>
      </div>
    </section>
  );
}
