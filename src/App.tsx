import {Counter} from "./components/Counter";
import "./styles/index.scss"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense} from "react";
import ThemeProvider from "./theme/ThemeProvider";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const _App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        HEADER
        <button onClick={toggleTheme}>Theme</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />}/>
          <Route path={'/'} element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
      <Counter/>
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