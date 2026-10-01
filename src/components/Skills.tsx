import React, { useState } from 'react';
import { 
  Code2, Globe, Database, Terminal, Wrench, 
  Sparkles, Search 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: { [key: string]: React.ElementType } = {
    'Languages': Code2,
    'Web Development': Globe,
    'Data Science & AI': Database,
    'CS Fundamentals': Terminal,
    'Tools & DevOps': Wrench,
  };

  const displayedCategories = SKILL_CATEGORIES.map(cat => {
    let filtered = cat.skills;
    if (searchQuery.trim()) {
      filtered = filtered.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return {
      ...cat,
      skills: filtered,
    };
  }).filter(cat => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Toolbelt</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Skills & Core Competencies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Categorized by domain without arbitrary percentage bars. Focused on demonstrated tools used in actual software and pipelines.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. C++, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/80 border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20'
                : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.title] || Code2;
            const isSelected = selectedCategory === cat.title;
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = categoryIcons[cat.title] || Code2;
            return (
              <div
                key={cat.title}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] relative group"
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                        skill.highlight
                          ? 'bg-cyan-500/10 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20'
                          : 'bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Note */}
        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          * Highlighted items represent primary daily production tools used across active projects and algorithm contests.
        </div>

      </div>
    </section>
  );
};
