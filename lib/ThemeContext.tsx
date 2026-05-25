// "use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark"; // Only dark theme supported

type ThemeContextType = {
  theme: Theme;
  // setTheme and toggleTheme are no-ops to keep dark mode permanently
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>("dark"); // Fixed to dark

  // Ensure dark mode class is present on body
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  const setTheme = (t: Theme) => {
    // No operation, keep dark theme
    console.warn("Theme changes are disabled; dark mode is enforced.");
  };

  const toggleTheme = () => {
    // No operation, keep dark theme
    console.warn("Theme toggle is disabled; dark mode is enforced.");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
