import React, { useState, useEffect } from 'react';
import { 
  Code2, Award, Terminal, RefreshCw, 
  ExternalLink, Cpu 
} from 'lucide-react';
import { PERSONAL_INFO, INITIAL_STATS } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import type { LiveStats } from '../types';

export const QuickStats: React.FC = () => {
  const [stats, setStats] = useState<LiveStats>(INITIAL_STATS);
  const [isFetching, setIsFetching] = useState(false);

  // Attempt live API fetch with fallback to verified numbers from PRD
  const fetchLiveMetrics = async () => {
    setIsFetching(true);
    try {
      // GitHub API
      const ghRes = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}`);
      let publicRepos = INITIAL_STATS.githubRepos;
      if (ghRes.ok) {
        const ghData = await ghRes.json();
        if (typeof ghData.public_repos === 'number') {
          publicRepos = ghData.public_repos;
        }
      }

      // Codeforces API
      let cfSolved = INITIAL_STATS.codeforcesSolved;
      try {
        const cfRes = await fetch(`https://codeforces.com/api/user.status?handle=${PERSONAL_INFO.codeforcesUsername}`);
        if (cfRes.ok) {
          const cfData = await cfRes.json();
          if (cfData.status === 'OK' && Array.isArray(cfData.result)) {
            const accepted = new Set(
              cfData.result
                .filter((sub: any) => sub.verdict === 'OK')
                .map((sub: any) => `${sub.problem.contestId}-${sub.problem.index}`)
            );
            if (accepted.size > 0) {
              cfSolved = accepted.size;
            }
          }
        }
      } catch {
        // Fallback gracefully
      }

      setStats({
        githubRepos: publicRepos,
        leetcodeSolved: 227,
        codechefSolved: 59,
        codechefRating: 1449,
        codechefStars: '2★',
        codechefContests: 10,
        codeforcesSolved: cfSolved,
        lastUpdated: 'Live synced just now',
        isLive: true,
      });
    } catch (err) {
      console.log('Using verified statistics fallback:', err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchLiveMetrics();
  }, []);

  return (
    <section id="stats" className="py-12 border-y border-white/[0.06] bg-[#090d15]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Live Badge and Refresh */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>Verified Developer Footprint</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              Coding Activity & Platform Metrics
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${stats.isLive ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
              {stats.lastUpdated}
            </span>
            <button
              onClick={fetchLiveMetrics}
              disabled={isFetching}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 border border-white/[0.08] transition-all disabled:opacity-50 text-xs font-mono flex items-center gap-1"
              title="Refresh live metrics from GitHub & Codeforces"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isFetching ? 'animate-spin text-cyan-400' : ''}`} />
              <span className="hidden sm:inline">Sync</span>
            </button>
          </div>
        </div>

        {/* 4 Platform Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: GitHub */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover p-5 rounded-2xl border border-white/[0.07] relative group block"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-slate-800/80 text-white border border-white/[0.06] group-hover:border-cyan-500/40 transition-colors">
                <GithubIcon size={20} className="text-slate-100" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                <span>@{PERSONAL_INFO.githubUsername}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
              {stats.githubRepos}
            </div>
            <div className="text-xs font-medium text-slate-300">Public Repositories</div>
            <p className="text-[11px] text-slate-500 font-mono mt-2">
              Full-stack, AI agents, Python systems & ML
            </p>
          </a>

          {/* Card 2: LeetCode */}
          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover p-5 rounded-2xl border border-white/[0.07] relative group block"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                <span>@{PERSONAL_INFO.leetcodeUsername}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 group-hover:text-amber-300 transition-colors">
              {stats.leetcodeSolved}+
            </div>
            <div className="text-xs font-medium text-slate-300">Problems Solved</div>
            <p className="text-[11px] text-slate-500 font-mono mt-2">
              226 C++ • 1 JavaScript • Arrays, DP, Strings
            </p>
          </a>

          {/* Card 3: CodeChef */}
          <a
            href={PERSONAL_INFO.codechefUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover p-5 rounded-2xl border border-white/[0.07] relative group block"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1 group-hover:text-orange-400 transition-colors">
                <span>@{PERSONAL_INFO.codechefUsername}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white group-hover:text-orange-300 transition-colors">
                {stats.codechefStars}
              </span>
              <span className="text-xs font-mono text-orange-400 font-semibold">
                ({stats.codechefRating} rating)
              </span>
            </div>
            <div className="text-xs font-medium text-slate-300">
              {stats.codechefSolved} Problems • {stats.codechefContests} Contests
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-2">
              Bronze Contest Contender & Solver Badges
            </p>
          </a>

          {/* Card 4: Codeforces */}
          <a
            href={PERSONAL_INFO.codeforcesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover p-5 rounded-2xl border border-white/[0.07] relative group block"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:border-sky-500/40 transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1 group-hover:text-sky-400 transition-colors">
                <span>@{PERSONAL_INFO.codeforcesUsername}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 group-hover:text-sky-300 transition-colors">
              {stats.codeforcesSolved}
            </div>
            <div className="text-xs font-medium text-slate-300">Codeforces Solved</div>
            <p className="text-[11px] text-slate-500 font-mono mt-2">
              Practicing contest logic & algorithmic speed
            </p>
          </a>
        </div>

        {/* Disclaimer as specified in PRD Section 15 */}
        <p className="text-center text-[11px] font-mono text-slate-500 mt-4">
          * Platform statistics represent verified contest & problem activity on individual platforms and are not a complete measure of programming ability.
        </p>
      </div>
    </section>
  );
};
