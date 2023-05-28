import { createContext } from 'react';

export interface IMenuContext {
  menu: boolean;
  setMenu: (menu: boolean) => void
}

export const MenuContext = createContext<IMenuContext | null>(null);
