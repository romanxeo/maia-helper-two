import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { Button } from '06_shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import s from './LanguageSwitcher.module.scss';

type TProps = {
  className?: string;
}

const LanguageSwitcher: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button
      data-testid="LanguageSwitcher"
      className={classNames(s.body, {}, [className])}
      onClick={toggleLanguage}
    >
      {t('change_language')}
    </Button>
  );
};

export { LanguageSwitcher };
