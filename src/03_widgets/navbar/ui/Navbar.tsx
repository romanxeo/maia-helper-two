import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { MenuSwitcher } from '05_entities/menuSwitcher';
import s from './Navbar.module.scss';

type TProps = {
  className?: string;
}

const Navbar: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(s.body, {}, [className])}>
      <MenuSwitcher />
    </div>
  );
};

export { Navbar };
