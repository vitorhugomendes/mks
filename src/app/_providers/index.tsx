import React from 'react';
import { DarkModeProvider } from './DarkModeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
