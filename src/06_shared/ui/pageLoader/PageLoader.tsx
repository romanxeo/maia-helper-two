import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import Spinner from '06_shared/assets/spinners/Spinner.svg';
import s from './PageLoader.module.scss';

type TProps = {
  className?: string;
}

const PageLoader: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(s.body, {}, [className])}>
      <Spinner />
    </div>
  );
};

export { PageLoader };
