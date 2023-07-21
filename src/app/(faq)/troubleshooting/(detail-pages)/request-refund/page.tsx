import React from 'react';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import SectionBreadcrumbs from '@/app/(faq)/troubleshooting/(detail-pages)/SectionBreadcrumbs';

const RequestingRefund = () => {
  return (
    <main>
      <h1>How to request a refund?</h1>
      <SectionBreadcrumbs />
      <section>
        <p>
          First of all you should remember, uninstalling the app doesn’t automatically cancel your subscription — you’ll
          still be charged for it.
        </p>
        <p className={faqDetailStyles['full-color']}>
          ❗Please make sure to cancel your subscription in due time, prior to being charged.
        </p>
        <p>
          Our team does not have the possibility to make refunds. We cannot process any in-app subscription refund
          invoices as this process is totally controlled by Apple, so if you have a subscription and want to get a
          refund, please contact the App Store or Google Play (it depends on the platform you use).
        </p>
        <p>
          Please follow the official Apple’s refund instruction if you have iOS subscription
          <br />
          <a
            href="https://support.apple.com/en-us/HT204084"
            target="_blank"
            rel="noreferrer"
            className={faqDetailStyles['link']}
          >
            https://support.apple.com/en-us/HT204084
          </a>
        </p>
        <p>
          Please follow the official Google Play’s refund instruction if you have Android subscription <br />
          <a
            href="https://support.google.com/googleplay/workflow/9813244?hl=en"
            target="_blank"
            rel="noreferrer"
            className={faqDetailStyles['link']}
          >
            https://support.google.com/googleplay/workflow/9813244?hl=en
          </a>
        </p>
      </section>
    </main>
  );
};

export default RequestingRefund;
