import { FC, useEffect } from 'react';

import { useCollapsed, useSetCollapsed } from '~features/shared/collapse';
import { useTranslation } from '~shared/lib/i18n';
import { RoutesUrls } from '~shared/lib/router';
import { LogoutIcon, SettingsIcon, Sider, useWindowInnerWidth } from '~shared/ui';
import { INavTabItem } from '~widgets/shared/navigation/ui/types';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const collapsedAtom = useCollapsed();
  const setCollapsed = useSetCollapsed();
  const windowWidth = useWindowInnerWidth();

  useEffect(() => {
    if (windowWidth <= 768) {
      if (collapsedAtom) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [collapsedAtom, windowWidth]);

  const routes: INavTabItem[] = [];

  const settingsRoutes: INavTabItem[] = [
    {
      title: t('cm:routes.settings'),
      path: RoutesUrls.settings,
      icon: <SettingsIcon />,
      isBlank: false,
    },
    {
      title: t('cm:bottomLinks.logout'),
      path: RoutesUrls.logout,
      icon: <LogoutIcon />,
      isBlank: false,
    },
  ];

  const handleClickButton = () => {
    if (windowWidth <= 768) {
      setCollapsed(!collapsedAtom);
    }
  };

  return (
    <>
      <Sider
        user={<></>}
        routes={routes.map((item) => {
          return <></>;
        })}
        links={null}
        settings={settingsRoutes?.map((item) => {
          return <></>;
        })}
        collapsed={collapsedAtom}
      />
    </>
  );
};
