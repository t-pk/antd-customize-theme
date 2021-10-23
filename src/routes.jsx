import React from 'react';

import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';

const LoginPage = React.lazy(() => import('./pages/login'));
const HomePage = React.lazy(() => import('./pages/home'));
const AccountPage = React.lazy(() => import('./pages/account'));

const NotFoundPage = React.lazy(() => import('./pages/not-found'));

const routes = [
  {
    path: '/',
    exact: true,
    layout: PrivateLayout,
    main: HomePage,
    name: 'HomePage',
  },
  {
    path: '/login',
    exact: true,
    layout: PublicLayout,
    main: LoginPage,
    name: 'LoginPage',
  },
  {
    path: '/account',
    exact: true,
    layout: PrivateLayout,
    main: AccountPage,
    isPrivate: true,
    name: 'AccountPage',
  },
  {
    path: '*',
    exact: true,
    layout: PublicLayout,
    main: NotFoundPage,
    name: 'NotFoundPage',
  },
];

export default routes;
