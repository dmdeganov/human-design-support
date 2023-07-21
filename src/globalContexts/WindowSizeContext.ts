import {createContext} from "react";

export const WindowSizeContext = createContext({
  isMobileWidth: false,
  screenHeight: 0,
  windowWidth: 0,
  screenWidth: 0,
});
