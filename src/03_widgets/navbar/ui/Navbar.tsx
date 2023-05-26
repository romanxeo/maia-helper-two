import {FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./Navbar.module.scss"
import {AppLink} from "06_shared/ui/appLink/AppLink";
import {ThemeSwitcher} from "03_widgets/themeSwitcher";

type TProps = {
  className?: string;
}

const Navbar: FC<TProps> = props => {

  const {
    className
  } = props

  return (
    <div className={classNames(s.body, {}, [className])}>
      <div>
        HEADER
        <ThemeSwitcher className={''}/>
      </div>
      <div>
        <AppLink to={'/'}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};

export {Navbar};
