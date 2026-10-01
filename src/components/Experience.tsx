import React, { useState } from 'react';
import { 
  Briefcase, Calendar, MapPin, Building, 
  CheckCircle2 
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<'All' | 'Internship' | 'Job Simulation'>('All');

  const filtered = filterType === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.type === filterType);

  return (
    <section id="experience" className="py-20 relative bg-[#080c14]/40 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Growth & Simulations</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Experience & Enterprise Simulations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Transparently organized into industry internships and rigorous enterprise job simulations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#0a0e18] p-1.5 rounded-xl border border-white/[0.08] text-xs font-mono">
            <button
              onClick={() => setFilterType('All')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === 'All'
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilterType('Internship')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === 'Internship'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Internships (2)
            </button>
            <button
              onClick={() => setFilterType('Job Simulation')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === 'Job Simulation'
                  ? 'bg-violet-500/20 text-violet-300 font-semibold border border-violet-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Job Simulations (3)
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {filtered.map((item) => {
            const isSimulation = item.type === 'Job Simulation';
            return (
              <div
                key={item.id}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] relative group hover:border-white/[0.16] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                          isSimulation
                            ? 'bg-violet-500/10 text-violet-300 border-violet-500/25'
                            : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25'
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>
                      {item.location && (
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-xl text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400 font-mono mt-0.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  {isSimulation && (
                    <div className="self-start px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-slate-400">
                      Enterprise Work Sample via Forage
                    </div>
                  )}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-slate-300">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 mr-2 self-center">Skills Applied:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical disclaimer note */}
        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          * Professional simulations are explicitly distinguished from salaried employment to maintain complete transparency with recruiters and hiring managers.
        </div>

      </div>
    </section>
  );
};
