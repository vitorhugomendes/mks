'use client';

import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const mainTheme = {
  fonts: {
    primary: 'Inter',
  },
  colors: {
    primary: '#0F52BA',
    gray1: '#7d8597',
    text: '#FFFFFF',
    background: '#F9F9F9',
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
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    background-color: #f4f4f4;
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
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
