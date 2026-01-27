"use client";
import React, { useState } from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Smartphone, 
  Database, 
  Layers, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { useApp } from "@/lib/AppContext";
import { serviceTranslations } from '@/lib/constants';
import { useRouter } from 'next/navigation';

const Services = () => {
  const { lang, theme } = useApp();
  const isDark = theme === "dark";
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  const handleClick = async () => {
    setIsNavigating(true);
    router.push('/pages/contact');
  };

  const photos = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  ];

  const icons = [
    <Globe className="w-5 h-5" />, <Sparkles className="w-5 h-5" />, 
    <ShieldCheck className="w-5 h-5" />, <Smartphone className="w-5 h-5" />, 
    <Database className="w-5 h-5" />, <Layers className="w-5 h-5" />
  ];

  const currentContent = serviceTranslations[lang] || serviceTranslations['en'];

  return (
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans relative overflow-hidden`}>
      
      {/* Premium Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-72 h-72 blur-[100px] opacity-20 ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-0 right-1/4 w-72 h-72 blur-[100px] opacity-20 ${isDark ? 'bg-blue-600' : 'bg-purple-400'}`}></div>
      </div>

      {/* Main Container - Matches Footer & About Padding */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-10 md:px-8 py-12 lg:py-16">
        
        {/* Compact Header */}
        <header className="mb-16 pt-10">
          <div className="flex items-center gap-4 mb-4">
            <span className={`h-px w-12 ${isDark ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
              {lang === 'uz' ? "Xizmatlarimiz" : lang === 'ru' ? "Наши Услуги" : "Expertise"}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            {currentContent.header}
          </h1>
          <p className="text-lg md:text-xl opacity-60 font-medium max-w-2xl leading-relaxed">
            {currentContent.sub}
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {currentContent.items.map((service: any, i: number) => (
            <div key={i} className={`group relative h-[300px] rounded-3xl overflow-hidden border transition-all duration-500 shadow-2xl
              ${isDark ? 'border-white/10 hover:border-purple-500/50 bg-slate-900' : 'border-black/5 hover:border-blue-500/50 bg-white'}`}>
              
              {/* Background Image */}
              <img 
                src={photos[i]} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 transition-opacity duration-500 
                ${isDark 
                  ? 'bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' 
                  : 'bg-gradient-to-t from-white via-white/40 to-transparent'}`}>
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-2xl backdrop-blur-md border ${isDark ? 'bg-purple-500/20 border-white/10 text-purple-400' : 'bg-blue-500/10 border-black/5 text-blue-600'}`}>
                    {icons[i]}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-md ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/60 border-black/10'}`}>
                    {service.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed line-clamp-2 mb-4">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {lang === 'uz' ? "Batafsil" : lang === 'ru' ? "Подробнее" : "Learn More"} 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className={`relative rounded-[2.5rem] overflow-hidden p-[1px] ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
          <div className={`rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
            {/* CTA Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-[120px] pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter relative z-10">
              {lang === 'uz' ? "Kelajakni birga quramiz" : lang === 'ru' ? "Построим будущее вместе" : "Let's build the future"}
            </h2>
            
            <button 
              onClick={handleClick} 
              disabled={isNavigating}
              className={`relative z-10 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-2xl disabled:opacity-50
                ${isDark ? 'bg-white text-black hover:bg-purple-100' : 'bg-black text-white hover:bg-blue-900'}`}
            >
              {isNavigating ? "..." : currentContent.cta}
            </button>
          </div>
        </section>

        {/* Internal Footer (Specific to Page) */}
        <footer className="mt-24 text-center opacity-30 text-[9px] tracking-[0.5em] uppercase pb-10 border-t border-current/10 pt-10">
          &copy; 2026 Wasp-2 AI COLLECTIVE — {lang === 'uz' ? "YUKSAK SIFAT" : lang === 'ru' ? "ВЫСОКОЕ КАЧЕСТВО" : "HIGH QUALITY"}
        </footer>
      </div>
    </div>
  );
};

export default Services;