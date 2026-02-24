import React from 'react';
import { motion } from 'motion/react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
      {/* Animated Glow Orbs (Dynamic flowing light effect) */}
      <motion.div
        animate={{ 
          x: [0, 100, -50, 0], 
          y: [0, -100, 50, 0], 
          scale: [1, 1.2, 0.8, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E5C05C]/15 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 50, 0], 
          y: [0, 100, -50, 0], 
          scale: [1, 0.9, 1.1, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#C69A3C]/10 rounded-full blur-[150px] mix-blend-screen"
      />

      {/* Abstract Honeycomb Hexagon Grid */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" width="60" height="103.923" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
              <path d="M30 0L60 17.32V51.96L30 69.28L0 51.96V17.32Z" fill="none" stroke="#E5C05C" strokeWidth="0.5" strokeOpacity="0.4"/>
              <path d="M30 103.923L60 86.603V51.96L30 69.28L0 51.96V86.603Z" fill="none" stroke="#E5C05C" strokeWidth="0.5" strokeOpacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      {/* Animated Flowing Lines across the grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5C05C]/60 to-transparent"
          initial={{ y: '-10vh' }}
          animate={{ y: '110vh' }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5C05C]/50 to-transparent"
          initial={{ x: '-10vw' }}
          animate={{ x: '110vw' }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div 
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5C05C]/40 to-transparent"
          initial={{ y: '110vh' }}
          animate={{ y: '-10vh' }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
        />
        <motion.div 
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C69A3C]/40 to-transparent"
          initial={{ x: '110vw' }}
          animate={{ x: '-10vw' }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>

      {/* Dark Vignette / Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_100%)] z-10 opacity-70" />
    </div>
  );
}