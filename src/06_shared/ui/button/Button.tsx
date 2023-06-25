import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import s from './Button.module.scss';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: 'clear' | 'outline' | 'background' | 'inverted';
  size?: 's' | 'm' | 'l'
}

const Button: FC<TProps> = (props) => {
  const {
    className,
    variant,
    size,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        s.body,
        {},
        [className, variant && s[variant], size ? s[size] : 'l'],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
