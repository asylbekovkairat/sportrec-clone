import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { SetLocaleView } from '~features/shared/locale';
import { RoutesUrls } from '~shared/lib/router';

import {
  CupIcon,
  Header,
  HomeIcon,
  LiveIcon,
  OrganizationIcon,
  ShopIcon,
  SiteLink,
  SiteLogo,
  UsersIcon,
} from '~shared/ui';
import { INavTabItem } from '~widgets/shared/navigation';

export interface SiteHeaderProps extends Partial<ComponentWithChild> {}

export const SiteHeader: FC<SiteHeaderProps> = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const routes: INavTabItem[] = [
    {
      title: 'Лента',
      icon: <HomeIcon />,
      isTabBar: true,
      path: RoutesUrls.root,
    },
    {
      title: 'Маркетплейс',
      icon: <ShopIcon />,
      isTabBar: true,
      path: RoutesUrls.login,
    },
    {
      title: 'Рейтинги',
      icon: <UsersIcon />,
      isTabBar: true,
      path: RoutesUrls.login,
    },
    {
      title: 'Соревнования',
      icon: <CupIcon />,
      isTabBar: true,
      path: RoutesUrls.login,
    },
    {
      title: 'Организации',
      icon: <OrganizationIcon />,
      isTabBar: true,
      path: RoutesUrls.login,
    },
    {
      title: 'Live',
      icon: <LiveIcon />,
      isTabBar: true,
      path: RoutesUrls.login,
    },
  ];

  const renderNavLinks = routes.map((route) => (
    <SiteLink key={route.path} className="flex items-center gap-5" {...route} />
  ));

  return (
    <Header className="mx-auto justify-between">
      <div className="flex justify-between items-center">
        <SiteLogo />
      </div>
      <div className="flex items-center gap-[32px]">{renderNavLinks}</div>

      <div className="flex">
        <SetLocaleView />
      </div>
    </Header>
  );
};
