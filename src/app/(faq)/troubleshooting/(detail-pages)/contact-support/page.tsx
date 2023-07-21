import React from 'react';
import AlbumImage from '@/app/(faq)/_components/AlbumImage';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import SectionBreadcrumbs from '@/app/(faq)/troubleshooting/(detail-pages)/SectionBreadcrumbs';

const ContactSupport = () => {
  return (
    <main>
      <h1>How to contact support?</h1>
      <SectionBreadcrumbs />
      <section>
        <AlbumImage />
        <p>We are here to help with any assistance you may need!</p>
        <p>
          We greatly value user feedback and actively listen to your suggestions. We are more than happy to provide
          support through email.
        </p>
        <p className={faqDetailStyles['full-color']}>
          📩 Feel free to reach out to us by emailing{' '}
          <a className={faqDetailStyles['link--unbreakable']} href="mailto:humdesignhd@gmail.com">
            humdesignhd@gmail.com
          </a>
          .
        </p>
        <p>
          Please note that our current support system does not include phone assistance, because we believe that
          providing effective assistance over the phone can be challenging.
        </p>
      </section>
      <section>
        <h2>Have an idea you'd like to share?</h2>
        <p>
          We are passionately dedicated to our product and serving our millions of users worldwide. Each day, our team
          of editors, content managers, developers, and designers put forth unwavering effort to ensure the delivery of
          an exceptional user experience.
        </p>
        <p>
          If you have an idea or feature request, we encourage you to email us at{' '}
          <a className={faqDetailStyles['link--unbreakable']} href="mailto:humdesignhd@gmail.com">
            humdesignhd@gmail.com
          </a>{' '}
          and be a part of shaping the future of our product.
        </p>
        <p>
          <strong>We strongly believe in the power of collaboration and value your input greatly!</strong>
        </p>
      </section>
    </main>
  );
};

export default ContactSupport;
