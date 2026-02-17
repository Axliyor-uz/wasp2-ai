"use client";

import React from 'react';
import { useApp } from "@/lib/AppContext"; 
// Combined imports for cleaner code
import { 
  Send, Github, Linkedin, 
  Terminal, Cpu, Code, Shield, Coffee 
} from 'lucide-react';
import { contentForBlog , teamTranslations } from '@/lib/constants';



// ==========================================
// SUB-COMPONENTS
// ==========================================

// Revised FlipCard: Accepts a SINGLE "data" object containing both info and static assets
const FlipCard = ({ data, heightClass, isHero = false, isDark }) => (
  <div className={`group relative w-full ${heightClass} [perspective:1000px]`}>
    {/* Inner Card Wrapper */}
    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      
      {/* FRONT SIDE */}
      <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] shadow-xl border border-white/10">
        <img 
          src={data.photoUrl} 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
          alt={data.name}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-slate-950/20 to-transparent' : 'from-slate-900 via-slate-900/20 to-transparent'}`}></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-md mb-2 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${isDark ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-white/20 text-white border border-white/30'}`}>
            {data.icon} {data.role}
          </div>
          <h3 className={`font-bold text-white ${isHero ? 'text-3xl' : 'text-xl'}`}>{data.name}</h3>
          <div className="flex items-center gap-1 mt-2 opacity-60">
            <span className="text-[9px] text-white uppercase tracking-widest">About</span>
            <div className="w-8 h-[1px] bg-white/50"></div>
          </div>
        </div>
      </div>

      {/* BACK SIDE */}
      <div className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/10 flex flex-col p-6 ${isDark ? 'bg-slate-900/95' : 'bg-slate-100/95'} backdrop-blur-xl`}>
        
        <div className="flex justify-between items-start mb-4">
           <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-600'}`}>
              {data.icon}
           </div>

           <div className="flex gap-3">
              {data.socials?.github && (
                <a href={data.socials.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="opacity-50 hover:opacity-100 transition-all hover:text-blue-500 hover:scale-110">
                  <Github size={18} />
                </a>
              )}
              {data.socials?.linkedin && (
                <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="opacity-50 hover:opacity-100 transition-all hover:text-blue-500 hover:scale-110">
                  <Linkedin size={18} />
                </a>
              )}
              {data.socials?.telegram && (
                <a href={data.socials.telegram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="opacity-50 hover:opacity-100 transition-all hover:text-blue-500 hover:scale-110">
                  <Send size={18} />
                </a>
              )}
           </div>
        </div>

        <div className="flex-grow">
          <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'} ${isHero ? 'text-2xl' : 'text-lg'}`}>
            {data.name}
          </h4>
          <p className={`text-[10px] font-bold uppercase mb-4 ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>
            {data.role}
          </p>
          <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            "{data.bio}"
          </p>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Expertise</p>
          <div className="flex flex-wrap gap-1.5">
            {data.skills.map(s => (
              <span key={s} className={`px-2 py-1 rounded text-[9px] font-bold border uppercase ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-black/5 border-black/5 text-slate-700'}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

const Blog = () => {
  const { lang, theme } = useApp();
  const isDark = theme === "dark";
  
  // Static Assets (Images, Icons, Links)
  const staticTeamData = [
    {
      icon: <Terminal className="w-5 h-5" />,
      photoUrl: "/backgrounds/boss.jpg",
      socials: { github: "https://github.com/", linkedin: "https://linkedin.com/in/", telegram: "https://t.me/" }
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      photoUrl: "/backgrounds/backend.webp",
      socials: { github: "https://github.com/wox06624", linkedin: "https://linkedin.com/in/shohbozyunusaliyev", telegram: "https://t.me/Shohboz06" }
    },
    {
      icon: <Code className="w-4 h-4" />,
      photoUrl: "/backgrounds/web.jpg",
      socials: { github: "https://github.com/Inetcodegg", linkedin: "https://linkedin.com/in/inet-code", telegram: "https://t.me/Inet_code" }
    },
    {
      icon: <Shield className="w-4 h-4" />,
      photoUrl: "/backgrounds/vyber.webp",
      socials: { github: "https://github.com/Axliyor-uz", linkedin: "https://linkedin.com/in/Axliyor-uz", telegram: "https://t.me/Akhliyor_uz" }
    },
    {
      icon: <Coffee className="w-4 h-4" />,
      photoUrl: "/backgrounds/fullStack.png",
      socials: { github: "https://github.com/umidjon0339", linkedin: "https://linkedin.com/in/ujcodes", telegram: "https://t.me/U_m_i_d_j_o_n_006" }
    }
  ];
  
  // Get UI text
  const t = contentForBlog[lang] || contentForBlog['en'];
  const textTeamData = teamTranslations[lang] || teamTranslations['en'];

  // MERGE LOGIC: Combine static assets with translated text
  const mergedTeam = staticTeamData.map((staticMember, index) => ({
    ...staticMember,
    ...textTeamData[index] // Adds name, role, bio, skills from translation
  }));

  return (
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans p-4 md:p-4 relative overflow-hidden`}>
      
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 blur-[100px] opacity-20 ${isDark ? 'bg-blue-600' : 'bg-purple-400'}`}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <header className="text-center mb-12 pt-6">
          <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg opacity-60 font-medium">{t.subtitle}</p>
        </header>

        <main>
          {/* Hero Card (The Boss) - Index 0 */}
          <section className="mb-10 w-full">
            <FlipCard 
              data={mergedTeam[0]} 
              heightClass="h-[340px]" 
              isHero={true} 
              isDark={isDark} 
            />
          </section>

          {/* Grid (Developers) - Indices 1 to 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mergedTeam.slice(1).map((memberData, idx) => (
               <FlipCard 
                 key={idx} 
                 data={memberData} 
                 heightClass="h-[280px]" 
                 isDark={isDark} 
               />
            ))}
          </div>

          {/* Features Section */}
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