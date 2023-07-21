export type ThemesUnion = 'light' | 'dark';

export interface ThemeContextI {
  toggleTheme: () => void;
  currentTheme: ThemesUnion;
}
