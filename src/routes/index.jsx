import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = lazy(() => import('../layouts/Layout'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Page404 = lazy(() => import('../pages/Page404'));
const Loader = lazy(() => import('../components/lazy/Loader'));

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [{ element: <Dashboard />, index: true }],
    },
    { path: '*', element: <Page404 /> },
  ]);
}
