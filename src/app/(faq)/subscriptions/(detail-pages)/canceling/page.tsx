import React from 'react';
import SectionBreadcrumbs from '@/app/(faq)/subscriptions/(detail-pages)/SectionBreadcrumbs';
import {GearIcon} from '@/assets/svg';
import appleIdScreen from '@/assets/img/apple-id-screen.png';
import manageSubscriptionAndroid from '@/assets/img/manage-subscription-android.png';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import AndroidScreenshot from '@/app/(faq)/_components/AndroidScreenshot';
import HalfScreenshot from '@/app/(faq)/_components/HalfScreenshot';

const CancelingSubscription = () => {
  return (
    <main>
      <h1>How do I cancel my subscription or trial?</h1>
      <SectionBreadcrumbs />
      <section>
        <p>
          We are sorry that our App did not meet your expectations and you want to cancel your trial or subscription.
        </p>
        <p>
          We're sad to hear you'd like to stop exploring Human Design with us! If there's anything we can do for you,
          just let us know.
        </p>
        <p>
          If you would still like to unsubscribe, just follow the steps below. This will stop your subscription from
          renewing after the current time ends.
        </p>
        <p className={faqDetailStyles['full-color']}>
          ❗Note: Uninstalling the app does not automatically cancel your subscription.
        </p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <h2>To cancel your trial or subscription on iOS:</h2>
        <ul>
          <li>
            Open the Settings App <GearIcon /> on your iPhone and tap your name and Apple ID at the top.
          </li>
          <li>
            On the Apple ID page, tap <strong>Subscriptions</strong>. You may need to enter your password or use Touch ID or Face ID to
            log into your account.
          </li>
          <div className={faqDetailStyles['image-in-list']}>
            <HalfScreenshot imageSrc={appleIdScreen} />
          </div>
          <li>Review the list of active subscriptions. Find the HDesign App, tap it.</li>
          <li>
            On the subscription page, review the details about your subscription. To cancel this subscription, tap
            Cancel Subscription and then confirm your choice.
          </li>
        </ul>
        <p>
          If there is no Cancel button or you see an expiration message in red text, the subscription is already
          canceled.
        </p>
        <p>
          When you cancel a subscription mid-cycle, you will typically still have access to that service through the end
          of the current billing period.
        </p>
        <p>All the profile data will be deleted together with the app.</p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <h2>To cancel your trial or subscription on Android:</h2>
        <ul>
          <li>
            Open the <strong>Google Play Store</strong>. Make sure you are signed in to the Google account you used in
            purchasing the <strong>HDesign App</strong>.
          </li>
          <li>Tap the profile icon located at the top-right corner.</li>
          <li>
            Tap <strong>Payments & Subscription</strong>, then select <strong>Subscriptions</strong>.
          </li>
          <li>
            Select the <strong>HDesign Subscription.</strong>
          </li>
          <li>
            Tap <strong>Cancel Subscription</strong>.
          </li>
          <div className={faqDetailStyles['image-in-list']}>
            <AndroidScreenshot screenshotSrc={manageSubscriptionAndroid} />
          </div>
          <li>Follow the remaining instructions.</li>
        </ul>
        <p>
          When you cancel a subscription you’ll still be able to use your subscription for the time you’ve already paid.
        </p>
        <p>
          If you experience any issues with cancellation or want to share your feedback with our team, please email us
          at{' '}
          <a href="mailto:humdesignhd@gmail.com" className={faqDetailStyles['link--unbreakable']}>
            humdesignhd@gmail.com
          </a>
          .
        </p>
        <p>
          <strong>Hope you will join HD - Human Design Premium again in future ✨</strong>
        </p>
      </section>
    </main>
  );
};

export default CancelingSubscription;
