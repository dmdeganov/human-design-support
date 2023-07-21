import React from 'react';
import {ForwardIcon} from '@/assets/svg';
import styles from '../../faq.module.scss';
import {createFullPath} from "@/utils/createFullPath";
import Link from "next/link";

const currentPath = '/subscriptions';
const path = createFullPath.bind(currentPath);

const Subscriptions = () => {
  return (
    <div className={styles['faq']}>
      <div className={styles['faq__heading']}>
        <h1 className={styles['faq__title']}>Subscriptions</h1>
        <p className={styles['faq__description']}>Ut molestie sed nisi eu ultrices egestas mauris non sollicitudin</p>
      </div>
      <div className={styles['faq__items']}>
        <Link href={path('premium')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>What is a HD - Human Design App Premium subscription?</h4>
          <p className={styles['faq-item__description']}>
            Adipiscing dolor convallis amet libero maecenas. Consectetur ipsum eget ac facilisi sed sit.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('get-premium')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>How to get HD - Human Design Premium?</h4>
          <p className={styles['faq-item__description']}>
            Auctor interdum neque vehicula neque augue vivamus vestibulum. Faucibus massa egestas in ut id.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('switching')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>How to switch HD - Human Design to a different subscription plan?</h4>
          <p className={styles['faq-item__description']}>
            Ac penatibus fermentum porttitor faucibus leo vitae pharetra facilisi aliquet.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('automatic-charging')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>Why was I automatically charged?</h4>
          <p className={styles['faq-item__description']}>
            Ac penatibus fermentum porttitor faucibus leo vitae pharetra facilisi aliquet.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('canceling')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>How do I cancel my subscription or trial?</h4>
          <p className={styles['faq-item__description']}>
            Ac penatibus fermentum porttitor faucibus leo vitae pharetra facilisi aliquet.
          </p>
          <ForwardIcon className={styles['faq-item__forward-icon']} />
        </Link>
        <Link href={path('restoring')} className={styles['faq-item']}>
          <h4 className={styles['faq-item__title']}>How do I restore my subscription?</h4>
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
