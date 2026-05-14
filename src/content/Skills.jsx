import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { ChevronLeft, Code2, Monitor, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    colorClass: "front",
    Icon: Code2,
    skills: [
      { name: "HTML", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "CSS", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind", level: 80 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    category: "Backend",
    colorClass: "back",
    Icon: Monitor,
    skills: [
      { name: "Python", level: 90 },
      { name: "Flask", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Django", level: 75 },
      { name: "Php", level: 50 },
      { name: "Laravel", level: 30 },
    ],
  },
  {
    category: "AI & Data Science",
    colorClass: "ai",
    Icon: Cpu,
    skills: [
      { name: "pandas", level: 80 },
      { name: "NumPy", level: 75 },
      { name: "Scikit-learn", level: 70 },
      { name: "Matplotlib", level: 70 },
    ],
  },
  {
    category: "Tools & Design",
    colorClass: "tools",
    Icon: Wrench,
    skills: [
      { name: "Git", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "Wix", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
];

function SkillBar({ level, colorClass }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (fillRef.current) fillRef.current.style.width = `${level}%`;
    }, 120);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div className="h-[3px] bg-white/[0.07] rounded-full overflow-hidden">
      <div
        ref={fillRef}
        style={{ width: 0, transition: "width 0.9s cubic-bezier(.4,0,.2,1)" }}
        className={`h-full rounded-full bar-fill-${colorClass}`}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0d2218] font-mono text-[#e8ede9]">

      {/* Header */}
      <header className="flex items-center justify-between px-6 sm:px-10 py-6 border-b border-white/10">
        <Link
          to="/"
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white/90 transition-colors"
        >
          <ChevronLeft size={14} />
          Back
        </Link>
        <span className="text-base font-serif italic text-[#e8ede9]">Technical Skills</span>
        <span className="text-[11px] uppercase tracking-widest text-white/25">Portfolio</span>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto px-6 sm:px-10 py-10">
        {skillCategories.map(({ category, colorClass, Icon, skills }) => (
          <div
            key={category}
            className="bg-white/[0.04] hover:bg-white/[0.065] transition-colors border border-white/[0.08] rounded-xl p-6"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.08]">
              <div className={`w-7 h-7 rounded-md flex items-center justify-center icon-bg-${colorClass}`}>
                <Icon size={14} />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-white/50">{category}</span>
            </div>

            {/* Skills */}
            <div className="space-y-3.5">
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-[12.5px] text-[#e8ede9]">{name}</span>
                    <span className="text-[11px] text-white/30 tabular-nums">{level}%</span>
                  </div>
                  <SkillBar level={level} colorClass={colorClass} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pb-10">
        <p className="text-[11px] uppercase tracking-widest text-white/20">
          Always learning &mdash; always building
        </p>
      </div>
    </div>
  );
}