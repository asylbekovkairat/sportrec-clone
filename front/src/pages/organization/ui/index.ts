import { lazyLoader } from '~shared/lib/utils';

export const OrganizationPage = lazyLoader(() =>
  import('./OrganizationPage').then((module) => ({ default: module.OrganizationPageContent }))
);
