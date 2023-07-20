import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './layouts/MainLayout';
import GuestGuard from './components/GuestGuard';
import AuthGuard from './components/AuthGuard';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
// const Login = Loadable(lazy(() => import('./components/LoadingScreen')));
const Login = Loadable(lazy(() => import('./pages/auth/Login')));
const Register = Loadable(lazy(() => import('./pages/auth/Register')));

//  * HOME PAGE
const Home = Loadable(lazy(() => import('./pages/home/Home')));

const routes: RouteObject[] = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />{' '}
          </GuestGuard>
        ),
      },
    ],
  },

  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
      },
    ],
  },
];

export default routes;