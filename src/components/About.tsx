'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Icons } from './Icons';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Icons.Code className="text-cyan-400" size={24} />,
      title: "Modern Frontend Mastery",
      description: "Building responsive, accessible Next.js & React interfaces styled with Tailwind CSS and optimized for maximum speed.",
    },
    {
      icon: <Icons.Server className="text-indigo-400" size={24} />,
      title: "Robust Node/Express APIs",
      description: "Designing RESTful & GraphQL backend services in TypeScript with secure authentication, middleware, and caching.",
    },
    {
      icon: <Icons.Database className="text-emerald-400" size={24} />,
      title: "MongoDB & Data Architecture",
      description: "Structuring high-throughput NoSQL database schemas, indexing, and aggregation pipelines using Mongoose.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Engineering High-Impact Web Applications
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xl md:text-2xl font-bold text-white leading-snug">
              Specialized in End-to-End TypeScript & JavaScript Ecosystems
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether architecting complex dashboards with TanStack Query and Recharts, or crafting serverless APIs with Node.js, Express, and MongoDB, my focus is always on clean architecture, performance, and extraordinary user experiences.
            </p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="glass-card p-4 rounded-2xl text-center border border-slate-800">
                <span className="block text-2xl md:text-3xl font-extrabold text-cyan-400">Runing</span>
                <span className="text-xs text-slate-400 mt-1 block">Diploma in CSE</span>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center border border-slate-800">
                <span className="block text-2xl md:text-3xl font-extrabold text-indigo-400">{PORTFOLIO_DATA.personal.projectsCompleted}</span>
                <span className="text-xs text-slate-400 mt-1 block">Projects Built</span>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center border border-slate-800">
                <span className="block text-2xl md:text-3xl font-extrabold text-emerald-400">{PORTFOLIO_DATA.personal.happyClients}</span>
                <span className="text-xs text-slate-400 mt-1 block">Satisfied Clients</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex items-start gap-5"
              >
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h5 className="text-lg font-bold text-white">{item.title}</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
