"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "01 // BIODATA", href: "#biodata" },
    { label: "02 // HARD SKILLS", href: "#skills" },
    { label: "03 // SOFT SKILLS", href: "#soft-skills" },
    { label: "04 // KONTAK", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#020612]/85 border-b border-[#00f0ff]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Angled P3 Hexagon / Badge */}
          <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#0055ff] to-[#00f0ff] p-[1.5px] transform -skew-x-12 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#030a1c] flex items-center justify-center">
              <span className="font-futura text-lg font-black tracking-wider text-[#00f0ff] transform skew-x-12 group-hover:text-white transition-colors">
                E
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-futura text-xl font-black tracking-widest text-white group-hover:text-[#00f0ff] transition-colors">
                ERGARA
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-[#0055ff]/30 border border-[#00f0ff]/50 text-[#00f0ff] tracking-widest uppercase">
                RELOAD
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              PORTFOLIO // S.E.E.S. ARCHIVE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-3.5 py-2 font-futura text-xs tracking-wider text-slate-300 hover:text-[#00f0ff] transition-all group overflow-hidden"
            >
              <span className="relative z-10">{link.label}</span>
              {/* Bottom active hover line */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0055ff] to-[#00f0ff] transition-all duration-300 group-hover:w-full" />
              {/* Subtle hover background highlight */}
              <span className="absolute inset-0 bg-[#0055ff]/10 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        {/* Status Indicator & Quick Action */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#03112b] border border-[#00f0ff]/30 text-[11px] font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
            </span>
            <span className="tracking-wide text-slate-300">SYSTEM: ONLINE</span>
          </div>

          <a
            href="#kontak"
            className="relative px-4 py-2 font-futura text-xs font-bold tracking-widest text-[#020612] bg-[#00f0ff] hover:bg-white transition-all transform -skew-x-12 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            <span className="block transform skew-x-12">HUBUNGI SAYA</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-slate-300 hover:text-[#00f0ff] transition-colors focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030d24]/95 border-b border-[#00f0ff]/30 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="text-[11px] font-mono text-[#00f0ff] tracking-widest pb-2 border-b border-[#00f0ff]/20">
            // NAVIGATION PROTOCOL
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-futura text-sm tracking-wider text-slate-200 hover:text-[#00f0ff] transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 font-futura text-xs font-bold tracking-widest text-[#020612] bg-[#00f0ff] transform -skew-x-6"
            >
              HUBUNGI SAYA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
