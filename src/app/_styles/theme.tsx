'use client';

import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useDarkMode } from '../_hooks';

const lightTheme = {
  colors: {
    primary: '#0F52BA',
    background: '#ffffff',
    feedback: {
      negative: '#E60000',
      warning: '#FFCD07',
      sucess: '#168821',
      information: '#155BCB',
    },
  },
};

const darkTheme = {
  colors: {
    primary: '#0F52BA',
    background: '#2C2C2C',
    feedback: {
      negative: '#E60000',
      warning: '#FFCD07',
      sucess: '#168821',
      information: '#155BCB',
    },
  },
};

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    outline:0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  body, html {
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    /* display: table; */
  }

  main {
   background-color: ${({ theme }) => theme.colors.background};;
   position: relative;
  }

  button {
    cursor: pointer;
  }
`;

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
