import "./styles/index.scss"
import {BrowserRouter, Link} from "react-router-dom";
import {useTheme} from "06_shared/hooks/useTheme";
import {classNames} from "06_shared/helpers/classNames";
import {ThemeProvider} from "01_app/providers/themeProvider";
import {RouterProvider} from "01_app/providers/routerProvider/";



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
      <RouterProvider />
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