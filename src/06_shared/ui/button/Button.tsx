import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./Button.module.scss"

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "clear";
}

const Button: FC<TProps> = props => {

  const {
    className,
    variant,
    children,
    ...otherProps
  } = props
  
  return (
    <button
      className={classNames(s.body, {}, [className, variant && s[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export {Button};