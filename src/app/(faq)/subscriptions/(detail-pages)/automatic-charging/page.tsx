import React from 'react';
import SectionBreadcrumbs from '@/app/(faq)/subscriptions/(detail-pages)/SectionBreadcrumbs';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import Link from 'next/link';

const AutomaticCharging = () => {
  return (
    <main>
      <h1>Why was I automatically charged?</h1>
      <SectionBreadcrumbs />
      <section className="pb-0">
        <p>Oh no, we're so sorry that you got charged when you shouldn't have.</p>
        <p>
          If you're reading this message, you may have noticed an unexpected charge for a Premium subscription. But no
          need to worry! Allow us to quickly explain how our subscription system works and why you were charged.{' '}
          <span className={faqDetailStyles['emoji']}>🤗</span>
        </p>
      </section>
      <section>
        <h2>How our subscription works</h2>
        <p>
          If you have been charged, it means that you previously visited our website or one of the app stores and
          purchased a trial period or a subscription for our HD - Human Design App Premium plan. As you didn't cancel
          your subscription renewal, you were automatically charged for continued access to our Premium features.
        </p>
        <p>
          <strong>
            ❗We always recommend canceling your trial before the last day of your trial period to avoid a charge.
          </strong>
        </p>
        <p>
          Our subscriptions renew automatically, unless canceled, to ensure a seamless experience during your Human
          Design journey.
        </p>
        <ul>
          <li>Trial ends after 3 days, and further renewals happen weekly.</li>
          <li>
            If you started without trial, the subscription renewals happen quarterly or yearly on your subscription
            date.
          </li>
        </ul>
        <p>We hope this clarifies why you were charged and sheds light on our subscription mechanism.</p>
        <p>
          Should you have any further questions or concerns, please don't hesitate to reach out at{' '}
          <a href="mailto:humdesignhd@gmail.com" className={faqDetailStyles['link--unbreakable']}>
            humdesignhd@gmail.com
          </a>
          . We're here to assist you on your path to self-discovery and fulfillment!
        </p>
      </section>
      <section>
        <h2><span style={{color: 'black'}}>🚫</span> Got it! So, how can I cancel my subscription?</h2>
        <p>
          You can cancel your HD - Human Design subscription or trial in the app, as well as via Apple’s App Store or
          Google Play, depending on where you purchased your subscription.
        </p>
        <p>
          <strong>
            For a detailed guide, please check out{' '}
            <Link href="canceling" className={faqDetailStyles['link']}>
              this article
            </Link>
          </strong>
        </p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <h2>💸 I've canceled my subscription, so will I receive a refund?</h2>
        <p>
          Please check out this article explaining our refund policy.
          <br />
          <Link href="/troubleshooting/request-refund" className={faqDetailStyles['link']}>
            How to request a refund?
          </Link>
        </p>
        <p>
          <strong>❗IMPORTANT</strong>
          <br/>
          Uninstalling the app doesn’t automatically cancel your subscription — you’ll still get charged. Please check
          your subscription status and cancel it either in the app or via our subscription portal if you don't wish to
          get charged again.
          <br />
          <Link href="/" className={faqDetailStyles['link']}>
            Check the instructions
          </Link>
        </p>
        <p>If you experience any issues with cancellation or want to share your feedback with our team, please email us at <a href="mailto:humdesignhd@gmail.com" className={faqDetailStyles['link--unbreakable']}>
          <a href="mailto:humdesignhd@gmail.com" className={faqDetailStyles['link--unbreakable']}>
            humdesignhd@gmail.com
          </a>
        </a>.</p>
      </section>
    </main>
  );
};

export default AutomaticCharging;
