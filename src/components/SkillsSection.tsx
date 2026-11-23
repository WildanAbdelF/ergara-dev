"use client";

import React, { useState } from "react";

type HardSkill = {
  name: string;
  category: "frontend" | "backend" | "tools";
  level: number;
  rank: string;
  desc: string;
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "tools">("all");

  const hardSkills: HardSkill[] = [
    // Frontend
    {
      name: "Next.js (App Router)",
      category: "frontend",
      level: 92,
      rank: "RANK S",
      desc: "Server Components, Server Actions, Dynamic Routing, Metadata & Turbopack build optimization.",
    },
    {
      name: "React 19 & Hooks",
      category: "frontend",
      level: 90,
      rank: "RANK S",
      desc: "Component lifecycle, modern concurrent features, state management, dan modular UI architecture.",
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: 88,
      rank: "RANK A+",
      desc: "Strict type safety, generics, interfaces, scalable codebases, dan bug prevention.",
    },
    {
      name: "Tailwind CSS v4",
      category: "frontend",
      level: 94,
      rank: "RANK S",
      desc: "Custom theme styling, responsive fluid layouts, utility-first design, dan aesthetic crafting.",
    },
    {
      name: "HTML5 / Modern CSS",
      category: "frontend",
      level: 95,
      rank: "MAX",
      desc: "Semantic elements, accessible web standards (a11y), flexbox, grid, dan custom animations.",
    },
    {
      name: "Interactive Animations (Anime.js)",
      category: "frontend",
      level: 85,
      rank: "RANK A",
      desc: "Keyframe timing, scroll-triggered observers, easing bezier, dan dynamic UI transitions.",
    },

    // Backend
    {
      name: "Node.js & Express",
      category: "backend",
      level: 86,
      rank: "RANK A",
      desc: "RESTful API creation, middleware pipeline, asynchronous I/O, authentication, dan JSON protocols.",
    },
    {
      name: "PostgreSQL / MySQL",
      category: "backend",
      level: 84,
      rank: "RANK A",
      desc: "Relational database schema modeling, indexing, foreign keys, constraints, dan query optimization.",
    },
    {
      name: "Prisma ORM & DB Client",
      category: "backend",
      level: 85,
      rank: "RANK A",
      desc: "Type-safe database migrations, schema definitions, relations, dan robust data queries.",
    },
    {
      name: "API Design & Security",
      category: "backend",
      level: 88,
      rank: "RANK A+",
      desc: "CORS policies, rate limiting, JWT tokens, cookie sessions, error handling, dan data validation.",
    },

    // Tools & DevOps
    {
      name: "Git & GitHub",
      category: "tools",
      level: 92,
      rank: "RANK S",
      desc: "Version control workflows, branching strategy, pull requests, merge conflict resolution.",
    },
    {
      name: "Docker & Containerization",
      category: "tools",
      level: 80,
      rank: "RANK B+",
      desc: "Multi-stage Dockerfile packaging, container environment variables, dan deployment consistency.",
    },
    {
      name: "Linux CLI & Bash",
      category: "tools",
      level: 85,
      rank: "RANK A",
      desc: "Shell scripting, server navigation, package managers, file permissions, dan automated routines.",
    },
    {
      name: "Postman & API Testing",
      category: "tools",
      level: 90,
      rank: "RANK S",
      desc: "Endpoint payload inspection, environment variables, automated collection test scripts.",
    },
    {
      name: "Figma to Code Implementation",
      category: "tools",
      level: 92,
      rank: "RANK S",
      desc: "Pixel-accurate UI translation, component tokens, responsive breakpoints, dan micro-interactions.",
    },
  ];

  const softSkills = [
    {
      title: "Problem Solving & Analytical Thinking",
      arcana: "THE MAGICIAN // I",
      tagline: "Membedah masalah kompleks menjadi solusi arsitektur yang terstruktur",
      desc: "Menganalisis akar permasalahan (*root cause analysis*), memetakan edge case sebelum menulis kode, dan selalu memprioritaskan efisiensi algoritma.",
      traits: ["Root Cause Analysis", "Algorithmic Logic", "Decision Matrix"],
    },
    {
      title: "Adaptabilitas & Pembelajaran Cepat",
      arcana: "THE FOOL // 00",
      tagline: "Kesiapan menaklukkan teknologi, framework, dan paradigma baru",
      desc: "Dunia teknologi berkembang pesat; saya memiliki dorongan belajar mandiri yang agresif untuk menguasai tools terkini secara efisien tanpa kehilangan dasar fundamental.",
      traits: ["Continuous Learning", "Tech Agility", "Self-Taught Drive"],
    },
    {
      title: "Komunikasi & Kolaborasi Tim",
      arcana: "THE CHARIOT // VII",
      tagline: "Sinergi aktif dalam lingkungan pengembangan tangkas (Agile/Scrum)",
      desc: "Mampu menyampaikan argumen teknis secara jelas kepada developer lain maupun stakeholders non-teknis, serta aktif berkontribusi dalam constructive code review.",
      traits: ["Constructive Code Review", "Clarity in Technical Docs", "Team Empathy"],
    },
    {
      title: "Perhatian terhadap Detail (Craftsmanship)",
      arcana: "TEMPERANCE // XIV",
      tagline: "Presisi tinggi dalam konsistensi desain, performa, dan kebersihan kode",
      desc: "Standar tinggi terhadap UI polish, micro-interactions, clean architecture, DRY principles, dan performa render tanpa beban komputasi berlebih.",
      traits: ["Pixel Precision", "Clean Code & DRY", "UX Polish"],
    },
    {
      title: "Manajemen Waktu & Keandalan Delivery",
      arcana: "JUSTICE // XI",
      tagline: "Eksekusi proyek berorientasi deadline dengan estimasi terukur",
      desc: "Disiplin memecah milestone proyek, mengidentifikasi blocker lebih awal, serta menjaga komitmen jadwal pengiriman solusi secara konsisten.",
      traits: ["Milestone Tracking", "Early Risk Mitigation", "Reliable Delivery"],
    },
    {
      title: "Problem Ownership & Integritas",
      arcana: "THE EMPEROR // IV",
      tagline: "Tanggung jawab penuh terhadap stabilitas dan kualitas produk",
      desc: "Memiliki rasa kepemilikan yang mendalam atas setiap fitur yang dibangun, siap memantau performa pasca-rilis, dan tidak ragu membenahi technical debt.",
      traits: ["Accountability", "Quality Assurance", "Proactive Maintenance"],
    },
  ];

  const filteredHardSkills =
    activeTab === "all"
      ? hardSkills
      : hardSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00f0ff] uppercase mb-2">
            <span>// SECTION 02 &amp; 03</span>
            <span className="w-8 h-[1px] bg-[#00f0ff]"></span>
            <span>ARSENAL KOMPETENSI</span>
          </div>
          <h2 className="font-futura text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            SKILLS &amp; <span className="text-[#00f0ff] p3-text-glow">MASTERY</span>
          </h2>
          <p className="font-helvetica text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Kombinasi keahlian teknis (*Hard Skills*) berbasis ekosistem modern dan kapabilitas interpersonal (*Soft Skills*) bergaya evaluasi operatif Persona 3 Reload.
          </p>
        </div>

        {/* ================= PART 1: HARD SKILLS ================= */}
        <div className="mb-24">
          
          {/* Subheader & Interactive Category Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-[#00f0ff]/20">
            <div>
              <h3 className="font-futura text-xl sm:text-2xl font-bold tracking-wider text-white uppercase flex items-center gap-2">
                <span className="w-3 h-3 bg-[#0055ff] border border-[#00f0ff] transform rotate-45"></span>
                HARD SKILLS // ARSENAL TEKNOLOGI
              </h3>
              <span className="text-xs font-mono text-slate-400">
                Pilih filter kategori untuk melihat spesialisasi perangkat lunak
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "SEMUA" },
                { id: "frontend", label: "FRONTEND" },
                { id: "backend", label: "BACKEND & DATA" },
                { id: "tools", label: "TOOLS & DEVOPS" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 font-futura text-xs tracking-wider uppercase transition-all transform -skew-x-6 ${
                    activeTab === tab.id
                      ? "bg-[#00f0ff] text-[#020612] font-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      : "bg-[#040e29] text-slate-300 hover:text-white hover:bg-[#0055ff]/30 border border-[#00f0ff]/20"
                  }`}
                >
                  <span className="block transform skew-x-6">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hard Skills Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredHardSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-5 rounded-sm bg-[#040d24]/90 border border-[#00f0ff]/20 hover:border-[#00f0ff]/70 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] flex flex-col justify-between"
              >
                {/* Top Skill Row: Name & Rank */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-futura text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-sm bg-[#0055ff]/30 text-[#00f0ff] border border-[#00f0ff]/40 whitespace-nowrap">
                      {skill.rank}
                    </span>
                  </div>

                  <p className="font-helvetica text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                    {skill.desc}
                  </p>
                </div>

                {/* Level Meter Gauge (Persona 3 Reload style) */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1.5">
                    <span className="tracking-widest uppercase">PROFICIENCY</span>
                    <span className="text-[#00f0ff] font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Outer track */}
                  <div className="h-2 w-full bg-[#030919] rounded-none border border-[#00f0ff]/30 p-[1px] overflow-hidden">
                    {/* Inner glowing bar */}
                    <div
                      className="h-full bg-gradient-to-r from-[#0055ff] via-[#38bdf8] to-[#00f0ff] transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: SOFT SKILLS ================= */}
        <div id="soft-skills">
          
          <div className="mb-8 pb-4 border-b border-[#00f0ff]/20">
            <h3 className="font-futura text-xl sm:text-2xl font-bold tracking-wider text-white uppercase flex items-center gap-2">
              <span className="w-3 h-3 bg-[#00f0ff] border border-white transform rotate-45"></span>
              SOFT SKILLS // KARAKTER &amp; ATRIBUT OPERATIF
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Karakter interpersonal dan etos kerja yang mendukung keberhasilan proyek secara tim maupun mandiri
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((soft, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-sm bg-gradient-to-b from-[#051336]/90 via-[#030b20] to-[#020612] border border-[#00f0ff]/30 hover:border-[#00f0ff]/80 transition-all duration-300 group shadow-md hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]"
              >
                {/* Persona Arcana Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-[#00f0ff] uppercase px-2 py-0.5 rounded-sm bg-[#0055ff]/30 border border-[#00f0ff]/40">
                    {soft.arcana}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] group-hover:animate-ping"></span>
                </div>

                <h4 className="font-futura text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors mb-2">
                  {soft.title}
                </h4>

                <div className="text-xs font-mono text-[#38bdf8] mb-3 italic">
                  &gt; {soft.tagline}
                </div>

                <p className="font-helvetica text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {soft.desc}
                </p>

                {/* Key Traits Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {soft.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#020817] text-slate-300 border border-[#0055ff]/40"
                    >
                      #{trait}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
