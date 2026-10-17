"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BootingLoader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable scrolling during boot sequence
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // organic progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Organic progress increments: start fast, slow down as it gets closer to 100
        let increment = 1;
        if (prev < 40) {
          increment = Math.floor(Math.random() * 8) + 6; // Fast start
        } else if (prev < 80) {
          increment = Math.floor(Math.random() * 5) + 3; // Steady middle
        } else {
          increment = Math.floor(Math.random() * 2) + 1; // Slow finish
        }
        
        return Math.min(100, prev + increment);
      });
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Once progress reaches 100%, trigger exit animation after a short hold
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsDone(true);
        if (typeof window !== "undefined") {
          document.body.style.overflow = "";
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Format progress with leading zeros to maintain typographic width (00 - 100)
  const formattedProgress = progress < 10 ? `0${progress}` : `${progress}`;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="boot-loader"
          initial={{ opacity: 1, y: "0%" }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 0.9, 
              ease: [0.85, 0, 0.15, 1] // Dramatic curtain-slide bezier curve
            } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Typographic Center Panel */}
          <div className="flex flex-col items-center">
            
            {/* Big, clean numeric counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-8xl sm:text-[10rem] font-extralight tracking-tighter text-white font-sans tabular-nums leading-none"
            >
              {formattedProgress}
            </motion.div>

            {/* Ultra-thin loading bar */}
            <div className="w-36 h-[1px] bg-white/10 mt-8 overflow-hidden relative rounded-full">
              <div 
                className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-150 ease-out" 
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Subtle Brand Logo/Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex items-center gap-2"
            >
              <Image
                src="/app-logo.png"
                alt=""
                width={311}
                height={265}
                sizes="14px"
                className="h-3.5 w-auto"
              />
              <span className="text-[9px] tracking-[0.35em] text-white uppercase font-sans font-medium">
                DESKLY
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
