import React from 'react';
import SectionBreadcrumbs from '@/app/(faq)/troubleshooting/(detail-pages)/SectionBreadcrumbs';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import screenshotsGroupStyles from '@/app/(faq)/_components/screenshot-group.module.scss';
import IphoneScreenshot from '@/app/(faq)/_components/IphoneScreenshot';
import personalInfoPointer from '@/assets/img/personal-info-pointer.png';
import personalInfoScreen from '@/assets/img/personal-info-screen.png';

const Page = () => {
  return (
    <main>
      <h1>Can I change the data that I entered?</h1>
      <SectionBreadcrumbs />
      <section>
        <p>Entered incorrect data? It's not a big problem! You can change it anytime within the App.</p>
        <p>
          The process of decoding a Rave Card, exploring the planetary movements, and studying the various human types
          is both captivating and enriching. This knowledge is readily accessible to everyone today, offering the
          potential to positively transform lives.
        </p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <h2>How to change your profile data:</h2>
        <ul>
          <li>
            Open the <strong>Design App</strong>.
          </li>
          <li>
            Tap <strong>Settings</strong>.
          </li>
          <li>
            Find <strong>Personal Information</strong>.
          </li>
        </ul>
        <div className={screenshotsGroupStyles['screenshots-group']}>
          <IphoneScreenshot screenshotSrc={personalInfoPointer} removeShape />
          <IphoneScreenshot screenshotSrc={personalInfoScreen} />
        </div>
        <p>
          Make changes you need and submit with <strong>Done</strong> button.
        </p>
      </section>
    </main>
  );
};

export default Page;
