"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top P3 Badge Banner */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#0055ff]/20 border border-[#00f0ff]/50 backdrop-blur-md transform -skew-x-12 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
            <span className="font-mono text-xs font-semibold tracking-widest text-[#00f0ff] uppercase transform skew-x-12">
              S.E.E.S. ARCHIVE // RECRUIT DOSSIER #03
            </span>
          </div>
          <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-[#00f0ff]/40 to-transparent"></div>
        </div>

        {/* Main Headline */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="font-futura text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] uppercase text-white mb-6">
            MENGEMBANGKAN APLIKASI WEB{" "}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#0055ff] p3-text-glow">
              MODERN &amp; BERDAYA TINGGI
            </span>
          </h1>

          <p className="font-helvetica text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            Halo, saya <span className="text-[#00f0ff] font-semibold">Wildan (Ergara)</span> — seorang{" "}
            <span className="text-white font-medium">Full-Stack Web Developer</span> yang berfokus menciptakan antarmuka interaktif, arsitektur kode bersih, serta solusi digital yang adaptif dan estetik.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
            <a
              href="#biodata"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 font-futura text-sm font-bold tracking-widest uppercase text-[#020612] bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] hover:from-white hover:to-[#00f0ff] transform -skew-x-12 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)]"
            >
              <span className="inline-flex items-center gap-2 transform skew-x-12">
                <span>JELAJAHI BIODATA</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a
              href="#skills"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 font-futura text-sm font-bold tracking-widest uppercase text-white bg-[#04102c]/80 hover:bg-[#0055ff]/20 border border-[#00f0ff]/40 hover:border-[#00f0ff] transform -skew-x-12 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 transform skew-x-12 text-[#00f0ff] group-hover:text-white">
                <span>LIHAT SKILLS</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* P3 HUD Metric Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#00f0ff]/20">
          
          <div className="relative p-4 rounded-sm bg-[#040e26]/80 border border-[#00f0ff]/20 hover:border-[#00f0ff]/60 transition-all p3-glow-cyan/20 group">
            <div className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase mb-1">
              // ROLE CLASSIFICATION
            </div>
            <div className="font-futura text-xl font-black text-white group-hover:text-[#00f0ff] transition-colors">
              FULL-STACK
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Frontend &amp; Backend Engineering
            </div>
          </div>

          <div className="relative p-4 rounded-sm bg-[#040e26]/80 border border-[#00f0ff]/20 hover:border-[#00f0ff]/60 transition-all p3-glow-cyan/20 group">
            <div className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase mb-1">
              // CORE STACK
            </div>
            <div className="font-futura text-xl font-black text-white group-hover:text-[#00f0ff] transition-colors">
              NEXT.JS &amp; TS
            </div>
            <div className="text-xs text-slate-400 mt-1">
              React 19, TypeScript, Tailwind CSS
            </div>
          </div>

          <div className="relative p-4 rounded-sm bg-[#040e26]/80 border border-[#00f0ff]/20 hover:border-[#00f0ff]/60 transition-all p3-glow-cyan/20 group">
            <div className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase mb-1">
              // DESIGN AESTHETIC
            </div>
            <div className="font-futura text-xl font-black text-white group-hover:text-[#00f0ff] transition-colors">
              PERSONA RELOAD
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Deep Blue &amp; Radiant Cyan Palette
            </div>
          </div>

          <div className="relative p-4 rounded-sm bg-[#040e26]/80 border border-[#00f0ff]/20 hover:border-[#00f0ff]/60 transition-all p3-glow-cyan/20 group">
            <div className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase mb-1">
              // OPERATIONAL STATUS
            </div>
            <div className="font-futura text-xl font-black text-[#00f0ff] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
              AVAILABLE
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Open for Projects &amp; Collaborations
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
