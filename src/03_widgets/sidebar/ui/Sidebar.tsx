import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames';
import { useToggle } from '06_shared/hooks/useToggle';
import { ThemeSwitcher } from '05_entities/themeSwitcher';
import { LanguageSwitcher } from '05_entities/languageSwitcher';
import s from './Sidebar.module.scss';

type TProps = {
  className?: string;
}

const Sidebar: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  const [toggle, setToggle] = useToggle(false);

  return (
    <div className={classNames(s.body, { [s.collapsed]: toggle }, [className])}>
      <button
        type="button"
        onClick={setToggle}
      >
        toggle
      </button>
      <div>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export { Sidebar };
