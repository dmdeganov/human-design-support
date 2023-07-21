'use client';
import {useEffect, useState} from 'react';
import {useEffectOnUpdate} from '@/hooks/useEffectOnUpdate';
import {ThemesUnion} from '@/types/theme';
import {setCookie, getCookie} from 'cookies-next';

const useThemeHook = (initialTheme: ThemesUnion) => {
  const isSamsungBrowser = typeof window !== 'undefined' ? navigator.userAgent.match(/samsung/i) : false;

  const [currentTheme, setCurrentTheme] = useState<ThemesUnion>(initialTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      if (getCookie('cookies_enabled')) {
        setCookie('theme', newTheme, {expires: new Date(9999, 12)});
      }
      document.documentElement.dataset.theme = newTheme;
      return newTheme;
    });
  };

  useEffectOnUpdate(() => {
    document.documentElement.dataset.theme = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    if (!isSamsungBrowser) return;
    setTimeout(() => {
      alert(
        'Your browser (Samsung Internet) may not show this website correctly. Please consider' +
          ' using a' +
          ' standards-compliant browser instead.',
      );
    }, 1000);
  }, []);

  return {toggleTheme, currentTheme};
};

export default useThemeHook;
