"use client";
import Link from 'next/link';
import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Database, 
  Layers, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { useApp } from "@/lib/AppContext";
import {serviceTranslations} from '@/lib/constants'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Services = () => {
  const { lang, theme } = useApp();
  const isDark = theme === "dark";

const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  const handleClick = async () => {
    setIsNavigating(true);
        router.push('/pages/contact');
  };
  // Multi-language Data Map
 

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
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans p-4 md:p-10 relative overflow-hidden`}>
      
      {/* Premium Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-72 h-72 blur-[100px] opacity-20 ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-0 right-1/4 w-72 h-72 blur-[100px] opacity-20 ${isDark ? 'bg-blue-600' : 'bg-purple-400'}`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Compact Header */}
        <header className="text-center mb-16 pt-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
            {currentContent.header}
          </h1>
          <p className="text-lg opacity-60 font-medium max-w-xl mx-auto">{currentContent.sub}</p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {currentContent.items.map((service,i) => (
            <div key={i} className={`group relative h-[280px] rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl
              ${isDark ? 'border-purple-500/20 hover:border-purple-500/50' : 'border-blue-500/20 hover:border-blue-500/50'}`}>
              
              {/* Background Image - High Visibility */}
              <img 
                src={photos[i]} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
              />
              
              {/* Purple/Blue Glass Overlay */}
              <div className={`absolute inset-0 transition-colors duration-500
                ${isDark 
                  ? 'bg-gradient-to-b from-slate-950/40 via-transparent to-purple-950/90' 
                  : 'bg-gradient-to-b from-white/40 via-transparent to-blue-100/90'}`}>
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={`p-2.5 rounded-lg backdrop-blur-md border ${isDark ? 'bg-purple-500/20 border-purple-400/30 text-purple-300' : 'bg-blue-500/10 border-blue-400/30 text-blue-700'}`}>
                    {icons[i]}
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md border backdrop-blur-sm ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/40 border-black/10'}`}>
                    {service.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 transition-transform group-hover:translate-x-1 duration-300">{service.title}</h3>
                  <p className="text-xs opacity-80 leading-relaxed line-clamp-2 mb-3">{service.desc}</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {lang === 'uz' ? "Batafsil" : lang === 'ru' ? "Подробнее" : "Details"} <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className={`rounded-3xl p-1 text-transparent bg-gradient-to-r ${isDark ? 'from-purple-500 to-blue-500' : 'from-blue-500 to-purple-500'}`}>
          <div className={`rounded-[1.4rem] p-10 text-center backdrop-blur-2xl ${isDark ? 'bg-slate-950/80 text-white' : 'bg-white/80 text-slate-900'}`}>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                {lang === 'uz' ? "Kelajakni birga quramiz" : lang === 'ru' ? "Построим будущее вместе" : "Let's build the future"}
            </h2>
            
            <button onClick={handleClick} className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl
              ${isDark ? 'bg-white text-black hover:bg-purple-200' : 'bg-black text-white hover:bg-blue-600'}`}>
              {currentContent.cta}
            </button>
           
          </div>
        </section>
      </div>

      <footer className="mt-16 text-center opacity-30 text-[8px] tracking-[0.4em] uppercase pb-10">
        &copy; 2026 Wasp-2 AI COLLECTIVE — {lang === 'uz' ? "YUKSAK SIFAT" : lang === 'ru' ? "ВЫСОКОЕ КАЧЕСТВО" : "HIGH QUALITY"}
      </footer>
    </div>
  );
};

export default Services;