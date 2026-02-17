"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { useApp } from "@/lib/AppContext";
import { contentForContact } from "@/lib/constants";

type Result = {
  ok: boolean;
  text: string;
  error?: string | null;
  data?: Record<string, unknown> | null;
  telegram?: Record<string, unknown> | null;
  timestamp: string;
} | null;

// Configure your Telegram bot here
const TELEGRAM_BOT_TOKEN = "8462972967:AAH2I9STikpvYMaqfuyvita2FHM-G4-u028"; 
const TELEGRAM_CHAT_ID = "7404620942"; 

export default function Contact() {
  const { lang, theme } = useApp();
  const [mounted, setMounted] = useState<boolean>(false);
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  const t = contentForContact[lang] || contentForContact.en;

  // Form state
  const [name, setName] = useState<string>("");
  const [telegram, setTelegram] = useState("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Result>(null);

  // Dinamik dizayn konstantalari
  const styles = {
    accent: isDark ? "text-purple-400" : "text-blue-600",
    bgAccent: isDark ? "bg-purple-500/20" : "bg-blue-500/10",
    button: isDark
      ? "bg-purple-600 hover:bg-purple-500 shadow-purple-500/20"
      : "bg-blue-600 hover:bg-blue-500 shadow-blue-500/20",
    glass: isDark
      ? "bg-black/40 border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(168,85,247,0.15)]"
      : "bg-white/40 border-black/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]",
    input: isDark
      ? "bg-white/5 border-white/10 text-white focus:border-purple-500"
      : "bg-black/5 border-black/10 text-black focus:border-blue-500",
  };

  if (!mounted) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(null);

    if (!name.trim() || !telegram.trim() || !message.trim()) {
      setResult({
        ok: false,
        text: "Please fill all required fields.",
        error: "validation_failed",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    setLoading(true);
    
    try {
      // ---------------------------------------------------------
      // FIX 1: Switched to HTML tags (<b>) instead of Markdown (*)
      // This prevents crashes when users type underscores (e.g. @user_name)
      // ---------------------------------------------------------
      const telegramMessage = `
📬 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${name}
📧 <b>Telegram:</b> ${telegram}
🎯 <b>Service:</b> ${service || "Not selected"}

💬 <b>Message:</b>
${message}

🕐 <b>Time:</b> ${new Date().toLocaleString()}
      `.trim();

      const resp = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "HTML", // FIX 2: Changed from "Markdown" to "HTML"
          }),
        }
      );

      const json = await resp.json().catch(() => ({}));
      const now = new Date().toISOString();

      if (resp.ok && json.ok) {
        setResult({
          ok: true,
          text: "✅ Message sent successfully to Telegram! We'll contact you soon.",
          timestamp: now,
        });

        // Reset form
        setName("");
        setTelegram("");
        setService("");
        setMessage("");
      } else {
        const errorMessage = json.description || "Failed to send to Telegram";
        setResult({
          ok: false,
          text: `Telegram error: ${errorMessage}`,
          error: json.error_code || "telegram_error",
          timestamp: now,
        });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error";
      setResult({
        ok: false,
        text: message,
        error: "network_error",
        timestamp: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`min-h-screen pt-28 pb-16 px-4 transition-colors duration-500 ${
        isDark ? "bg-[#0a0a0a]" : "bg-gray-50"
      }`}
    >
      {/* Background Glows */}
      <div
        className={`fixed top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none ${
          isDark ? "bg-purple-600" : "bg-blue-600"
        }`}
      />
      <div
        className={`fixed bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none ${
          isDark ? "bg-blue-600" : "bg-purple-600"
        }`}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-black mb-6 tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t.title.split(" ")[0]} <span className={styles.accent}>{t.title.split(" ")[1] || ""}</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto opacity-70 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {t.subtitle}
          </p>
          <div className="mt-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-purple-500/10 text-purple-300' : 'bg-blue-500/10 text-blue-600'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Messages sent directly to Telegram</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Info Cards */}
          <div className="space-y-4">
            {[
              { 
                icon: Mail, 
                label: t.info.email, 
                val: "contact@wasp2.ai",
                link: "mailto:contact@wasp2.ai",
                type: "email"
              },
              { 
                icon: Phone, 
                label: t.info.phone, 
                val: "+998 91 206 31 40",
                link: "tel:+998912063140",
                type: "phone"
              },
              { 
                icon: MapPin, 
                label: t.info.address, 
                val: "Tashkent, Mirobod",
                link: "https://maps.google.com",
                type: "address"
              },
              { 
                icon: Clock, 
                label: t.info.hours, 
                val: "Mon-Fri, 08:00 - 18:00",
                type: "hours"
              },
              { 
                icon: FaTelegram, 
                label: "Telegram", 
                val: "Message us on Telegram",
                link: "https://t.me/Akhliyor_uz", 
                type: "telegram"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-3xl border ${styles.glass} flex items-center gap-5 hover:scale-[1.02] transition-transform ${
                  item.link ? "cursor-pointer hover:shadow-lg" : ""
                }`}
                onClick={() => {
                  if (item.link) {
                    if (item.type === "email" || item.type === "phone") {
                      window.location.href = item.link;
                    } else {
                      window.open(item.link, "_blank");
                    }
                  }
                }}
              >
                <div className={`p-3 rounded-2xl ${styles.bgAccent}`}>
                  <item.icon className={`w-6 h-6 ${styles.accent}`} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">{item.label}</p>
                  <p className="font-semibold">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            className={`lg:col-span-2 p-8 md:p-12 rounded-[40px] border ${styles.glass}`}
          >
            <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-2 opacity-70">{t.form.name}</label>
                <input
                  type="text"
                  className={`w-full p-4 rounded-2xl border outline-none transition-all ${styles.input}`}
                  placeholder="Wasp User"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold ml-2 opacity-70">{t.form.telegram}</label>
                <input
                  type="text"
                  name="telegram"
                  className={`w-full p-4 rounded-2xl border outline-none transition-all ${styles.input}`}
                  placeholder="@username"
                  value={telegram}
                  onChange={(e) => {
                    // remove spaces automatically
                    const value = e.target.value.replace(/\s/g, "");
                    setTelegram(value);
                  }}
                  required
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold ml-2 opacity-70">{t.form.service}</label>
                <select
                  required
                  className={`
                    w-full p-4 rounded-2xl border outline-none transition-all
                    appearance-none
                    ${isDark 
                      ? "bg-neutral-900 text-white border-neutral-700" 
                      : "bg-white text-gray-700 border-gray-300"}
                    ${styles.input}
                  `}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  disabled={loading}
                >
                  {/* FIX 3: Removed extra quotes around the default option */}
                  <option value="" disabled hidden>
                    Choose a Service
                  </option>

                  {t.services.map((s: string) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
        <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold ml-2 opacity-70">{t.form.msg}</label>
                <textarea
                  rows={4}
                  className={`w-full p-4 rounded-2xl border outline-none transition-all ${styles.input}`}
                  placeholder="..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`md:col-span-2 py-5 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl transition-all ${styles.button} ${
                  loading ? "opacity-70 pointer-events-none" : ""
                }`}
              >
                <Send className="w-5 h-5" />
                {loading ? "Sending to Telegram..." : t.form.btn}
              </motion.button>
            </form>

            <div className={`mt-8 flex flex-col items-center justify-center gap-2 text-sm font-medium opacity-60`}>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${styles.accent}`} />
                <span>{t.success}</span>
              </div>

              {result && (
                <div
                  className={`mt-4 w-full max-w-xl rounded-lg p-4 ${
                    result.ok
                      ? isDark
                        ? "bg-green-900/20 text-green-300 border border-green-700/30"
                        : "bg-green-50 text-green-800"
                      : isDark
                      ? "bg-red-900/20 text-red-300 border border-red-700/30"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{result.ok ? "✅ Success" : "❌ Error"}</div>
                    <div className="text-xs opacity-70">{new Date(result.timestamp).toLocaleTimeString()}</div>
                  </div>
                  <div className="mt-2 text-sm">{result.text}</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <footer className="mt-16 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase pb-8">
        © 2026 Wasp-2 AI COLLECTIVE
      </footer>
    </div>
  );
}