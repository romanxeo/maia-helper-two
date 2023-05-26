import {FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./Navbar.module.scss"
import {AppLink} from "06_shared/ui/appLink/AppLink";

type TProps = {
  className?: string;
}

const Navbar: FC<TProps> = props => {

  const {
    className
  } = props

  return (
    <div className={classNames(s.body, {}, [className])}>
        <AppLink to={'/'}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
    </div>
  );
};

export {Navbar};
