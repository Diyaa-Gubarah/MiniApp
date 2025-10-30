import { ThemeContext } from "@contexts";
import { ITheme } from "@types";
import { useContext } from "react";

// Hook for consuming theme
export const useAppTheme = (): ITheme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within ThemeProvider');
  }
  return context.theme;
};
