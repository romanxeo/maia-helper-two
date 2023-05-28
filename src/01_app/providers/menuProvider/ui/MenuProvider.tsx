import React, { FC, useMemo, useState } from 'react';
import { MenuContext } from '06_shared/contexts/MenuContext';

const MenuProvider: FC = ({ children }) => {
  const [menu, setMenu] = useState<boolean>(false);

  const value = useMemo(() => ({
    menu,
    setMenu,
  }), [menu]);

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
