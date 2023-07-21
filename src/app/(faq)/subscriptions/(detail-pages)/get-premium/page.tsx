import React from 'react';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import styles from './get-premium.module.scss';
import SectionBreadcrumbs from '@/app/(faq)/subscriptions/(detail-pages)/SectionBreadcrumbs';
import lockedArticles from '@/assets/img/locked-articles.png';
import openFullAccess from '@/assets/img/open-full-access.png';
import applePayPopup from '@/assets/img/apple-pay-popup.png';

import HalfScreenshot from '@/app/(faq)/_components/HalfScreenshot';
import IphoneScreenshot from '@/app/(faq)/_components/IphoneScreenshot';

const GetPremium = () => {
  return (
    <main className={styles['get-premium']}>
      <h1>How to get HD - Human Design Premium?</h1>
      <SectionBreadcrumbs />
      <h2>Wondering how to get a premium subscription? Here's a short guide!</h2>
      <section className={`${faqDetailStyles['underline']} pt-6`}>
        <p>1. When you open the App, tap on one of the locked articles at the bottom of your screen:</p>
        <HalfScreenshot imageSrc={lockedArticles} />
      </section>
      <section className={faqDetailStyles['underline']}>
        <p>2. Choose the option that works for you:</p>
        <IphoneScreenshot screenshotSrc={openFullAccess} />
      </section>
      <section className={faqDetailStyles['underline']}>
        <p>3. After you've made your choice, click on the Subscribe button and confirm the payment option.</p>
        <IphoneScreenshot screenshotSrc={applePayPopup} />
        <p>We hope this helps! 👍</p>
      </section>
    </main>
  );
};

export default GetPremium;
