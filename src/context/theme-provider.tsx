
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'red' | 'yellow' | 'blue' | 'green';
const THEMES: Theme[] = ['light', 'dark', 'red', 'yellow', 'blue', 'green'];

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
  themes: THEMES,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'wbc-effurun-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      return storedTheme && THEMES.includes(storedTheme) ? storedTheme : defaultTheme;
    } catch (e) {
      console.error('Error reading theme from localStorage', e);
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all potential theme classes and attributes
    root.classList.remove('dark'); // For Tailwind's dark mode
    THEMES.forEach(t => root.classList.remove(`${t}-theme`)); // If using specific classes
    
    // Remove old data-theme attribute to be safe
    root.removeAttribute('data-theme');

    // Apply new theme
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      // For 'light', 'red', 'yellow', 'blue', 'green'
      root.setAttribute('data-theme', theme);
      if (theme !== 'light') { // Optionally add specific classes too
        // root.classList.add(`${theme}-theme`);
      }
    }

    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.error('Error saving theme to localStorage', e);
    }
  }, [theme, storageKey]);

  const setTheme = useCallback((newTheme: Theme) => {
    if (THEMES.includes(newTheme)) {
      setThemeState(newTheme);
    } else {
      console.warn(`Attempted to set invalid theme: ${newTheme}`);
    }
  }, []);

  const value = {
    theme,
    setTheme,
    themes: THEMES,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
