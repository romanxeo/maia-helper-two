import {FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";

type TProps = LinkProps & {
  className?: string;
}

const AppLink: FC<TProps> = props => {

  const {
    to,
    className,
    children,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(s.body, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export {AppLink};