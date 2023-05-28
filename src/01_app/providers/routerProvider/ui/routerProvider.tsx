import { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageLoader } from '06_shared/ui/pageLoader/PageLoader';
import { routerConfig } from '../config/routerConfig';

const RouterProvider: FC = () => {
  const routers = Object.values(routerConfig).map(({ element, path }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routers}
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default RouterProvider;
