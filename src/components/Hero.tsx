'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Icons } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Icons.Github size={20} />;
      case 'linkedin': return <Icons.Linkedin size={20} />;
      case 'twitter': return <Icons.Twitter size={20} />;
      case 'facebook': return <Icons.Facebook size={20} />;
      case 'whatsapp': return <Icons.Whatsapp size={20} />;
      default: return <Icons.Email size={20} />;
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-cyan rounded-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] glow-purple rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Designation */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.availability}</span>
            </div>

            {/* Main Headline & Designation */}
            <div className="space-y-3">
              <h2 className="text-sm md:text-base font-mono text-cyan-400 font-medium uppercase tracking-widest">
                Hello, I&apos;m {PORTFOLIO_DATA.personal.name}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                <span className="block">{PORTFOLIO_DATA.personal.title}</span>
                <span className="text-gradient block mt-2">{PORTFOLIO_DATA.personal.designation}</span>
              </h1>
              <p className="text-xs sm:text-sm text-cyan-300/80 font-mono tracking-wide">
                {PORTFOLIO_DATA.personal.secondaryDesignation}
              </p>
            </div>

            {/* Intro Bio */}
            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {PORTFOLIO_DATA.personal.heroSummary}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'RTK Query', 'Recharts', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900/80 text-slate-300 border border-slate-800">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons: Resume Download & Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95"
              >
                <Icons.Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                <span>View / Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-2xl bg-slate-900/80 text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all shadow-md"
              >
                <Icons.Email size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-6 border-t border-slate-800/80">
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                Connect With Me
              </span>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {PORTFOLIO_DATA.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-3 rounded-xl bg-slate-900/80 text-slate-400 border border-slate-800/80 ${social.color} hover:bg-slate-800/80 hover:scale-110 transition-all shadow-md group`}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Animated Outer Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 blur-xl opacity-60 animate-pulse-slow" />
              
              {/* Photo Frame */}
              <div className="relative w-full h-full rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-500/40 via-indigo-500/40 to-purple-500/40 border border-cyan-500/30 glass-card shadow-2xl overflow-hidden group">
                <Image
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  fill
                  priority
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Metric Pill 1 */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-cyan-500/30 text-white text-xs font-semibold shadow-lg flex items-center gap-2">
                  <Icons.GraduationCap size={14} className="text-cyan-400" />
                  <span>Running</span>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-indigo-500/30 text-white text-xs font-semibold shadow-lg flex items-center gap-2">
                  <Icons.Check size={14} className="text-emerald-400" />
                  <span>{PORTFOLIO_DATA.personal.projectsCompleted} Projects Built</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
