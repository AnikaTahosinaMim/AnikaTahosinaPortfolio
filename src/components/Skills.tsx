'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Skill } from '@/data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'State & Data', 'Backend', 'Tools & DevOps'];

  const filteredSkills = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Skills & Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Technical Stack & Capabilities
          </h3>
          <p className="text-slate-400 text-sm">
            Proficiency across modern web engineering technologies and state management frameworks
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: Skill, idx: number) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">{skill.name}</h4>
                  <span className="text-xs text-cyan-400 font-mono">{skill.category}</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden p-0.5 border border-slate-800">
                <div
                  className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
