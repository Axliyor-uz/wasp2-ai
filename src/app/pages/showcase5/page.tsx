"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import router from "next/router";
import { 
  LucideIcon,
  BookOpen,
  Sigma,
  Smartphone,
  Rocket,
  ChevronRight,
  Shield,
  Award,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Globe,
  Cpu,
  Layers,
  Zap,
  Sparkles,
  Presentation,
  Backpack,
  Brain,
  Shapes

} from "lucide-react";
import { BsGooglePlay } from "react-icons/bs";
import { content } from "@/lib/constants";
import { contentTranslations } from "@/lib/constants";

const baseItems = [
  { id: 1, img: "/phones/img1.jpg" },
  { id: 2, img: "/phones/img2.jpg" },
  { id: 3, img: "/phones/img3.jpg" },
  { id: 4, img: "/phones/img4.jpg" },
  { id: 5, img: "/phones/img5.jpg" },
  { id: 6, img: "/phones/img6.jpg" },
  { id: 7, img: "/phones/img7.jpg" },
  { id: 8, img: "/phones/img8.jpg" },
  { id: 9, img: "/phones/img9.jpg" },
  { id: 10, img: "/phones/img10.jpg" },
  { id: 11, img: "/phones/img11.jpg" },
  { id: 12, img: "/phones/img12.jpg" },
  { id: 13, img: "/phones/img13.jpg" },
  { id: 14, img: "/phones/img14.jpg" },
  { id: 15, img: "/phones/img15.jpg" },
  { id: 16, img: "/phones/img16.jpg" },
];

interface Feature {
  id: string | number;
  title: string;
  short: string;
  detail: string;
  icon?: LucideIcon; 
}

