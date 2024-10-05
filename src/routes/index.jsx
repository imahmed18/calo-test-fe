import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CreateJob from '../pages/CreateJob';
import JobDetails from '../pages/JobDetails';
import { paths } from './paths';

const Layout = lazy(() => import('../layouts/Layout'));
const JobListing = lazy(() => import('../pages/JobListing'));
const Page404 = lazy(() => import('../pages/Page404'));
const Loader = lazy(() => import('../components/lazy/Loader'));

export default function Router() {
  return useRoutes([
    {
      path: paths.PATH_JOB.root,
      element: (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        { element: <JobListing />, index: true },
        { path: paths.PATH_JOB.createJob, element: <CreateJob /> },
        { path: paths.PATH_JOB.jobById, element: <JobDetails /> },
      ],
    },
    { path: '*', element: <Page404 /> },
  ]);
}
