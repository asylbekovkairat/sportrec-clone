import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface SiteLinkProps {
  title: string;
  path?: string;
  className?: string;
  icon?: ReactNode;
}

export const SiteLink: FC<SiteLinkProps> = ({
  title = '',
  path = '',
  icon = '',
  className = '',
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-[14px] font-semibold whitespace-nowrap ${className} ${
          isActive ? 'text-activeLink' : 'text-inactiveLink'
        }`
      }
    >
      {icon}
      {title}
    </NavLink>
  );
};
