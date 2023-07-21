'use client';
import React, {createContext, useEffect} from 'react';
import {ThemeContextI, ThemesUnion} from '@/types/theme';
import useThemeHook from '@/hooks/useThemeHook';

export const ThemeContext = createContext<ThemeContextI>({} as ThemeContextI);
interface Props {
  children: React.ReactNode;
  initialTheme: ThemesUnion;
  initialFontWeightiness: 'default' | 'thinner' | null;
}

export default function ThemeProvider({children, initialTheme, initialFontWeightiness}: Props) {
  const {currentTheme, toggleTheme} = useThemeHook(initialTheme);

  useEffect(() => {
    if (!initialFontWeightiness) {
      const platform = navigator.userAgent.toLowerCase();
      if (platform.includes('mac os') || platform.includes('android')) {
        document.documentElement.dataset['font_weightiness'] = 'default';
      } else {
        document.documentElement.dataset['font_weightiness'] = 'thinner';
      }
    }
  }, []);

  return <ThemeContext.Provider value={{toggleTheme, currentTheme}}>{children} </ThemeContext.Provider>;
}
