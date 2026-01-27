"use client";

import React,{ useState } from "react";
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

  const { lang, theme, toggleTheme, setLang } = useApp();
  const isDark = theme === "dark";
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
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 p-4 md:p-12 relative overflow-hidden font-sans`}>
      


       {/* Animated Cursor Glow (Dark mode only) */}
                  {isDark && (
                    <motion.div
                      className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen"
                      style={{
                        background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                      }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}


      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-[150px] rounded-full ${isDark ? 'bg-purple-600' : 'bg-blue-400'}`}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 pt-10">
          <div className="flex items-center gap-4 mb-4">
            <span className={`h-px w-12 ${isDark ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">{t.discovered}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">{t.title}</h1>
          <p className="text-xl md:text-2xl opacity-60 font-light italic max-w-2xl">{t.tagline}</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Story */}
          <div className={`p-8 rounded-3xl border backdrop-blur-md ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <History className={isDark ? 'text-purple-400' : 'text-blue-600'} />
              <h2 className="text-2xl font-bold">{t.storyTitle}</h2>
            </div>
            <p className="text-sm leading-loose opacity-70 mb-8">
              {t.storyText}
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl font-black">7</div>
                  <div className="text-[10px] uppercase opacity-40">{t.storyLeftCard}</div>
               </div>
               <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl font-black">24/7</div>
                  <div className="text-[10px] uppercase opacity-40">{t.storyRightCard}</div>
               </div>
            </div>
          </div>

          {/* Right: Map Card */}
          <div className={`group relative h-[400px] rounded-3xl overflow-hidden border transition-all duration-500
            ${isDark ? 'border-purple-500/30 shadow-2xl shadow-purple-500/10' : 'border-blue-500/30 shadow-xl'}`}>
            
            {/* Interactive Map Placeholder (Using a styled Iframe) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5026372175!2d69.13928235252514!3d41.28251254398701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9d7%3A0x497bafee421e1d2d!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s"
              className={`w-full h-full grayscale-[0.8] contrast-[1.2] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700
                ${isDark ? 'invert-[0.9] hue-rotate-[260deg]' : ''}`}
              loading="lazy"
            ></iframe>

            {/* Floating Info Badge over Map */}
            <div className={`absolute top-2 left-2 right-25 p-4 rounded-2xl backdrop-blur-xl border flex justify-between items-center
              ${isDark ? 'bg-slate-950/80 border-white/10' : 'bg-white/80 border-black/10'}`}>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-red-500" /> {t.locationTitle}
                </h3>
                <p className="text-[11px] opacity-60 font-bold">{t.address}</p>
              </div>
              <a 
                href="https://www.google.com/maps/place/Wasp2-AI/@41.2968069,69.2677927,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b5edffb6643:0x9eedf70ef5060ab!8m2!3d41.296807!4d69.2726583!16s%2Fg%2F11mzwlhy0t?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                className={`p-3 rounded-full ${isDark ? 'bg-purple-600 hover:bg-purple-500' : 'bg-blue-600 hover:bg-blue-500'} text-white transition-all`}
              >
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.philosophy.map((item: any, i: number) => (
            <div key={i} className={`p-8 rounded-3xl border transition-all duration-500 hover:bg-current/5
              ${isDark ? 'border-purple-500/10' : 'border-blue-500/10'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6
                ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/10 text-blue-600'}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-xs opacity-60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Closing Tagline */}
        <section className="text-center py-20 border-t border-current/10">
          <div className="flex justify-center mb-6">
            <Cpu size={40} className={`opacity-20 ${isDark ? 'text-purple-400' : 'text-blue-400'}`} />
          </div>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase">
            Wasp-2 AI <span className="font-black">Collective</span>
          </h2>
        </section>
      </div>

      <footer className="mt-16 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase pb-8">
          &copy; 2026 Wasp-2 AI COLLECTIVE — FROM TASHKENT WITH CODE
        </footer>
    </div>
  );
};

export default About;