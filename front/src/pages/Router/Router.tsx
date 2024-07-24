import { useRoutes } from 'react-router-dom';

import { SiteLayout } from '~pages/layouts';
import { OrganizationPage } from '~pages/organization';
import { NotFoundPage } from '~pages/shared/not-found';
import { RoutesUrls } from '~shared/lib/router';

const routes = [
  {
    path: RoutesUrls.root,
    element: <SiteLayout />,
    children: [
      { path: RoutesUrls.login, element: <>Login</> },
      { path: RoutesUrls.organization, element: <OrganizationPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
