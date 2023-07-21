import React from 'react';
import {cookies} from 'next/headers';
import Providers from '@/app/_providers/Providers';
import {RotatingChakras, Footer, Header} from '@/app/_layout-components';
import {layoutStyles} from '@/app/_layout-components/styles';
import '@/globalStyles/main.scss';
import {ThemesUnion} from '@/types/theme';
import CookiesModal from "@/app/_layout-components/CookiesModal";

export const metadata = {
  title: 'Human Design Support',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const cookieStore = cookies();
  const areCookiesAllowed = (cookieStore.get('cookies_enabled')?.value || false) as boolean;
  const themeFromCookie = cookieStore.get('theme');
  const initialTheme = (themeFromCookie?.value || 'dark') as ThemesUnion;
  const fontWeightinessFromCookie = cookieStore.get('font-weightiness');
  const initialFontWeightiness = (fontWeightinessFromCookie?.value || null) as 'default' | 'thinner' | null

  return (
    <html lang="en" data-font_weightiness={initialFontWeightiness || 'default'} data-theme={initialTheme} suppressHydrationWarning>
      <body>
        <div className={layoutStyles['root-layout']}>
          <Providers initialTheme={initialTheme} initialFontWeightiness={initialFontWeightiness}>
            <Header />
            <RotatingChakras />
            <div className={layoutStyles['page-content']}>{children}</div>
            <CookiesModal areCookiesAllowed={areCookiesAllowed}/>
            <Footer />
          </Providers>
        </div>
        <div id="portal" />
      </body>
    </html>
  );
}
