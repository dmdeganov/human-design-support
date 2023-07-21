'use client';
import {createTheme, ThemeProvider} from '@mui/material';
import SFPro from '@/assets/fonts/SF-Pro-Display-Regular.otf';
import SFProBold from '@/assets/fonts/SF-Pro-Display-Bold.otf';
import React from 'react';

const common = {
  typography: {
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SF Pro Text';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('SF Pro'), url(${SFPro}) format('otf');
        },
        @font-face {
          font-family: 'SF Pro Text';
          font-style: bold;
          font-display: swap;
          font-weight: 700;
          src: local('SF Pro'), url(${SFProBold}) format('otf');
        },
      `,
    },
  },
};

export const muiTheme = createTheme(common);

interface Props {
  children: React.ReactNode
}
export default function MaterialUIProvider({children}: Props) {
  return (
    <ThemeProvider theme={muiTheme}>{children} </ThemeProvider>
  );
}
