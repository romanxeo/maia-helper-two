import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { useTheme } from '06_shared/hooks/useTheme';
import Sun from '06_shared/assets/icons/Sun.svg';
import Moon from '06_shared/assets/icons/Moon.svg';
import { Theme } from '06_shared/contexts/ThemeContext';
import { Button } from '06_shared/ui/button/Button';
import cs from '01_app/styles/Common.module.scss';

type TProps = {
  className?: string;
}

const ThemeSwitcher: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cs['menu-item-body'], {}, [className])}
      onClick={toggleTheme}
      variant="clear"
    >
      <div className={cs['menu-item-icon']}>
        {theme === Theme.LIGHT
          ? <Moon />
          : <Sun />}
      </div>
      {theme === Theme.LIGHT
        ? 'Dark'
        : 'Light'}
    </Button>
  );
};

export { ThemeSwitcher };
