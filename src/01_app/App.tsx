import "./styles/index.scss"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "06_shared/hooks/useTheme";
import {classNames} from "06_shared/helpers/classNames";
import {ThemeProvider} from "01_app/providers/themeProvider";
import {AboutPage} from "02_pages/AboutPage";
import { MainPage } from "02_pages/MainPage";



const _App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <div>
          HEADER
          <button onClick={toggleTheme}>Theme</button>
        </div>
        <div>
          <Link to={'/'}>Main</Link>
          <Link to={'/about'}>About</Link>
        </div>
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <_App/>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;