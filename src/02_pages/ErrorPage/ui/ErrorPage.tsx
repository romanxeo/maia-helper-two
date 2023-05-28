import { FC } from 'react';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { Button } from '06_shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import s from './ErrorPage.module.scss';

type TProps = {
  className?: string;
}

const ErrorPage: FC<TProps> = (props) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(s.body, {}, [className])}>
      <p>{t('Something went wrong!')}</p>
      <Button
        onClick={reloadPage}
      >
        Reload page
      </Button>
    </div>
  );
};

export default ErrorPage;
