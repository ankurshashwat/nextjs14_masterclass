"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
const Theme = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const handleTheme = () => {
    if (localStorage.theme === "dark" || matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleTheme();
  }, [mode]);

  return <Theme.Provider value={{ mode, setMode }}>{children}</Theme.Provider>;
}

export function useTheme() {
  const context = useContext(Theme);

  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
