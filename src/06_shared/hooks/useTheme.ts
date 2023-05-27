import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '06_shared/contexts/ThemeContext';

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): IUseTheme {
  const value = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = value?.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    value?.setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: value ? value.theme : Theme.LIGHT,
    toggleTheme,
  };
}
