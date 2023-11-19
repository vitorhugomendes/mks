'use client';

import React, { ReactNode, createContext, useState } from 'react';

interface IDarkModeProviderProps {
  children: ReactNode;
}

interface IDarkModeContextValues {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext({} as IDarkModeContextValues);

export const DarkModeProvider = ({ children }: IDarkModeProviderProps) => {
  // const localDarkMode = localStorage.getItem('mks:dark-mode') || false;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
