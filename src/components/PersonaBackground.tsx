"use client";

import React from "react";

export default function PersonaBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#020612]">
      {/* Deep Persona 3 Reload radial light bursts */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-25"
        style={{
          background: "radial-gradient(circle, #0055ff 0%, #00f0ff 45%, transparent 70%)",
        }}
      />
      <div 
        className="absolute top-[40%] -right-[15%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-20"
        style={{
          background: "radial-gradient(circle, #0284c7 0%, #0044cc 50%, transparent 75%)",
        }}
      />
      <div 
        className="absolute -bottom-[15%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[150px] opacity-25"
        style={{
          background: "radial-gradient(circle, #00f0ff 0%, #002277 55%, transparent 70%)",
        }}
      />

      {/* Persona grid lines */}
      <div className="absolute inset-0 p3-grid-pattern opacity-40" />

      {/* Sharp diagonal dynamic slash lines (P3R trademark style) */}
      <div className="absolute inset-0 opacity-15 overflow-hidden">
        <div 
          className="absolute -top-32 left-1/4 w-[2px] h-[160vh] bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent transform -rotate-[24deg]" 
        />
        <div 
          className="absolute -top-32 left-2/3 w-[1px] h-[160vh] bg-gradient-to-b from-transparent via-[#0055ff] to-transparent transform -rotate-[24deg]" 
        />
        <div 
          className="absolute -top-32 right-1/4 w-[3px] h-[160vh] bg-gradient-to-b from-transparent via-[#38bdf8] to-transparent transform -rotate-[24deg]" 
        />
      </div>

      {/* Subtle P3 aesthetic watermark tags */}
      <div className="absolute top-24 right-8 select-none opacity-5 font-futura tracking-[0.4em] text-white text-7xl font-black transform -rotate-12 pointer-events-none hidden lg:block">
        RELOAD // P3
      </div>
      <div className="absolute bottom-28 left-6 select-none opacity-5 font-futura tracking-[0.4em] text-[#00f0ff] text-8xl font-black transform -rotate-6 pointer-events-none hidden lg:block">
        OPERATIVE 03
      </div>

      {/* Dark Vignette edges */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#020612]/80 pointer-events-none" />
    </div>
  );
}
