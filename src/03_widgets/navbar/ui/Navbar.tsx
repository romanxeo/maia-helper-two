import {FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./Navbar.module.scss"
import {useTheme} from "06_shared/hooks/useTheme";
import AppLink from "06_shared/ui/appLink/AppLink";

type TProps = {
  className?: string;
}

const Navbar: FC<TProps> = props => {

  const {
    className
  } = props

  const {toggleTheme} = useTheme()

  return (
    <div className={classNames(s.body, {}, [className])}>
      <div>
        HEADER
        <button onClick={toggleTheme}>Theme</button>
      </div>
      <div>
        <AppLink to={'/'}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
