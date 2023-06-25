import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { useMenu } from '06_shared/hooks/useMenu';
import { Button } from '06_shared/ui/button/Button';
import s from './MenuSwitcher.module.scss';

type TProps = {
  className?: string;
}

const MenuSwitcher: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  const { menu, toggleMenu } = useMenu();

  return (
    <Button
      className={classNames(s.body, { [s.active]: menu }, [className])}
      onClick={toggleMenu}
      variant="clear"
    >
      <span>{}</span>
      <span>{}</span>
      <span>{}</span>
      <span>{}</span>
    </Button>
  );
};

export { MenuSwitcher };
