"use client";

import React from 'react';
import { Code, Cpu, Shield, Zap, Coffee, Terminal, Layers, Box, LineChart, ExternalLink } from 'lucide-react';
import { contentForBlog } from '@/lib/constants';
import { useApp } from "@/lib/AppContext";


const Blog = () => {
  const { lang, theme } = useApp();
  const isDark = theme === "dark";
  
  const team = [
    { 
      name: contentForBlog[lang].bossName, 
      role: contentForBlog[lang].boss, 
      icon: <Terminal className="w-5 h-5" />, 
      photoUrl: "/backgrounds/boss.jpg",
      skills: ["Strategy", "Architecture"],
      bio: "The bridge between business vision and high-performance execution." 
    },
    { 
      name: "Umidjon Jumaqulov", 
      role: "Backend Dev", 
      icon: <Cpu className="w-4 h-4" />, 
      photoUrl: "/backgrounds/backend.webp",
      skills: ["Node.js", "AWS"],
      bio: "Master of high-concurrency systems and database optimization." 
    },
    { 
      name: "Shohboz Yunusaliyev", 
      role: "Frontend Dev", 
      icon: <Code className="w-4 h-4" />, 
      photoUrl: "/backgrounds/web.jpg",
      skills: ["React", "GSAP"],
      bio: "Transforming static designs into fluid interactive experiences." 
    },
    { 
      name: "Ahliyor Tojiboyev", 
      role: "Security Lead", 
      icon: <Shield className="w-4 h-4" />, 
      photoUrl: "/backgrounds/vyber.webp",
      skills: ["Pen-Test", "Docker"],
      bio: "Ensuring zero-vulnerability and 99.9% system uptime." 
    },
    { 
      name: "Bahodir Qahhoraliyev", 
      role: "Full-Stack", 
      icon: <Coffee className="w-4 h-4" />, 
      photoUrl: "/backgrounds/fullStack.png",
      skills: ["Next.js", "Python"],
      bio: "Rapid prototyping specialist turning ideas into MVP in record time." 
    },
  ];

  const t = contentForBlog[lang];

  return (
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans p-4 md:p-4  relative overflow-hidden`}>
      
      {/* Decorative Background - Reduced Intensity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 blur-[100px] opacity-20 ${isDark ? 'bg-blue-600' : 'bg-purple-400'}`}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Compact Header */}
        <header className="text-center mb-12 pt-6">
          <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg opacity-60 font-medium">{t.subtitle}</p>
        </header>

        <main>
          {/* Hero Card (The Boss) - More Compact */}
          <section className="mb-10">
            <div className="group relative w-full h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={team[0].photoUrl} 
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                alt={team[0].name}
              />
              {/* Stronger Bottom Overlay for Text Contrast */}
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-slate-950/40 to-transparent' : 'from-white via-white/40 to-transparent'}`}></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col md:flex-row justify-between items-end">
                <div>
                  <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-md mb-2 text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-blue-500/10 text-blue-700 border border-blue-500/20'}`}>
                    {team[0].icon} {team[0].role}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{team[0].name}</h3>
                  <p className="text-sm opacity-80 max-w-md">{team[0].bio}</p>
                </div>
                <div className="hidden md:flex gap-2">
                  {team[0].skills.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold border border-white/20 uppercase">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Grid (4 Developers) - Tighter Spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {team.slice(1).map((member, idx) => (
              <div key={idx} className="group relative h-[240px] rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <img 
                  src={member.photoUrl} 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 transition-all duration-500"
                  alt={member.name}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-transparent' : 'from-white via-transparent'}`}></div>
                
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`p-2 rounded-lg backdrop-blur-md ${isDark ? 'bg-black/40 text-purple-400' : 'bg-white/40 text-blue-600'}`}>
                      {member.icon}
                    </div>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className={`text-[10px] font-bold uppercase mb-2 ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>{member.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map(s => (
                        <span key={s} className="px-2 py-0.5 rounded text-[8px] font-bold bg-white/10 backdrop-blur-sm border border-white/10 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attractive Features - Modern & Small */}
          <section className={`rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center border ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-black/5 bg-black/[0.02]'}`}>
            <div className="md:w-1/3 text-left">
              <h3 className="text-2xl font-bold mb-2">{t.features}</h3>
              <p className="text-xs opacity-50">{t.features2}</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-3 gap-4">
              {[
                { icon: "🚀", title: t.feat1 },
                { icon: "🌍", title: t.feat2 },
                { icon: "💎", title: t.feat3 }
              ].map((f, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest">{f.title}</h5>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase pb-8">
          &copy; 2026 Wasp-2 AI COLLECTIVE
        </footer>
      </div>
    </div>
  );
};

export default Blog;