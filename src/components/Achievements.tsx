import React, { useState } from 'react';
import { 
  Trophy, BookmarkCheck, FileCheck 
} from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [certFilter, setCertFilter] = useState<string>('All');
  const certCategories = ['All', 'Python', 'Software Engineering', 'Data Analytics', 'Data Science', 'Web Development'];

  const filteredCerts = certFilter === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === certFilter);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors, Competitions & Credentials</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Achievements & Hackathons
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Verified competitive milestones, hackathon engineering prototypes, and certified coursework.
          </p>
        </div>

        {/* 4 Major Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between relative group hover:border-violet-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-violet-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-cyan-400 mb-3">
                  {item.issuer}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.disclaimer && (
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/[0.06] text-[11px] font-mono text-slate-400 mb-4">
                    {item.disclaimer}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <BookmarkCheck className="w-4 h-4" />
                <span>Verified Credentials</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mt-1">
                Certifications & Accreditations
              </h3>
            </div>

            {/* Cert category filter */}
            <div className="flex flex-wrap gap-1 text-xs font-mono">
              {certCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCertFilter(cat)}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    certFilter === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium'
                      : 'text-slate-400 hover:text-white bg-white/[0.02]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-[#090d16] border border-white/[0.06] hover:border-white/[0.14] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="text-cyan-400">{cert.category}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="font-display font-semibold text-sm text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {cert.provider}
                  </p>
                </div>
                
                <div className="pt-3 mt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-emerald-400">
                  <span className="flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5" />
                    Verified Completion
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
