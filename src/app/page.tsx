import React from 'react';
import Image from 'next/image'
import GettingStartedLogo from '@/assets/img/gettingStarted.png';
import SubscriptionLogo from '@/assets/img/subscription.png';
import TroubleshootingLogo from '@/assets/img/troubleshooting.png';
import styles from './help.module.scss';
import Link from "next/link";


const HelpCentre = () => {
  return (
    <div className={styles["help"]}>
      <div className={styles["help__heading"]}>
        <h1 className={styles["help__tittle"]}>Help centre</h1>
        <p className={styles["help__description"]}>Everything you need to know about HDesign and billing.</p>
      </div>
      <div className={styles["help-menu"]}>
        <Link href="/getting-started" className={styles['help-card']}>
          <div className={styles["help-card__icon"]}>
            <Image src={GettingStartedLogo} alt=""  width={108} height={108}/>
          </div>
          <h2 className={styles["help-card__title"]}>Getting started</h2>
          <p className={styles["help-card__description"]}>Lorem Ipsum dolor sit amet consectetur adipsing elit</p>
        </Link >
        <Link href="/subscriptions"  className={styles['help-card']}>
          <div className={styles["help-card__icon"]} >
            <Image src={SubscriptionLogo} alt=""  width={108} height={108}/>
          </div>
          <h2 className={styles["help-card__title"]}>Subscriptions</h2>
          <p className={styles["help-card__description"]}>Ut molestie sed nisi eu ultrices egestas mauris non sollicitudin</p>
        </Link>
        <Link href="/troubleshooting"  className={styles['help-card']}>
          <div className={styles["help-card__icon"]} >
            <Image src={TroubleshootingLogo} alt=""  width={108} height={108}/>
          </div>
          <h2 className={styles["help-card__title"]}>Troubleshooting</h2>
          <p className={styles["help-card__description"]}>Egestas urna sed dui mauris nibh tempor odio eu</p>
        </Link>
      </div>
    </div>
  );
};
export default HelpCentre;
