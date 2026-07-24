'use client';

import React from 'react';
import { PORTFOLIO_DATA, Education as EducationType } from '@/data/portfolioData';
import { Icons } from './Icons';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono uppercase tracking-widest">
            <Icons.GraduationCap size={16} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-sm">
            My educational background, academic achievements, and core coursework in computer science
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((edu: EducationType, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-500 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10">
                    <Icons.GraduationCap size={18} />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] w-full">
                    <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800 space-y-4">
                      
                      {/* Period Badge & Result */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {edu.period}
                        </span>
                        {edu.result && (
                          <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold">
                            {edu.result}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-cyan-300 text-sm font-medium">{edu.institution} • {edu.location}</p>
                      </div>

                      {/* Bullet points */}
                      {edu.description && edu.description.length > 0 && (
                        <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                          {edu.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▸</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Key Courses */}
                      {edu.courses && edu.courses.length > 0 && (
                        <div className="space-y-2 pt-3 border-t border-slate-800/80">
                          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                            Key Courses:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.courses.map((course, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

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
