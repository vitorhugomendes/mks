import { useContext } from 'react';
import { DarkModeContext } from '../_providers/DarkModeProvider';

export default function useDarkMode() {
  const darkModeContext = useContext(DarkModeContext);

  return darkModeContext;
}
