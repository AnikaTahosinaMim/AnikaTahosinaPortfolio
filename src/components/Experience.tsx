'use client';

import React from 'react';
import { PORTFOLIO_DATA, Experience as ExperienceType } from '@/data/portfolioData';
import { Icons } from './Icons';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Career Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Work Experience & Track Record
          </h3>
          <p className="text-slate-400 text-sm">
            Professional background leading full-stack web development initiatives and engineering teams
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp: ExperienceType, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-500 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10">
                    <Icons.Briefcase size={16} />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] w-full">
                    <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800 space-y-4">
                      
                      {/* Period Badge & Role */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">{exp.type}</span>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className="text-cyan-300 text-sm font-medium">{exp.company} • {exp.location}</p>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Applied Skills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
