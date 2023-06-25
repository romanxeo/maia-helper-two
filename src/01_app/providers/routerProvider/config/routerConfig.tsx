import { RouteProps } from 'react-router-dom';
import { MainPage } from '02_pages/MainPage';
import { AboutPage } from '02_pages/AboutPage';
import { NotFoundPage } from '02_pages/NotFoundPage';

export enum Routers {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutersPath: Record<Routers, string> = {
  [Routers.MAIN]: '/',
  [Routers.ABOUT]: '/about',
  [Routers.NOT_FOUND]: '/404',
};

export const routerConfig: Record<Routers, RouteProps> = {
  [Routers.MAIN]: {
    path: RoutersPath.main,
    element: <MainPage />,
  },
  [Routers.ABOUT]: {
    path: RoutersPath.about,
    element: <AboutPage />,
  },
  [Routers.NOT_FOUND]: {
    path: RoutersPath.not_found,
    element: <NotFoundPage />,
  },
};
