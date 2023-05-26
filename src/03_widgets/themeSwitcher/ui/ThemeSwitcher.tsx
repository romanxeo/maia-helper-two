import {FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./ThemeSwitcher.module.scss"
import {useTheme} from "06_shared/hooks/useTheme";
import Sun from "06_shared/assets/icons/Sun.svg";
import Moon from "06_shared/assets/icons/Moon.svg";
import {Theme} from "06_shared/contexts/ThemeContext";
import {Button} from "06_shared/ui/button/Button";

type TProps = {
  className?: string;
}

const ThemeSwitcher: FC<TProps> = props => {

  const {
    className
  } = props

  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(s.body, {}, [className])}
      onClick={toggleTheme}
      variant="clear"
    >
      {theme === Theme.LIGHT
        ? <Moon color="white"/>
        : <Sun color="white"/>
      }
      Text
    </Button>
  );
};

export {ThemeSwitcher};