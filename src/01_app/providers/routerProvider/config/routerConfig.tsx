import {RouteProps} from "react-router-dom";
import {MainPage} from "02_pages/MainPage";
import {AboutPage} from "02_pages/AboutPage";


export enum Routers {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RouterPath: Record<Routers, string> = {
  [Routers.MAIN]: "/",
  [Routers.ABOUT]: "/about",
}

export const routerConfig: Record<Routers, RouteProps> = {
  [Routers.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />
  },
  [Routers.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPage />
  },
}