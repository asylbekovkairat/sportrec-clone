import classNames from 'classnames';
import { FC } from 'react';

import useScrollListener from '~shared/lib/hooks/useScrollListener';
import { useWindowInnerWidth } from '~shared/ui/utils';

import styles from './header.module.scss';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const Header: FC<HeaderProps> = ({ children, className = '' }) => {
  const scroll = useScrollListener();
  const windowWidth = useWindowInnerWidth();

  const headerClass = classNames(
    styles.content,
    windowWidth <= 768 && scroll.y > 150 && scroll.y - scroll.lastY > 0 ? styles.hidden : '',
    className
  );

  return (
    <header className={styles.wrapper}>
      <div className={headerClass}>{children}</div>
    </header>
  );
};
