import {RouteProps} from "react-router-dom";
import {MainPage} from "02_pages/MainPage";
import {AboutPage} from "02_pages/AboutPage";


export enum Routers {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routerConfig: Record<Routers, RouteProps> = {
  [Routers.MAIN]: {
    path: "/",
    element: <MainPage />
  },
  [Routers.ABOUT]: {
    path: "/about",
    element: <AboutPage />
  },
}