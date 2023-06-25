import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { ThemeSwitcher } from '05_entities/themeSwitcher';
import { LanguageSwitcher } from '05_entities/languageSwitcher';
import { useMenu } from '06_shared/hooks/useMenu';
import { AppLink } from '06_shared/ui/appLink/AppLink';
import Home from '06_shared/assets/icons/Home.svg';
import About from '06_shared/assets/icons/About.svg';
import {
  RoutersPath,
} from '01_app/providers/routerProvider/config/routerConfig';
import s from './Sidebar.module.scss';

type TProps = {
  className?: string;
}

const Sidebar: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  const { menu } = useMenu();

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.body, { [s.collapsed]: menu }, [className])}
    >
      <div
        className={s.top}
      >
        <AppLink
          to={RoutersPath.main}
          Icon={Home}
        >
          Main
        </AppLink>
        <AppLink
          to={RoutersPath.about}
          Icon={About}
        >
          About
        </AppLink>
      </div>
      <div
        className={s.bottom}
      >
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export { Sidebar };
