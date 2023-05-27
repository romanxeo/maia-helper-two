import {useTranslation} from "react-i18next";

const MainPage = () => {
  return (
    <div>
      MainPage
      <Comp/>
    </div>
  );
};

export default MainPage;


const Comp = () => {
  const {t} = useTranslation()

  return (
    <div>
      {t('test')}
    </div>
  )
}