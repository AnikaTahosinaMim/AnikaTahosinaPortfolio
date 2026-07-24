'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Icons } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate simple printable view or download trigger
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-cyan-500/30 p-6 md:p-8 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Icons.Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{PORTFOLIO_DATA.personal.name} — Resume</h2>
              <p className="text-xs text-slate-400">Updated: {PORTFOLIO_DATA.resume.updatedDate}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <Icons.Download size={16} />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Icons.Close size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-6 text-sm text-slate-300 print:text-black">
          {/* Header Summary */}
          <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-1">{PORTFOLIO_DATA.personal.designation}</h3>
            <p className="text-cyan-400 text-sm mb-3">{PORTFOLIO_DATA.personal.location} • {PORTFOLIO_DATA.contact.email} • {PORTFOLIO_DATA.contact.phone}</p>
            <p className="text-slate-300 leading-relaxed">{PORTFOLIO_DATA.resume.summaryText}</p>
          </div>

          {/* Technical Stack */}
          <div>
            <h4 className="text-base font-semibold text-white border-b border-slate-800 pb-2 mb-3 uppercase tracking-wider text-xs text-cyan-400">Core Technical Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-200 block text-xs mb-1">Frontend Frameworks</span>
                <span className="text-xs text-slate-400">React.js, Next.js (App Router), HTML5, Tailwind CSS</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-200 block text-xs mb-1">Languages</span>
                <span className="text-xs text-slate-400">TypeScript (Mandatory), JavaScript (ES6+), SQL</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-200 block text-xs mb-1">State & Data Query</span>
                <span className="text-xs text-slate-400">TanStack Query, RTK Query, Recharts, Chart.js</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-800">
                <span className="font-semibold text-slate-200 block text-xs mb-1">Backend & Database</span>
                <span className="text-xs text-slate-400">Node.js, Express.js, MongoDB, Mongoose, REST APIs</span>
              </div>
            </div>
          </div>

          {/* Education & Qualifications */}
          <div>
            <h4 className="text-base font-semibold text-white border-b border-slate-800 pb-2 mb-4 uppercase tracking-wider text-xs text-cyan-400">Education & Academic Qualifications</h4>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="p-4 bg-slate-900/30 rounded-xl border border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <div>
                      <h5 className="font-bold text-white text-base">{edu.degree}</h5>
                      <p className="text-cyan-400 text-xs font-medium">{edu.institution} • {edu.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {edu.result && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          {edu.result}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  {edu.description && (
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
                      {edu.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h4 className="text-base font-semibold text-white border-b border-slate-800 pb-2 mb-3 uppercase tracking-wider text-xs text-cyan-400">Featured Key Projects</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-slate-900/40 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-slate-200 text-sm mb-1">{proj.title}</h5>
                  <p className="text-xs text-slate-400 mb-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Clicking &quot;Print / Download PDF&quot; will initiate PDF export.</span>
          <button onClick={onClose} className="hover:text-slate-300">Close Window</button>
        </div>
      </div>
    </div>
  );
};
