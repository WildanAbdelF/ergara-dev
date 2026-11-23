"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#00f0ff]/20 bg-[#020510] py-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#0055ff] border border-[#00f0ff] transform -skew-x-12 flex items-center justify-center">
              <span className="font-futura text-xs font-black text-white transform skew-x-12">
                E
              </span>
            </div>
            <span className="font-futura text-sm font-bold tracking-wider text-white">
              ERGARA // RELOAD
            </span>
            <span className="text-xs font-mono text-slate-400">
              | ARCHIVED IN THE DARK HOUR
            </span>
          </div>

          {/* District Status Badge */}
          <div className="font-mono text-xs text-[#00f0ff] tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span>OPERATIONAL SECTOR: MOONLIGHT</span>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-slate-400 text-center md:text-right">
            &copy; {currentYear} Wildan (Ergara). All systems operational.
          </div>

        </div>

      </div>
    </footer>
  );
}
