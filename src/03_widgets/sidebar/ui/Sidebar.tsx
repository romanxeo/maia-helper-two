import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { ThemeSwitcher } from '05_entities/themeSwitcher';
import { LanguageSwitcher } from '05_entities/languageSwitcher';
import { useMenu } from '06_shared/hooks/useMenu';
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
    <div className={classNames(s.body, { [s.collapsed]: menu }, [className])}>
      <div>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export { Sidebar };
