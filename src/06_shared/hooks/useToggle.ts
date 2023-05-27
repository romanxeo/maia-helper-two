import { useState } from 'react';

export function useToggle(init: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(init);

  const toggleValue = () => {
    setValue(!value);
  };

  return [
    value,
    toggleValue,
  ];
}
