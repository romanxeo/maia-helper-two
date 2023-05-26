import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./Button.module.scss"

export enum ThemeButton {
  CLEAR = "clear",
}

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<TProps> = props => {

  const {
    className,
    theme,
    children,
    ...otherProps
  } = props
  
  return (
    <button
      className={classNames(s.body, theme ? {[s[theme]]: true} : {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;