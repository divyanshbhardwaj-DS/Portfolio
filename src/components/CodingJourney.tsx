import React from 'react';
import { 
  Code2, Award, Cpu, 
  ExternalLink, CheckCircle, Binary, ShieldAlert 
} from 'lucide-react';
import { PERSONAL_INFO, INITIAL_STATS, DSA_TOPICS } from '../data/portfolioData';

export const CodingJourney: React.FC = () => {
  return (
    <section id="coding" className="py-20 relative bg-[#080c14]/60 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            DSA & Competitive Programming
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Consistent algorithmic discipline across LeetCode, CodeChef, and Codeforces in C++ and JavaScript.
          </p>
        </div>

        {/* 4 Platform Detail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: LeetCode Deep Dive */}
          <div className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">LeetCode</h3>
                    <span className="text-[11px] font-mono text-slate-400">@{PERSONAL_INFO.leetcodeUsername}</span>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-white/[0.05] transition-colors"
                  title="Open LeetCode Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-display font-extrabold text-amber-400">
                  {INITIAL_STATS.leetcodeSolved} Solved
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Language Distribution: <span className="text-white font-medium">226 C++</span> • <span className="text-white font-medium">1 JavaScript</span>
                </div>
              </div>

              {/* Solved Progress Bar */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Target Milestones</span>
                  <span className="text-amber-400">227 / 300</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(INITIAL_STATS.leetcodeSolved / 300) * 100}%` }}
                  />
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Strong focus on Two Pointers, Hash Maps, and Binary Search</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Actively building Dynamic Programming pattern recognition</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-medium text-xs border border-amber-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: CodeChef Deep Dive */}
          <div className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">CodeChef</h3>
                    <span className="text-[11px] font-mono text-slate-400">@{PERSONAL_INFO.codechefUsername}</span>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.codechefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-orange-400 hover:bg-white/[0.05] transition-colors"
                  title="Open CodeChef Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-display font-extrabold text-orange-400">
                  {INITIAL_STATS.codechefStars}
                </span>
                <span className="text-base font-mono text-slate-200 font-semibold">
                  Peak Rating: {INITIAL_STATS.codechefRating}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-slate-400 text-[10px]">PROBLEMS</div>
                  <div className="text-white font-bold text-base mt-0.5">{INITIAL_STATS.codechefSolved}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-slate-400 text-[10px]">CONTESTS</div>
                  <div className="text-white font-bold text-base mt-0.5">{INITIAL_STATS.codechefContests}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <span className="text-slate-400 text-[11px] font-mono block">Verified Platform Badges:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-300 font-mono text-[11px] flex items-center gap-1">
                    🥉 Contest Contender (Bronze)
                  </span>
                  <span className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-300 font-mono text-[11px] flex items-center gap-1">
                    🥉 Problem Solver (Bronze)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={PERSONAL_INFO.codechefUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 font-medium text-xs border border-orange-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View CodeChef Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Codeforces & Competitive Discipline */}
          <div className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">Codeforces</h3>
                    <span className="text-[11px] font-mono text-slate-400">@{PERSONAL_INFO.codeforcesUsername}</span>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.codeforcesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-white/[0.05] transition-colors"
                  title="Open Codeforces Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-display font-extrabold text-sky-400">
                  {INITIAL_STATS.codeforcesSolved} Solved
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Active training in contest problem analysis & speed
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/20 text-xs text-slate-300 space-y-2 mb-4">
                <p>
                  Transitioning from platform DSA to fast-paced round timing, mathematical deduction, and edge-case handling.
                </p>
                <div className="text-[11px] font-mono text-sky-300">
                  Primary Language: Modern C++ (Fast I/O & STL)
                </div>
              </div>

              <div className="text-xs text-slate-400">
                Regularly practicing Div 2/Div 3 problem sets.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={PERSONAL_INFO.codeforcesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 font-medium text-xs border border-sky-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Codeforces Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Competitive Programming Activity Dashboard (PRD Section 15) */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                Activity Distribution
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                Solved Problem Volume by Platform
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Total Recorded Solutions: ~{INITIAL_STATS.leetcodeSolved + INITIAL_STATS.codechefSolved + INITIAL_STATS.codeforcesSolved}
            </span>
          </div>

          {/* Activity Meters */}
          <div className="space-y-4 font-mono text-xs">
            {/* LeetCode */}
            <div>
              <div className="flex justify-between text-slate-300 mb-1.5">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  LeetCode (C++ & JS)
                </span>
                <span className="text-amber-400 font-bold">{INITIAL_STATS.leetcodeSolved} solved</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                  style={{ width: `${(INITIAL_STATS.leetcodeSolved / 250) * 100}%` }}
                />
              </div>
            </div>

            {/* CodeChef */}
            <div>
              <div className="flex justify-between text-slate-300 mb-1.5">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                  CodeChef (2★ • 1449 rating)
                </span>
                <span className="text-orange-400 font-bold">{INITIAL_STATS.codechefSolved} solved</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                  style={{ width: `${(INITIAL_STATS.codechefSolved / 250) * 100}%` }}
                />
              </div>
            </div>

            {/* Codeforces */}
            <div>
              <div className="flex justify-between text-slate-300 mb-1.5">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                  Codeforces (divysharma8547)
                </span>
                <span className="text-sky-400 font-bold">{INITIAL_STATS.codeforcesSolved} solved</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"
                  style={{ width: `${(INITIAL_STATS.codeforcesSolved / 250) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* DSA Topic Tag Grid */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <span className="text-xs font-mono text-slate-400 block mb-3">
              Frequently Practiced Data Structures & Algorithms Topics:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {DSA_TOPICS.map((topic, i) => (
                <div 
                  key={i}
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                >
                  <span className="text-xs text-slate-200">{topic.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-cyan-300">
                    {topic.count}+
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ethical / Accuracy Disclaimer as required by PRD Section 15 */}
        <div className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] text-xs text-slate-400 font-mono">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            Disclaimer: Platform statistics represent verified contest submissions and practice activity on individual competitive programming judges. They demonstrate ongoing problem-solving engagement rather than a static ranking of software engineering competency.
          </p>
        </div>

      </div>
    </section>
  );
};
