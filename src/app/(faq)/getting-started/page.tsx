import React from 'react';
import {ForwardIcon} from '@/assets/svg';
import styles from '../../faq.module.scss';
import Link from 'next/link';
import {createFullPath} from '@/utils/createFullPath';

const currentPath = '/getting-started';
const path = createFullPath.bind(currentPath);



const GettingStarted = () => {
  return (
    <div className={styles['faq']}>
      <div className={styles['faq__heading']}>
        <h1 className={styles['faq__title']}>Getting started</h1>
        <p className={styles['faq__description']}>Lorem Ipsum dolor sit amet consectetur adipsing elit</p>
      </div>
      <div className={styles['faq__items']}>
        <Link href={path('human-design')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>What is Human design?</h4>
          <p className={styles['faq-item__description']}>
            Adipiscing dolor convallis amet libero maecenas. Consectetur ipsum eget ac facilisi sed sit.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('download-app')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>How to download the Human Design app on iOS or Android</h4>
          <p className={styles['faq-item__description']}>
            Adipiscing dolor convallis amet libero maecenas. Consectetur ipsum eget ac facilisi sed sit.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        {/*<Link href={path('sign-into')} className={styles['faq-item']}>*/}
        {/*  <h4 className={styles['faq-item__title']}>How to sign in to the app on iOS or Android</h4>*/}
        {/*  <p className={styles['faq-item__description']}>*/}
        {/*    Adipiscing dolor convallis amet libero maecenas. Consectetur ipsum eget ac facilisi sed sit.*/}
        {/*  </p>*/}
        {/*  <ForwardIcon className={styles['faq-item__forward-icon']} />*/}
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default GettingStarted;
