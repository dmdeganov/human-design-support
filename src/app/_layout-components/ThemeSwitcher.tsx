'use client';
import React, {useContext} from 'react';
import {styled} from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import {ThemeContext} from '@/app/_providers/ThemeProvider';

const MaterialUISwitch = styled(Switch)(({theme}) => {
  return {
    width: 51,
    height: 31,
    padding: 0,
    borderRadius: 15,
    alignItems: 'center',
    '& .MuiSwitch-switchBase': {
      padding: 0,
      transform: 'translate(3px, 2px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translate(22px, 2px);',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url(/sun.svg)`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'var(--switcher-bg)',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: 'var(--switcher-thumb-bg)',
      width: 27,
      height: 27,
      boxShadow: 'var(--switcher-thumb-shadow-1), var(--switcher-thumb-shadow-2)',
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(/moon.svg)`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      overflow: 'hidden',
      backgroundColor: 'var(--switcher-bg)',
      borderRadius: 15,
    },
  };
});

const ThemeSwitcher = () => {
  const {toggleTheme, currentTheme} = useContext(ThemeContext);

  return (
    <MaterialUISwitch
      checked={currentTheme === 'dark'}
      onChange={() => {
        toggleTheme();
      }}
    />
  );
};

export default ThemeSwitcher;
