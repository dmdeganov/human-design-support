import React from 'react';
import ThemeProvider from './ThemeProvider';
import MaterialUIProvider from '@/app/_providers/MaterialUIProvider';
import {ThemesUnion} from "@/types/theme";

interface Props {
  children: React.ReactNode,
  initialTheme: ThemesUnion,
  initialFontWeightiness: 'default' | 'thinner' | null,
}
export default function Providers({children, initialTheme, initialFontWeightiness}: Props) {
  return (
    <MaterialUIProvider>
      <ThemeProvider initialTheme={initialTheme} initialFontWeightiness={initialFontWeightiness}>{children}</ThemeProvider>
    </MaterialUIProvider>
  );
}
