import { useRoutes } from 'react-router-dom';

import { BaseLayout, SiteLayout } from '~pages/layouts';
import { LoginPage } from '~pages/shared/login';
import { LogoutPage } from '~pages/shared/logout';
import { NotFoundPage } from '~pages/shared/not-found';
import { SettingsPage } from '~pages/shared/settings';
import { RequireAuth, RoutesUrls } from '~shared/lib/router';

const routes = [
  {
    path: RoutesUrls.root,
    element: <SiteLayout />,
    children: [
      { path: RoutesUrls.login, element: <LoginPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: RoutesUrls.cabinet,
    element: <RequireAuth loginPath={RoutesUrls.login} />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          { path: RoutesUrls.settings, element: <SettingsPage /> },
          { path: RoutesUrls.logout, element: <LogoutPage /> },
        ],
      },
    ],
  },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
