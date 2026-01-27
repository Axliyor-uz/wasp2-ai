"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  History, 
  Target, 
  Compass, 
  Users2, 
  Cpu,
  ArrowRight
} from 'lucide-react';
import { useApp } from "@/lib/AppContext";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { lang, theme } = useApp();
  const isDark = theme === "dark";

  // Handle mouse movement for the glow effect
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

   const content: any = {
    en: {

      title: "Our Story",
      tagline: "Bridging Tashkent to the Global Tech Stage.",
      discovered: "Established 2025",
      storyTitle: "The Discovery",
      storyText: "Wasp-2 AI was born from a simple realization: the engineering talent in Tashkent is world-class, but the bridge to global standards needed to be built. We started as 7 specialists with one goal — precision.",
      locationTitle: "Headquarters",
      address: "Tashkent, Uzbekistan. Mirabad District.",
      storyLeftCard: "Founding engineers",
      storyRightCard: "Service & Support",
      philosophy: [
        { title: "Precision", desc: "We don't just write code; we architect solutions that scale.", icon: <Target /> },
        { title: "Transparency", desc: "Direct access to developers. No middleman, no secrets.", icon: <Compass /> },
        { title: "Local Talent", desc: "Empowering the next generation of Uzbek engineers.", icon: <Users2 /> }
      ]
    },
    ru: {
      title: "О Нас",
      tagline: "Соединяем Ташкент с глобальной тех-сценой.",
      discovered: "Основано в 2025 году",
      storyTitle: "Открытие",
      storyText: "Wasp-2 AI родился из простого осознания: инженерные таланты в Ташкенте мирового уровня, но нужен был мост к глобальным стандартам. Мы начинали как 7 специалистов с одной целью — точность.",
      locationTitle: "Штаб-квартира",
      address: "Ташкент, Узбекистан. Район Mirobod.",
      storyLeftCard: "Инженеры-основатели",
    storyRightCard: "Обслуживание и поддержка",
      philosophy: [
        { title: "Точность", desc: "Мы не просто пишем код; мы проектируем масштабируемые решения.", icon: <Target /> },
        { title: "Прозрачность", desc: "Прямой доступ к разработчикам. Никаких посредников.", icon: <Compass /> },
        { title: "Местные Таланты", desc: "Развиваем новое поколение узбекских инженеров.", icon: <Users2 /> }
      ]
    },
    uz: {
      title: "Biz Haqimizda",
      tagline: "Toshkentni global texnologiya sahnasi bilan bog'laymiz.",
      discovered: "2025-yilda asos solingan",
      storyTitle: "Kashfiyot",
      storyText: "Wasp-2 AI oddiy bir haqiqatni anglashdan paydo bo'lgan: Toshkentdagi muhandislik iste'dodi jahon darajasida, ammo global standartlarga ko'prik kerak edi. Biz aniqlikni maqsad qilgan 7 mutaxassis sifatida boshladik.",
      locationTitle: "Bosh Ofis",
      address: "Toshkent, O'zbekiston. Mirobod hududi.",
      storyLeftCard: "Asoschi muhandislar",
    storyRightCard: "Xizmat ko'rsatish va yordam",
      philosophy: [
        { title: "Aniqlik", desc: "Biz shunchaki kod yozmaymiz; biz kengayuvchi arxitektura quramiz.", icon: <Target /> },
        { title: "Shaffoflik", desc: "Dasturchilar bilan to'g'ridan-to'g'g'ri aloqa. Vositachilar yo'q.", icon: <Compass /> },
        { title: "Mahalliy Iste'dod", desc: "O'zbekistonning yangi avlod muhandislarini qo'llab-quvvatlaymiz.", icon: <Users2 /> }
      ]
    }
  };

  const t = content[lang] || content['en'];

  return (
    <div 
      onMouseMove={handleMouseMove}
      className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 relative overflow-hidden font-sans`}
    >
      {/* Animated Cursor Glow (Dark mode only) */}
      {isDark && (
        <motion.div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen hidden lg:block"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-[150px] rounded-full ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`}></div>
      </div>

      {/* Container matches Footer Padding:
          - px-10 on mobile
          - md:px-8 on desktop
      */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-10 md:px-8 py-12 lg:py-16">
        
        {/* Hero Section */}
        <section className="mb-20 pt-10">
          <div className="flex items-center gap-4 mb-4">
            <span className={`h-px w-12 ${isDark ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">{t.discovered}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            {t.title}
          </h1>
          <p className="text-lg md:text-2xl opacity-60 font-light italic max-w-2xl leading-relaxed">
            {t.tagline}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-20">
          {/* Left: Story */}
          <div className={`p-8 rounded-3xl border backdrop-blur-md ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <History className={isDark ? 'text-purple-400' : 'text-blue-600'} size={24} />
              <h2 className="text-2xl font-bold">{t.storyTitle}</h2>
            </div>
            <p className="text-[15px] leading-loose opacity-70 mb-8">
              {t.storyText}
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className={`p-5 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white'} border ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                  <div className="text-3xl font-black text-purple-500">7</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-50">{t.storyLeftCard}</div>
               </div>
               <div className={`p-5 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white'} border ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                  <div className="text-3xl font-black text-purple-500">24/7</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-50">{t.storyRightCard}</div>
               </div>
            </div>
          </div>

          {/* Right: Map Card */}
          <div className={`group relative h-[420px] rounded-3xl overflow-hidden border transition-all duration-500
            ${isDark ? 'border-purple-500/30 shadow-2xl shadow-purple-500/10' : 'border-blue-500/30 shadow-xl'}`}>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.944203114995!2d69.2664413!3d41.2994958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad590924191%3A0x6960d7c71360170a!2sMirabad%20District%2C%20Tashkent!5e0!3m2!1sen!2s!4v1700000000000"
              className={`w-full h-full grayscale-[0.8] contrast-[1.1] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700
                ${isDark ? 'invert-[0.9] hue-rotate-[260deg]' : ''}`}
              loading="lazy"
            ></iframe>

            <div className={`absolute bottom-4 left-4 right-4 p-5 rounded-2xl backdrop-blur-xl border flex justify-between items-center
              ${isDark ? 'bg-slate-950/80 border-white/10' : 'bg-white/90 border-black/10'}`}>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-red-500" /> {t.locationTitle}
                </h3>
                <p className="text-[12px] opacity-70 font-medium">{t.address}</p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className={`p-3 rounded-full ${isDark ? 'bg-purple-600 hover:bg-purple-500' : 'bg-blue-600 hover:bg-blue-500'} text-white transition-all shadow-lg`}
              >
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.philosophy.map((item: any, i: number) => (
            <div key={i} className={`p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02]
              ${isDark ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05]' : 'border-black/5 bg-black/[0.01] hover:bg-black/[0.03]'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6
                ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/10 text-blue-600'}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Closing Tagline */}
        <section className="text-center py-20 border-t border-current/10">
          <div className="flex justify-center mb-6">
            <Cpu size={48} className={`opacity-20 ${isDark ? 'text-purple-400' : 'text-blue-400'}`} />
          </div>
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
            Wasp-2 AI <span className="font-black">Collective</span>
          </h2>
          <p className="mt-4 text-[10px] opacity-30 tracking-[0.5em] uppercase">
            From Tashkent with Code
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;