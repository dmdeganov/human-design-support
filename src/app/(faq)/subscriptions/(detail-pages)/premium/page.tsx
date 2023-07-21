import React from 'react';
import SectionBreadcrumbs from '@/app/(faq)/subscriptions/(detail-pages)/SectionBreadcrumbs';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import ScreenshotsGroup from '@/app/(faq)/_components/ScreenshotsGroup';
import aboutMePointer from '@/assets/img/about-me-pointer.png';
import centersPointer from '@/assets/img/centers-pointer.png';
import addPartnerPointer from '@/assets/img/add-partner-pointer.png';
import childrenPointer from '@/assets/img/children-pointer.png';
import partnersPointer from '@/assets/img/partner-pointer.png';
import compatibilityExpandPointer from '@/assets/img/compatibility-expand-pointer.png';

const Premium = () => {
  return (
    <main>
      <h1>What is a HD - Human Design App Premium subscription?</h1>
      <SectionBreadcrumbs />
      <section className="pb-0">
        <p>
          The Premium Subscription unlocks all the essential information required to start your Human Design experiment.
          It offers comprehensive descriptions, planetary transits, daily updated advice, personal insights,
          recommendations, and other features. It is a supportive and competent companion, empowering you to unlock your
          innate potential and embark on a journey of self-discovery.
        </p>
        <p>
          You will receive weekly forecasts with personalized recommendations on how to make your weekly plans more
          effective and successful. We will guide you through every step of the way: from building your personal
          Bodygraph to embarking on your own Human Design experiment.
        </p>
      </section>
      <section>
        <h2>With HD - Human Design Premium, you can:</h2>
        <ul>
          <li>Build your personal Rave Card (Bodygraph)</li>
          <li>Access detailed descriptions relevant to your profile</li>
          <li>Add new users and decode their cards without limitations</li>
          <li>Calculate compatibility with your partners and children</li>
          <li>Explore the influence of daily planet transits on your life</li>
          <li>Receive daily positive affirmations</li>
          <li>Get tailored daily advice based on your energy type</li>
          <li>Read personalized weekly forecasts</li>
        </ul>
      </section>
      <section className={faqDetailStyles['underline']}>
        <h2>How to explore Premium content:</h2>
        <ul>
          <li>Open the App and navigate to the tabs located at the bottom of the screen</li>
          <li>Choose the tab you wish to explore and tap on it</li>
          <li>
            Within the chosen tab, you will find different sections at the top. Select the relevant section you are
            interested in and access all the information it offers.
          </li>
        </ul>
        <ScreenshotsGroup imageSrc1={aboutMePointer} imageSrc2={centersPointer} />
        <p>
          The information is presented in expandable blocks. To view the content within each block, simply click on the
          downward arrow.
        </p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <p>
          To explore the “Compatibility” section, select this tab and then click on either the "Add partner" or "Add
          child" button, depending on the desired relationship. Fill in the required information such as name, date of
          birth, time of birth, and place of birth.
        </p>
        <ScreenshotsGroup imageSrc1={addPartnerPointer} imageSrc2={childrenPointer} />
        <p>
          Once you have added all the necessary information, you will see a block displaying the calculated
          compatibility and compatibility percentage. To explore more detailed information, click on the generated
          compatibility block and navigate through the top menu to access the specific compatibility details.
        </p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <ScreenshotsGroup imageSrc1={partnersPointer} imageSrc2={compatibilityExpandPointer} />
        <p><strong>We hope this helps to easily navigate our App!</strong></p>
      </section>
    </main>
  );
};

export default Premium;
