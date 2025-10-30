import { theme } from '@theme';
import { ThemeContextProps } from '@types';
import React, { createContext, ReactNode } from 'react';

// Create context
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
