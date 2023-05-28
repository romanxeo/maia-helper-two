import { RouteProps } from 'react-router-dom';
import { MainPage } from '02_pages/MainPage';
import { AboutPage } from '02_pages/AboutPage';
import { NotFoundPage } from '02_pages/NotFoundPage';

export enum Routers {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const routerConfig: Record<Routers, RouteProps> = {
  [Routers.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [Routers.ABOUT]: {
    path: '/about',
    element: <AboutPage />,
  },
  [Routers.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
