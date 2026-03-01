import React from 'react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
      {/* Abstract Honeycomb Hexagon Grid - 尖顶六边形 */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" width="60" height="103.923" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
              {/* 尖顶六边形：顶点在上下，宽60px，高103.92px */}
              <path d="M30 0L60 17.32V51.96L30 69.28L0 51.96V17.32Z" fill="none" stroke="#E5C05C" strokeWidth="0.5" strokeOpacity="0.4"/>
              <path d="M30 34.64L60 51.96V86.6L30 103.92L0 86.6V51.96Z" fill="none" stroke="#E5C05C" strokeWidth="0.5" strokeOpacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      {/* Dark Vignette / Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_100%)] z-10 opacity-70" />
    </div>
  );
}