export default function SmartIPhoneShowcase() {
  const { lang, theme } = useApp();
  const radius = 650;
  const [isDragging] = useState(false);
  const x = useMotionValue(0);
  const l = contentTranslations[lang];
  const rotateY = useSpring(x, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001
  });

  const [openTFeature, setOpenTFeature] = useState<Feature | null>(null);
  const [openFeature, setOpenFeature] = useState<Feature | null>(null);
  const [isNavigating,setIsNavigating] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenTFeature(null);
        setOpenFeature(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClick1 = async () => {
    setIsNavigating(true);
    router.push('/pages/contact');
  };
  
  const handleClick2 = async () => {
    setIsNavigating(true);
    router.push('/pages/showcase5');
  };

  const redirectToPlayStore = () => {
    const packageId = "com.EdifyStudent.app";
    const url = `https://play.google.com/store/apps/details?id=uz.wasp2ai.edifystudent&pcampaignid=web_share${packageId}`;
    window.open(url, "_blank");
  };

  const redirectToPlayStore2 = () => {
    const packageId = "com.EdifyTeacher.app";
    const url = `https://play.google.com/store/apps/details?id=uz.wasp2ai.edifyteachers&pcampaignid=web_share${packageId}`;
    window.open(url, "_blank");
  };

  useAnimationFrame(() => {
    if (!isDragging) {
      x.set(x.get() + 0.15); 
    }
  });

  const t = content[lang as keyof typeof content] || content.en;
  const isDark = theme === "dark";

  return (
    <div className={`${isDark ? 'dark bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500  relative overflow-hidden font-sans`}>
      
      {/* 3D Showcase Container */}
      <div 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ perspective: "2000px" }}
      >
        <div className={`absolute w-full h-[600px] rounded-full blur-[150px] opacity-20 transition-colors duration-1000 ${
          isDark ? "bg-purple-900" : "bg-blue-200"
        }`} />

        <motion.div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ 
            transformStyle: "preserve-3d",
            z: -900, 
            rotateY: rotateY 
          }}
        >
          {baseItems.map((item, index) => {
            const angle = (index / baseItems.length) * 360;
            return (
              <div
                key={`${item.id}-${index}`}
                className="absolute w-[210px] h-[460px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  <div 
                    className={`absolute inset-0 rounded-[1.6rem] border-[3px] overflow-hidden backface-hidden z-20 transition-all duration-700 ${
                      isDark 
                        ? "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]" 
                        : "border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    }`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-30" />
                    <img src={item.img} alt="iPhone" className="w-full h-full object-cover" />
                  </div>

                  <div 
                    className={`absolute inset-0 rounded-[2.5rem] border-[2px] backdrop-blur-[30px] flex flex-col items-center justify-center transition-all duration-700 ${
                      isDark ? "bg-purple-950/20 border-purple-400/30" : "bg-blue-50/40 border-blue-300/40"
                    }`}
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "visible" }}
                  >
                    <div className={`w-10 h-10 rounded-full blur-xl opacity-40 mb-4 ${isDark ? "bg-purple-400" : "bg-blue-400"}`} />
                    <p className="text-[7px] font-bold tracking-[0.5em] opacity-40">WASP VISION</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative z-30">
        <div className={`absolute inset-0 pointer-events-none ring-[120px] ring-inset transition-colors duration-1000 ${
          isDark ? "ring-black" : "ring-white"
        } blur-[100px] opacity-80`} />
      
        <section className="relative py-12 px-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Studentify Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white shadow-2xl overflow-hidden"
              >
                <div onClick={redirectToPlayStore} className="cursor-pointer absolute top-6 right-6 flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-xl">
                  <BsGooglePlay className="text-green-400" />
                  <span>{t.studentBadge}</span>
                </div>
                <motion.div whileHover={{ rotate: 16 }} className="w-12 h-12 mb-5 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-black mb-3">{t.studentTitle}</h3>
                <p className="text-sm opacity-90 mb-6 leading-relaxed">{t.studentDesc}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {(t.features || []).map((f: any, i: number) => {
                    const Icon = f.icon || Sigma;
                    return (
                      <motion.button
                        key={f.id || i}
                        onClick={() => setOpenFeature(f)}
                        whileHover={{ scale: 1.03 }}
                        className="flex items-start gap-3 bg-white/15 rounded-xl p-3 text-left text-sm"
                      >
                        <Icon className="w-4 h-4 mt-0.5 text-white" />
                        <div>
                          <div className="font-semibold">{f.title}</div>
                          <div className="text-xs opacity-80">{f.short}</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <motion.button whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-white font-bold text-lg">
                  {t.cardLink || "Learn more"} <ChevronRight className="w-5 h-5" />
                </motion.button>
                <Smartphone className="absolute -bottom-12 -right-12 w-56 h-56 text-white/10" />
              </motion.div>


     {/* 1. STUDENTIFY content - ALIGN RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-end sm:items-start sm:text-left text-right"
      >
        <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center border shadow-lg transition-all duration-700 ${
          isDark ? "bg-indigo-500/20 border-indigo-400/30 shadow-indigo-500/10" : "bg-indigo-100 border-indigo-200 shadow-indigo-200/50"
        }`}>
          <Shapes className={`w-7 h-7 ${isDark ? "text-indigo-300" : "text-indigo-600"}`} />
        </div>
        
        <h3 className="text-4xl font-black mb-4 tracking-tighter">{l.studentTitle}</h3>
        <p className={`text-sm leading-relaxed mb-10 max-w-[280px] ${isDark ? "text-white/50" : "text-gray-500"}`}>
          {l.studentDesc}
        </p>

        <div className="space-y-10">
          <div className="group">
            <div className="flex items-center justify-end gap-3 mb-2">
              <p className="font-bold text-xl group-hover:text-indigo-500 transition-colors">{l.studentFeature1}</p>
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
            <p className={`text-sm max-w-[240px] ${isDark ? "text-white/40" : "text-gray-400"}`}>
              {/* Add specific lang strings like t.studentFeature1 if they exist in your constants */}
              {l.studentFeature1Desc} 
            </p>
          </div>

          <div className="group">
            <div className="flex items-center justify-end gap-3 mb-2">
              <p className="font-bold text-xl group-hover:text-indigo-500 transition-colors">{l.studentFeature2}</p>
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <p className={`text-sm max-w-[240px] ${isDark ? "text-white/40" : "text-gray-400"}`}>
              {l.studentFeature2Desc}
            </p>
          </div>
          <div className="group">
            <div className="flex items-center justify-end gap-3 mb-2">
              <p className="font-bold text-xl group-hover:text-indigo-500 transition-colors">{l.studentFeature3}</p>
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <p className={`text-sm max-w-[240px] ${isDark ? "text-white/40" : "text-gray-400"}`}>
              {l.studentFeature3Desc}
            </p>
          </div>
        </div>
      </motion.div>


              
{/* 2. TEACHERFY  content- ALIGN LEFT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start text-left sm:text-left "
      >
        <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center border shadow-lg transition-all duration-700 ${
          isDark ? "bg-emerald-500/20 border-emerald-400/30 shadow-emerald-500/10" : "bg-emerald-100 border-emerald-200 shadow-emerald-200/50"
        }`}>
          <Brain className={`w-7 h-7 ${isDark ? "text-emerald-300" : "text-emerald-600"}`} />
        </div>

        <h3 className="text-4xl font-black mb-4 tracking-tighter">{l.teacherTitle}</h3>
        <p className={`text-sm leading-relaxed mb-10 max-w-[280px] ${isDark ? "text-white/50" : "text-gray-500"}`}>
          {l.teacherDesc}
        </p>

        <div className="space-y-10">
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-cyan-500" />
              <p className="font-bold text-xl group-hover:text-emerald-500 transition-colors">{l.teacherFeature1}</p>
            </div>
            <p className={`text-sm max-w-[240px] ${isDark ? "text-white/40" : "text-gray-400"}`}>
              {l.teacherFeature1Desc}
            </p>
          </div>

          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="w-5 h-5 text-blue-500" />
              <p className="font-bold text-xl group-hover:text-emerald-500 transition-colors">{l.teacherFeature2}</p>
            </div>
            <p className={`text-sm max-w-[240px] ${isDark ? "text-white/40" : "text-gray-400"}`}>
              {l.teacherFeature2Desc}
            </p>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="w-5 h-5 text-blue-500" />
              <p className="font-bold text-xl group-hover:text-emerald-500 transition-colors">{l.teacherFeature3}</p>
            </div>
            <p className={`text-sm max-w-[240px] ${isDark ? "text-white/40" : "text-gray-400"}`}>
              {l.teacherFeature3Desc}
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Teacherfy Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl p-6 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl overflow-hidden"
              >
                <div onClick={redirectToPlayStore2} className="cursor-pointer absolute top-6 right-6 flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-xl">
                  <BsGooglePlay className="text-purple-400" />
                  <span>{t.teacherBadge}</span>
                </div>
                <motion.div whileHover={{ rotate: 16 }} className="w-12 h-12 mb-5 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-black mb-3">{t.teacherTitle}</h3>
                <p className="text-sm opacity-90 mb-6 leading-relaxed">{t.teacherDesc}</p>

                <div className="grid grid-cols-1 gap-3 mb-5">
                  {(t.featuresTeacherfy || []).map((f: any, i: number) => {
                    const Icon = f.icon || Sigma;
                    return (
                      <motion.button
                        key={f.id || i}
                        onClick={() => setOpenTFeature(f)}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                        className="flex items-start gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 text-left text-sm border border-white/10"
                      >
                        <Icon className="w-5 h-5 mt-0.5" />
                        <div>
                          <div className="font-bold">{f.title}</div>
                          <div className="text-xs opacity-80">{f.short}</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <motion.button  whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-white font-bold text-lg">
                  {t.cardLink || "Learn more"} <ChevronRight className="w-5 h-5" />
                </motion.button>
                <Smartphone className="absolute -bottom-12 -right-12 w-56 h-56 text-white/10" />
              </motion.div>
            </div>

            <section className="relative py-12 px-6 z-30">
            <div className="max-w-7xl mx-auto">

     

      {/* 3. PARENTS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className= {`relative rounded-[2rem] p-6 bg-white/5 backdrop-blur-xl border border-white/10  ${isDark ? "text-white/40" : "text-gray-400"} text-white shadow-2xl h-full flex flex-col group `}
      >
         {/* Dynamic Coming Soon Badge */}
        <div className="absolute -top-3 -right-3">
          <div className="relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 blur-lg opacity-40 animate-pulse" />
             <span className="relative bg-gradient-to-r from-orange-500 to-rose-600 text-[10px] font-black uppercase tracking-tighter px-4 py-1.5 rounded-full border border-white/20 text-white shadow-xl">
               {l.comingSoon}
             </span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-10">
          <div className="w-14 h-14 bg-rose-500/20 rounded-2xl flex items-center justify-center border border-rose-400/30">
            <Users className="w-7 h-7 text-rose-300" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-rose-300 opacity-80">{l.parentTitle}</span>
        </div>

        <h3 className="text-3xl font-black mb-4 tracking-tight">{l.parentTag}</h3>
            <p className="text-sm text-white/60 leading-relaxed ml-7">{l.parentDesc}</p>


        <div className="space-y-8 mb-10 flex-grow">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Star className="w-4 h-4 text-amber-300" />
              <p className="font-bold text-lg">{l.parentFeature1}</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed ml-7">{l.parentFeature1Desc}</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-1">
              <Shield className="w-4 h-4 text-blue-400" />
              <p className="font-bold text-lg">{l.parentFeature2}</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed ml-7">{l.parentFeature2Desc}</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-1">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <p className="font-bold text-lg">{l.parentFeature3}</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed ml-7">{l.parentFeature3Desc}</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Trophy className="w-5 h-4 text-yellow-500" />
              <p className="font-bold text-lg">{l.parentFeature4}</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed ml-7">{l.parentFeature4Desc}</p>
          </div>
        </div>
        

        <div className="flex items-center gap-2 font-bold text-sm group-hover:text-rose-300 transition-colors cursor-pointer pt-6 border-t border-white/5 w-fit">
          {l.batafsil} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>


  </div>
</section>
          </div>
          
        </section>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {(openFeature || openTFeature) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => { setOpenFeature(null); setOpenTFeature(null); }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl text-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Common Modal Content */}
              {(() => {
                const f = openFeature || openTFeature;
                if (!f) return null;
                return (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl text-white bg-gradient-to-br ${openFeature ? 'from-purple-600 to-blue-600' : 'from-emerald-500 to-cyan-500'}`}>
                          {f.icon ? React.createElement(f.icon, { size: 28 }) : <Sigma size={28} />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{f.title}</h3>
                          <p className="text-gray-500">{f.short}</p>
                        </div>
                      </div>
                      <button onClick={() => { setOpenFeature(null); setOpenTFeature(null); }} className="p-2 hover:bg-gray-100 rounded-full transition-colors">✕</button>
                    </div>
                    <div className="text-lg leading-relaxed text-gray-700">{f.detail}</div>
                    <div className="mt-8 flex justify-end">
                      <button 
                        onClick={() => { setOpenFeature(null); setOpenTFeature(null); }}
                        className="px-6 py-2 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}