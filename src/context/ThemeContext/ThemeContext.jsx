import { createContext, useState } from "react";

const ThemeContext = createContext(null);

const ThemeComponent = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
