import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import cs from '01_app/styles/Common.module.scss';
import s from './AppLink.module.scss';

type TProps = LinkProps & {
  className?: string;
  Icon?: any;
}

const AppLink: FC<TProps> = (props) => {
  const {
    to,
    className,
    Icon,
    children,
    ...otherProps
  } = props;

  const location = useLocation();

  return (
    <Link
      to={to}
      className={classNames(
        cs['menu-item-body'],
        { [s.active]: to === location.pathname },
        [className],
      )}
      {...otherProps}
    >
      {Icon && (
        <div className={cs['menu-item-icon']}>
          <Icon />
        </div>
      )}
      {children}
    </Link>
  );
};

export { AppLink };
