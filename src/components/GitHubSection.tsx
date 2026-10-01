import React from 'react';
import { 
  Star, ExternalLink, GitCommit, 
  BookMarked 
} from 'lucide-react';
import { PERSONAL_INFO, INITIAL_STATS, FEATURED_REPOSITORIES } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const GitHubSection: React.FC = () => {
  // Generate a realistic 52-week activity contribution visual grid
  const weeks = 28;
  const daysPerWeek = 7;
  
  // Deterministic contribution pattern showing steady cadence of coding activity
  const getContributionColor = (weekIndex: number, dayIndex: number) => {
    const seed = (weekIndex * 7 + dayIndex * 13) % 100;
    if (seed < 25) return 'bg-[#161b22]'; // zero
    if (seed < 60) return 'bg-cyan-950/60 border border-cyan-800/40'; // low
    if (seed < 85) return 'bg-cyan-700/60 border border-cyan-600/50'; // medium
    return 'bg-cyan-400 border border-cyan-300'; // high
  };

  return (
    <section id="github" className="py-20 relative bg-[#070a11]/80 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
              <GithubIcon size={14} className="text-cyan-400" />
              <span>Open Source Activity & Codebases</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              GitHub Repositories & Contributions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Transparent, public source code across AI agents, socket architectures, machine learning models, and client dashboards.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs border border-white/[0.08] hover:border-cyan-500/40 transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <GithubIcon size={16} className="text-cyan-400" />
            <span>github.com/{PERSONAL_INFO.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Contribution Activity Card */}
        <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] mb-12 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              <span className="font-display font-bold text-sm text-white">
                Yearly Coding Cadence & Commit Activity
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22]" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950 border border-cyan-800/40" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-700 border border-cyan-600/50" />
              <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400" />
              <span>More</span>
            </div>
          </div>

          {/* Grid display */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[600px] justify-between py-2">
              {Array.from({ length: weeks }).map((_, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {Array.from({ length: daysPerWeek }).map((_, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-[3px] ${getContributionColor(wIdx, dIdx)} transition-colors hover:scale-125`}
                      title={`Activity log week ${wIdx + 1}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
            <div>
              Total Repositories: <span className="text-white font-bold">{INITIAL_STATS.githubRepos} Public</span>
            </div>
            <div>
              Primary Focus: <span className="text-cyan-400">Python, C++, TypeScript & React</span>
            </div>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_REPOSITORIES.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl border border-white/[0.07] flex flex-col justify-between group block"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {repo.badge}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="flex items-center gap-1.5 font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-2">
                  <BookMarked className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{repo.name}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  {repo.stars}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
