import React from 'react';
import { Compass } from 'lucide-react';
import { LEARNING_TIMELINE } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth & Progression Trajectory</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            The Learning Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A chronological roadmap from fundamental programming principles to competitive milestones and production architectures.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical Stack */}
        <div className="relative border-l-2 border-cyan-500/20 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-8 space-y-12">
          {LEARNING_TIMELINE.map((item) => (
            <div key={item.year} className="relative group">
              
              {/* Dot on the timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#07090e] border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] group-hover:border-cyan-500/30 transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono font-bold text-sm text-cyan-300 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/25">
                    {item.year}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-3">
                  {item.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/[0.06]">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className="text-cyan-400">▹</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
