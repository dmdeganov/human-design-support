import React from 'react';
import {ForwardIcon} from '@/assets/svg';
import Link from "next/link";
import {createFullPath} from "@/utils/createFullPath";
import styles from '../../faq.module.scss';

const currentPath = '/troubleshooting';
const path = createFullPath.bind(currentPath);

const Subscriptions = () => {
  return (
    <div className={styles['faq']}>
      <div className={styles['faq__heading']}>
        <h1 className={styles['faq__title']} >Troubleshooting</h1>
        <p className={styles['faq__description']}>Lorem Ipsum dolor sit amet consectetur adipsing elit</p>
      </div>
      <div className={styles['faq__items']}>
        <Link href={path('change-profile-data')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>Can I change the data that I entered?</h4>
          <p className={styles['faq-item__description']}>
            Adipiscing dolor convallis amet libero maecenas. Consectetur ipsum eget ac facilisi sed sit.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('request-refund')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>How to request a refund?</h4>
          <p className={styles['faq-item__description']}>
            Auctor interdum neque vehicula neque augue vivamus vestibulum. Faucibus massa egestas in ut id.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('contact-support')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>How to contact support?</h4>
          <p className={styles['faq-item__description']}>
            Ac penatibus fermentum porttitor faucibus leo vitae pharetra facilisi aliquet.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('charged-during-trial')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>I was charged during trial</h4>
          <p className={styles['faq-item__description']}>
            Ac penatibus fermentum porttitor faucibus leo vitae pharetra facilisi aliquet.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
      </div>
    </div>
  );
};

export default Subscriptions;
