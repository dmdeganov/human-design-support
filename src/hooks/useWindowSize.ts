import React  from 'react';
import {mobileMaxWidth} from '@/static';

function onWindowSizeChange(onChange: () => void) {
  window.addEventListener('resize', onChange);

  return () => {
    window.removeEventListener('resize', onChange);
  };
}

const getWindowWidthSnapshot = () => window.innerWidth;

const getScreenHeight = () => window.screen.height;
const getScreenWidth = () => window.screen.width;

export function useWindowSize() {
  const windowWidth = React.useSyncExternalStore(onWindowSizeChange, getWindowWidthSnapshot);

  const screenHeight = React.useSyncExternalStore(onWindowSizeChange, getScreenHeight);
  const screenWidth = React.useSyncExternalStore(onWindowSizeChange, getScreenWidth);
  const isMobileWidth = windowWidth <= mobileMaxWidth;

  return {windowWidth, screenHeight, screenWidth, isMobileWidth};
}
