"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  className?: string; // Optional className
  margin?: string; // Optional viewport margin
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 900, 
  className = "w-full",
  margin = "-80px"
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin }}
      transition={{
        duration: duration / 1000, // Convert ms to seconds
        delay: delay / 1000, // Convert ms to seconds
        ease: [0.16, 1, 0.3, 1], // Premium Apple iOS ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
