"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootingLoader() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable scrolling during boot sequence
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Complete loading after 1.5 seconds
    const timer = setTimeout(() => {
      setIsDone(true);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="boot-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.6, 
              ease: [0.16, 1, 0.3, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black select-none overflow-hidden"
        >
          {/* Minimalist central branding */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative flex items-center justify-center">
              {/* Subtle blue background aura */}
              <div className="absolute w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              <img 
                src="/app-logo.png" 
                alt="Deskly Logo" 
                className="h-16 w-auto relative z-10"
              />
            </div>
            <span className="text-white font-medium text-lg tracking-[0.2em] font-sans uppercase">
              DESKLY
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
