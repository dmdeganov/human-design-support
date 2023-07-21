import React from 'react';
import SectionBreadcrumbs from '@/app/(faq)/subscriptions/(detail-pages)/SectionBreadcrumbs';
import IphoneScreenshot from '@/app/(faq)/_components/IphoneScreenshot';
import AndroidScreenshot from '@/app/(faq)/_components/AndroidScreenshot';
import subscriptionRestoringIos from '@/assets/img/restore-subscription-ios.png';
import subscriptionRestoringAndroid from '@/assets/img/restore-subscription-android.png';
import screenshotsGroupStyles from '@/app/(faq)/_components/screenshot-group.module.scss';
import faqDetailStyles from "@/app/faq-detail-layout.module.scss";

const RestoringSubscription = () => {
  return (
    <main>
      <h1>How do I restore my subscription?</h1>
      <SectionBreadcrumbs />
      <section>
        <p>
          Open the App and find the subscription pop up and use the Restore button to restore your previous purchases.
        </p>
        <div>
          <div className={screenshotsGroupStyles['screenshots-group']}>
            <IphoneScreenshot screenshotSrc={subscriptionRestoringIos} removeShape />
            <AndroidScreenshot screenshotSrc={subscriptionRestoringAndroid} />
          </div>
        </div>
        <p>
          If the subscription is restored correctly, the premium content in the HD - Human Design app will be unlocked.
        </p>
        <p>
          That's it! If your subscription isn't restored correctly, please contact our support team by sending us an
          email at <a href='mailto:humdesignhd@gmail.com' className={faqDetailStyles['link--unbreakable']}>humdesignhd@gmail.com</a>.
        </p>
      </section>
    </main>
  );
};

export default RestoringSubscription;
