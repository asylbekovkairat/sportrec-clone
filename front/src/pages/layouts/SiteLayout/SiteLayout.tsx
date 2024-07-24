import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLayout } from '~shared/ui';

import { SiteFooter } from '~widgets/shared/site-footer';
import { SiteHeader } from '~widgets/shared/site-header';

export interface SiteLayoutProps extends Partial<ComponentWithChildren> {}

export const SiteLayout: FC<SiteLayoutProps> = () => {
  return (
    <>
      <PageLayout header={<SiteHeader />}>
        <div>
          <Outlet />
        </div>
        <SiteFooter />
      </PageLayout>
    </>
  );
};
