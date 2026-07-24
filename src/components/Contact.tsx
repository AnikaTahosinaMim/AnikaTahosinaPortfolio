'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Icons } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Let&apos;s Connect & Build Something Together
          </h3>
          <p className="text-slate-400 text-sm">
            Have a project in mind or want to discuss full-stack engineering opportunities? Reach out directly!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Feel free to send an email, call directly, or send a message via WhatsApp. I usually respond within 2-4 hours.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-2">
              
              {/* Email */}
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Icons.Email size={22} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">Email Address</span>
                  <span className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {PORTFOLIO_DATA.contact.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Icons.Phone size={22} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">Phone Number</span>
                  <span className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {PORTFOLIO_DATA.contact.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={PORTFOLIO_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Icons.Whatsapp size={22} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">WhatsApp Chat</span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {PORTFOLIO_DATA.contact.whatsapp}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Icons.MapPin size={22} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400 uppercase">Location</span>
                  <span className="text-base font-semibold text-slate-200">
                    {PORTFOLIO_DATA.contact.address}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-800 space-y-6">
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-white">Send Me a Message</h4>
                <p className="text-xs text-slate-400">Fill out the form below to drop an inquiry or project pitch.</p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Icons.Check size={24} />
                  </div>
                  <h5 className="text-lg font-bold text-white">Message Sent Successfully!</h5>
                  <p className="text-sm text-slate-300">
                    Thank you for reaching out. I will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Alex, I'd like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Icons.Send size={18} />
                        <span>Send Message Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
