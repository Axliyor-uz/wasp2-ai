"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/AppContext";
import { content } from "@/lib/constants";
import {
  BookOpen, Sigma, Smartphone, Cpu, Globe, Sparkles, Zap, Shield,
  Rocket, ChevronRight, Star, Trophy, Users, Layers, TrendingUp, Award
} from "lucide-react";

// Props interface for server data
interface HomeInteractiveProps {
  initialData: any[] | null;
}

interface Feature {
  id?: string | number;
  title: string;
  short?: string;
  detail?: string;
  icon?: any;
}

export default function HomeInteractive({ initialData }: HomeInteractiveProps) {
  const { lang, theme, toggleTheme, setLang } = useApp();
  const isDark = theme === "dark";
  const t = content[lang as keyof typeof content] || content.en;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFeature, setOpenFeature] = useState<Feature | null>(null);
  const [openTFeature, setOpenTFeature] = useState<Feature | null>(null);
  const [data, setData] = useState(initialData);
  const [isNavigating, setIsNavigating] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const router = useRouter();

  // Mouse movement for animated cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Close modals on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenFeature(null);
        setOpenTFeature(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Client-side fetch fallback
  useEffect(() => {
    if (!data) {
      let mounted = true;
      fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" })
        .then(res => res.json())
        .then(json => mounted && setData(json))
        .catch(() => mounted && setData(null));
      return () => { mounted = false; };
    }
  }, [data]);

  const handleClick = () => { setIsNavigating(true); router.push("/pages/contact"); };
  const handleClick2 = () => { setIsNavigating(true); router.push("/pages/showcase5"); };
  const handleClick3 = () => { window.open("https://t.me/Akhliyor_uz", "_blank"); setTimeout(() => setIsNavigating(false), 1000); };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden transition-colors duration-500 bg-background text-foreground">

      {/* Animated cursor */}
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

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Hero badge, titles, description, buttons */}
          {/* You can copy all motion divs/buttons from your original code here */}
          {/* Example: */}
          <motion.h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              {t.heroTitle1 || "Transform Your"}
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
              {t.heroTitle2 || "Digital Future"}
            </span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-70">
            {t.heroDesc}
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <motion.button onClick={handleClick2}>Portfolio</motion.button>
            <motion.button onClick={handleClick3}>Contact</motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES / Features --- */}
      <section id="services" className="relative py-12 px-10">
        <div className="max-w-4xl mx-auto">
          {/* Example of features/cards */}
          {data?.slice(0, 4).map((item: any) => (
            <div key={item.id} className="glass p-6 rounded-2xl mb-4">
              <h4 className="font-bold">{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
