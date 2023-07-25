import React from 'react';
import SectionBreadcrumbs from '@/app/(faq)/troubleshooting/(detail-pages)/SectionBreadcrumbs';
import AlbumImage from '@/app/(faq)/_components/AlbumImage';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import Link from 'next/link';

const ChargedDuringTrial = () => {
  return (
    <main>
      <h1>I was charged during trial</h1>
      <SectionBreadcrumbs />
      <section>
        <p>Oh no, we apologize for any inconvenience caused by the unexpected charge!</p>
        <AlbumImage />
        <p>
          We recommend checking if your{' '}
          <Link href="/subscriptions/canceling" className={faqDetailStyles['link--unbreakable']}>
            trial was canceled
          </Link>
          , as free trials automatically set up an auto-renewing subscription that needs to be manually canceled if you
          don't wish to continue with the subscription after the trial period.
        </p>
        <p>
          Please note that all payment processes are managed by the respective platform, whether it's the App Store or
          Google Play. We do not directly handle the purchasing process.
        </p>
        <p>
          Unfortunately, problems happen sometimes. We sincerely apologize for the inconvenience. But don't worry, we
          are here to assist you in resolving this matter.
        </p>
        <p>
          To request a refund, we have outlined a few quick steps in our guide on{' '}
          <Link className={faqDetailStyles['link--unbreakable']} href="/troubleshooting/request-refund">
            How to Request a Refund
          </Link>
          .
        </p>
        <p className={faqDetailStyles['full-color']}>
          📩 Feel free to reach out to us by emailing{' '}
          <a className={faqDetailStyles['link--unbreakable']} href="mailto:humdesignhd@gmail.com">
            humdesignhd@gmail.com
          </a>
          .
        </p>
        <p className="mt-2">
          <strong>Thank you for your understanding, and we appreciate your patience.</strong>
        </p>
      </section>
    </main>
  );
};

export default ChargedDuringTrial;
