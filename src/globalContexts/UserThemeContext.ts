import {ThemeContextI} from '@/types/theme';
import {createContext} from "react";

export const UserThemeContext = createContext<ThemeContextI>({} as ThemeContextI);
