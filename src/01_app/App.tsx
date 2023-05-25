import "./styles/index.scss"
import {BrowserRouter} from "react-router-dom";
import {classNames} from "06_shared/helpers/classNames";
import {ThemeProvider} from "01_app/providers/themeProvider";
import {RouterProvider} from "01_app/providers/routerProvider/";
import {Navbar} from "03_widgets/navbar";
import {useTheme} from "06_shared/hooks/useTheme";



const _App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar/>
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