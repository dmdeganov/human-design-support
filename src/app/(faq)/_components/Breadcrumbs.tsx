import React from 'react';
import styles from './breadcrumbs.module.scss';
import {BreadcrumbForwardIcon} from '@/assets/svg';
import Link from 'next/link';

interface Props {
  breadcrumbs: Array<{
    href: string;
    tittle: string;
  }>;
}

const Breadcrumbs = ({breadcrumbs}: Props) => {
  return (
    <div className={styles['breadcrumbs']}>
      <div className={styles['breadcrumbs__inner']}>
        {breadcrumbs.map(({href, tittle}) => (
          <React.Fragment key={href}>
            <Link  href={href} className={styles['breadcrumbs__item']}>
              {tittle}
            </Link>
            <BreadcrumbForwardIcon className={styles['breadcrumbs__arrow']} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
