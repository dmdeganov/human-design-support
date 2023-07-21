import React from 'react';
import SectionBreadcrumbs from '@/app/(faq)/subscriptions/(detail-pages)/SectionBreadcrumbs';
import {GearIcon} from '@/assets/svg';
import IphoneScreenshot from '@/app/(faq)/_components/IphoneScreenshot';
import iphoneSubscription from '@/assets/img/iphone-subscription.png';
import iphoneSubscriptionPlans from '@/assets/img/iphone-subscription-plans.png';
import faqDetailStyles from "@/app/faq-detail-layout.module.scss";

const Page = () => {
  return (
    <main>
      <h1>How to switch HD - Human Design to a different subscription plan?</h1>
      <SectionBreadcrumbs />
      <section>
        <h2>Wondering how to switch to a different subscription plan? Here's a short guide!</h2>
        <ul>
          <li>
            Open the <strong>Settings App</strong>. <GearIcon/>
          </li>
          <li>Tap your name, then tap <strong>Subscriptions</strong>.</li>
          <li>Find <strong>HDesign App</strong> and Tap it.</li>
        </ul>
        <IphoneScreenshot screenshotSrc={iphoneSubscription} />
      </section>
      <section className={faqDetailStyles['underline']}>
        <p>
          Tap <strong>See All Plans</strong>, then follow the onscreen instructions to complete your purchase.
        </p>
        <IphoneScreenshot screenshotSrc={iphoneSubscriptionPlans} />
        <p>
          <strong>We hope this helps! 👍</strong>
        </p>
      </section>
    </main>
  );
};

export default Page;
