import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { Button } from '06_shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import cs from '01_app/styles/Common.module.scss';
import Language from '06_shared/assets/icons/Language.svg';

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
      className={classNames(cs['menu-item-body'], {}, [className])}
      onClick={toggleLanguage}
      variant="clear"
    >
      <div className={cs['menu-item-icon']}>
        <Language />
      </div>
      {t('change_language')}
    </Button>
  );
};

export { LanguageSwitcher };
