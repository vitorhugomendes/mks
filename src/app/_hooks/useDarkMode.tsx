import { useContext } from 'react';
import { DarkModeContext } from '../_providers/DarkModeProvider';

export const useDarkMode = () => {
  const darkModeContext = useContext(DarkModeContext);

  return darkModeContext;
};
