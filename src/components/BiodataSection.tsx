"use client";

import React from "react";

export default function BiodataSection() {
  const bioDetails = [
    { label: "NAMA LENGKAP", value: "Wildan (Ergara)", highlight: true },
    { label: "PANGGILAN", value: "Wildan / Ergara", highlight: false },
    { label: "LOKASI / DOMISILI", value: "Indonesia", highlight: false },
    { label: "STATUS KERJA", value: "Tersedia (Full-time & Freelance)", highlight: true },
    { label: "PENDIDIKAN", value: "Teknik Informatika / Software Engineering", highlight: false },
    { label: "BAHASA", value: "Bahasa Indonesia (Native), English (Working)", highlight: false },
    { label: "FOKUS UTAMA", value: "Full-Stack Development, Modern UI/UX, Scalable Systems", highlight: false },
    { label: "MINAT LAIN", value: "Game Aesthetic UI, Performance Tuning, Developer Tools", highlight: false },
  ];

  return (
    <section id="biodata" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Section Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00f0ff] uppercase mb-2">
            <span>// SECTION 01</span>
            <span className="w-8 h-[1px] bg-[#00f0ff]"></span>
            <span>IDENTITAS &amp; PROFIL</span>
          </div>
          <h2 className="font-futura text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            BIODATA <span className="text-[#00f0ff] p3-text-glow">OPERATIF</span>
          </h2>
          <p className="font-helvetica text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Informasi komprehensif mengenai latar belakang, identitas diri, dan visi profesional dalam rekayasa perangkat lunak.
          </p>
        </div>

        {/* Dossier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: P3 Reload Character Card / ID Badge */}
          <div className="lg:col-span-4 relative group">
            <div className="relative rounded-sm bg-gradient-to-b from-[#0055ff]/30 via-[#040e29] to-[#020612] p-[1.5px] border border-[#00f0ff]/40 shadow-[0_0_30px_rgba(0,120,255,0.25)]">
              <div className="bg-[#030b20] p-6 rounded-sm relative overflow-hidden">
                
                {/* Diagonal background watermark */}
                <div className="absolute -right-8 -bottom-8 font-futura text-7xl font-black text-[#0055ff]/10 tracking-widest pointer-events-none select-none">
                  S.E.E.S
                </div>

                {/* Top ID Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#00f0ff]/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#00f0ff] rounded-sm transform rotate-45"></span>
                    <span className="font-mono text-xs text-[#00f0ff] tracking-widest font-bold">
                      ID: ERG-03-P3R
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-sm bg-[#0055ff]/30 text-[#38bdf8] border border-[#00f0ff]/40 text-[10px] font-mono tracking-wider">
                    RANK S
                  </span>
                </div>

                {/* Persona Avatar Silhouette / Crest */}
                <div className="my-6 relative flex flex-col items-center justify-center p-8 rounded-sm bg-gradient-to-br from-[#06194a] to-[#020817] border border-[#00f0ff]/30 group-hover:border-[#00f0ff]/70 transition-colors">
                  <div className="w-28 h-28 rounded-full border-2 border-[#00f0ff] p-1 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.5)]">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#0055ff] to-[#00f0ff] flex items-center justify-center text-4xl font-black font-futura text-[#020612]">
                      W
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-futura text-xl font-bold tracking-wider text-white">
                      WILDAN
                    </div>
                    <div className="text-xs font-mono text-[#00f0ff] tracking-widest uppercase mt-0.5">
                      CODE ARCHITECT
                    </div>
                  </div>
                </div>

                {/* Character Persona Stats / Traits */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span className="text-slate-400">ARCANA</span>
                    <span className="text-white font-semibold tracking-wider text-[#00f0ff]">
                      00 // THE FOOL (INFINITE POTENTIAL)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span className="text-slate-400">SPECIALIZATION</span>
                    <span className="text-slate-200">FULL-STACK REACT / NODE</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800">
                    <span className="text-slate-400">EXPERIENCE</span>
                    <span className="text-slate-200">CONTINUOUS DEV</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">AGILITY</span>
                    <span className="text-[#00f0ff] font-bold">MAX RATE</span>
                  </div>
                </div>

                {/* Bottom Card Tag */}
                <div className="mt-6 pt-4 border-t border-[#00f0ff]/20 text-center">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400">
                    AUTHORIZED BY S.E.E.S. OPERATIONS
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biodata and Personal Dossier */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Summary Introduction Box */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#040e29]/90 border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,140,255,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0055ff]/10 rounded-bl-full pointer-events-none" />
              
              <div className="text-xs font-mono text-[#00f0ff] tracking-widest uppercase mb-3">
                // PROFIL &amp; RINGKASAN DIRI
              </div>

              <p className="font-helvetica text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
                Saya adalah seorang software engineer yang antusias terhadap pengembangan web modern berorientasi masa depan. Menggabungkan ketelitian algoritma dengan cita rasa visual berkualitas tinggi, saya selalu berupaya menciptakan platform web yang tidak hanya andal dan efisien di sisi arsitektur, melainkan juga menghadirkan pengalaman pengguna (*user experience*) yang memikat.
              </p>

              <p className="font-helvetica text-slate-400 text-sm sm:text-base leading-relaxed">
                Terinspirasi oleh filosofi presisi dan estetika berani — seperti halnya dunia <em>Persona 3 Reload</em> — setiap baris kode yang saya rancang ditujukan untuk performa maksimal, skalabilitas tinggi, serta kemudahan pemeliharaan jangka panjang.
              </p>
            </div>

            {/* Structured Biodata Table / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bioDetails.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-sm border transition-all duration-200 ${
                    item.highlight
                      ? "bg-[#06153d]/90 border-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                      : "bg-[#030c24]/80 border-slate-800 hover:border-[#00f0ff]/30"
                  }`}
                >
                  <div className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase mb-1">
                    {item.label}
                  </div>
                  <div className={`font-helvetica text-sm sm:text-base font-medium ${item.highlight ? "text-white font-semibold" : "text-slate-200"}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy / Mindset Banner */}
            <div className="p-5 rounded-sm bg-gradient-to-r from-[#0055ff]/25 via-[#031338] to-[#00f0ff]/10 border-l-4 border-l-[#00f0ff] border-y border-r border-[#00f0ff]/20">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#00f0ff] font-serif">“</div>
                <div>
                  <div className="font-futura text-sm sm:text-base font-bold tracking-wide text-white uppercase">
                    MEMENTO MORI // FILOSOFI PENGEMBANGAN
                  </div>
                  <p className="font-helvetica text-xs sm:text-sm text-slate-300 mt-1 italic">
                    Waktu pengembangan selalu berharga. Oleh karenanya, dedikasi penuh diarahkan untuk menghasilkan karya terbaik yang menjawab kebutuhan nyata pengguna dan dapat dibanggakan.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
