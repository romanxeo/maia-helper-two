import { useContext } from 'react';
import { MenuContext } from '06_shared/contexts/MenuContext';

interface IUseTheme {
  menu: boolean;
  toggleMenu: () => void;
}

export function useMenu(): IUseTheme {
  const value = useContext(MenuContext);

  const toggleMenu = () => {
    if (!value) {
      return null;
    }
    value.setMenu(!value.menu);
    return null;
  };

  return {
    menu: Boolean(value?.menu),
    toggleMenu,
  };
}
