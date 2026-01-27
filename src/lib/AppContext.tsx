"use client";
import { createContext, useEffect, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'uz' | 'ru';

interface AppContextType {
  theme: Theme;
  lang: Language;
  toggleTheme: () => void;
  setLang: (lang: Language) => void;  
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [lang, setLang] = useState<Language>('en');

  // --- 1. Load BOTH preferences on mount ---
  useEffect(() => {
    // Theme Persistence
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }

    // Language Persistence
    const savedLang = localStorage.getItem("lang") as Language | null;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // --- 2. Correct toggle function ---
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // --- 3. Correct setLang function ---
  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang); // Save the choice!
  };

  return (
    <AppContext.Provider value={{ 
      theme, 
      lang, 
      toggleTheme, 
      setLang: handleSetLang // Use the new wrapper function
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}