import React from 'react';
import ExtraTool from "./ExtraTool";
import TechnicalSkill from "./TechnicalSkill";

const professionalSkills = [
  { name: 'Problem Solving', percentage: 60 },
  { name: 'Teamwork', percentage: 85 },
  { name: 'Communication', percentage: 70 },
  { name: 'Project Management', percentage: 75 }
];

function PieChart({ percentage, size = 60, stroke = 8, color = 'var(--accent)' }) {
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        <circle cx={cx} cy={cy} r={radius} stroke="var(--border-color)" strokeWidth={stroke} fill="none" opacity="0.3" />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="absolute text-[10px] font-black text-[var(--text-main)]">{percentage}%</span>
    </div>
  );
}

export default function TechnologyUsed() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            My Tech Stack
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6">
            Technologies <span className="text-[var(--accent)]">I Work With</span>
          </h3>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            I leverage a modern ecosystem of tools and technologies to build high-performance, 
            accessible, and scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <TechnicalSkill />
          </div>

          <div className="flex flex-col gap-8">
            <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl shadow-xl">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                  <i className="fas fa-chart-pie"></i>
                </span>
                Professional Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {professionalSkills.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-[var(--bg-main)] transition-colors duration-300">
                    <PieChart percentage={s.percentage} color={["var(--accent)", "#8b5cf6", "#06b6d4", "#f59e0b"][i % 4]} />
                    <div>
                      <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-tight mb-1">{s.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl shadow-xl flex-grow">
               <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <i className="fas fa-toolbox"></i>
                </span>
                Extra Tools
              </h4>
              <ExtraTool />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}