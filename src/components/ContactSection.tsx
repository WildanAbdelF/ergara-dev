"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "wildan.ergara@example.com"; // Bisa diganti user sesuai kebutuhan

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kontak" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00f0ff] uppercase mb-2">
            <span>// SECTION 04</span>
            <span className="w-8 h-[1px] bg-[#00f0ff]"></span>
            <span>SALURAN TRANSMISI</span>
          </div>
          <h2 className="font-futura text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            HUBUNGI <span className="text-[#00f0ff] p3-text-glow">SAYA</span>
          </h2>
          <p className="font-helvetica text-slate-300 mt-2 text-sm sm:text-base">
            Tertarik mendiskusikan peluang proyek, kolaborasi pengembangan aplikasi web, atau sekadar bertukar ide teknologi? Kirimkan pesan sekarang.
          </p>
        </div>

        {/* Contact Terminal Card */}
        <div className="max-w-3xl mx-auto rounded-sm bg-gradient-to-b from-[#06153d] to-[#020716] border border-[#00f0ff]/40 p-6 sm:p-10 shadow-[0_0_35px_rgba(0,140,255,0.25)] relative overflow-hidden">
          
          {/* Top HUD Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#00f0ff]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#00f0ff] rounded-sm transform rotate-45"></span>
              <span className="font-mono text-xs text-[#00f0ff] tracking-widest font-bold">
                COMMUNICATION RELAY // S.E.E.S. NETWORK
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-mono text-emerald-300 tracking-wider">
                CH-03 ACTIVE
              </span>
            </div>
          </div>

          <div className="text-center space-y-6">
            
            {/* Direct Email Box */}
            <div className="p-4 sm:p-6 rounded-sm bg-[#03091c] border border-dashed border-[#00f0ff]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase">
                  DIRECT EMAIL DISPATCH
                </div>
                <div className="font-mono text-sm sm:text-lg font-bold text-white tracking-wide">
                  {email}
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto px-4 py-2 font-futura text-xs tracking-wider uppercase font-bold text-[#020612] bg-[#00f0ff] hover:bg-white transition-all transform -skew-x-6"
                >
                  <span className="block transform skew-x-6">
                    {copied ? "TERSALIN! ✓" : "SALIN EMAIL"}
                  </span>
                </button>
                <a
                  href={`mailto:${email}`}
                  className="w-full sm:w-auto px-4 py-2 font-futura text-xs tracking-wider uppercase font-bold text-white bg-[#0055ff] hover:bg-[#0044cc] transition-all transform -skew-x-6"
                >
                  <span className="block transform skew-x-6">KIRIM PESAN</span>
                </a>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-[#040e29]/90 border border-slate-800 hover:border-[#00f0ff]/50 transition-all group flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#00f0ff] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="font-futura text-xs tracking-wider uppercase font-bold text-slate-200 group-hover:text-[#00f0ff]">
                  GITHUB
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-[#040e29]/90 border border-slate-800 hover:border-[#00f0ff]/50 transition-all group flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#00f0ff] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span className="font-futura text-xs tracking-wider uppercase font-bold text-slate-200 group-hover:text-[#00f0ff]">
                  LINKEDIN
                </span>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-[#040e29]/90 border border-slate-800 hover:border-[#00f0ff]/50 transition-all group flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#00f0ff] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24" />
                </svg>
                <span className="font-futura text-xs tracking-wider uppercase font-bold text-slate-200 group-hover:text-[#00f0ff]">
                  WHATSAPP
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
