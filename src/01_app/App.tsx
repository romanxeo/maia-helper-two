import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { classNames } from '06_shared/helpers/classNames/classNames';
import { ThemeProvider } from '01_app/providers/themeProvider';
import { RouterProvider } from '01_app/providers/routerProvider';
import { Navbar } from '03_widgets/navbar';
import { useTheme } from '06_shared/hooks/useTheme';
import { Sidebar } from '03_widgets/sidebar';
import { Footer } from '03_widgets/footer';
import { MenuProvider } from '01_app/providers/menuProvider';
import { ErrorBoundary } from '01_app/providers/errorBoundary';
import '06_shared/config/i18n/i18n';

const MainApp = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="app-content-page">
        <Sidebar />
        <div className="app-page-wrapper">
          <RouterProvider />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <MenuProvider>
          <MainApp />
        </MenuProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
