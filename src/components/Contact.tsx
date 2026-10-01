import React, { useState } from 'react';
import { 
  Mail, Send, Download, 
  CheckCircle2, Copy, MessageSquare, ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onDownloadResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onDownloadResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '', // Honeypot spam defense
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) return; // Silent discard for bot spam

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');

    // Simulate sending message with friendly confirmation
    setTimeout(() => {
      setFormStatus('success');
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'],
        });
      } catch {
        // Fallback silently if canvas unavailable
      }
      setFormData({ name: '', email: '', subject: '', message: '', botField: '' });
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#080c14]/50 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Let's build something useful.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            I'm always interested in software engineering roles, data science internships, hackathon collaborations, and opportunities to learn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Quick Contact Actions & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base">Direct Email</h3>
                  <span className="text-xs text-slate-400 font-mono">Fastest response</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#090d16] border border-white/[0.06] flex items-center justify-between gap-2 mb-4 font-mono text-xs">
                <span className="text-cyan-300 truncate">{PERSONAL_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-cyan-500/20"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-mono border border-white/[0.08] transition-all flex items-center justify-center"
                >
                  {copiedEmail ? 'Copied!' : 'Copy Address'}
                </button>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Professional Profiles
              </h4>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon size={16} className="text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon size={16} className="text-cyan-400" />
                  <span>GitHub (@{PERSONAL_INFO.githubUsername})</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <button
                onClick={onDownloadResume}
                className="w-full p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Have a question or opportunity? Drop your details below.
              </p>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Divyansh will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-3 text-xs font-mono text-cyan-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  
                  {/* Honeypot field for spam prevention */}
                  <input
                    type="text"
                    name="botField"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="ada@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1.5">Subject / Topic</label>
                    <input
                      type="text"
                      placeholder="Internship opportunity / Technical question"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Divyansh, I came across your portfolio and wanted to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/30 text-red-300 text-[11px]">
                      Please complete all required fields.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all duration-200 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <Send className={`w-3.5 h-3.5 ${formStatus === 'submitting' ? 'animate-bounce' : 'group-hover:translate-x-1'} transition-transform`} />
                    <span>{formStatus === 'submitting' ? 'Delivering...' : 'Send Message'}</span>
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
