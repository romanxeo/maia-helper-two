import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { Button } from '06_shared/ui/button/Button';
import { useMenu } from '06_shared/hooks/useMenu';
import s from './MenuSwitcher.module.scss';

type TProps = {
  className?: string;
}

const MenuSwitcher: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  const { toggleMenu } = useMenu();

  return (
    <Button
      className={classNames(s.body, {}, [className])}
      type="button"
      onClick={toggleMenu}
    >
      toggle
    </Button>
  );
};

export { MenuSwitcher };
