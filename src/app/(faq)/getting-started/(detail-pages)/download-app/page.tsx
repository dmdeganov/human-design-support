import React from 'react';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import SectionBreadcrumbs from '@/app/(faq)/getting-started/(detail-pages)/SectionBreadcrumbs';
import IphoneScreenshot from '@/app/(faq)/_components/IphoneScreenshot';
import AppStoreScreen from '@/assets/img/app-store-screen.png';
import AndroidScreenshot from '@/app/(faq)/_components/AndroidScreenshot';
import PlayMarketScreen from '@/assets/img/play-market-screen.png';

export default function DownloadApp() {
  return (
    <main>
      <h1>How to download the HD - Human Design App on iOS or Android?</h1>
      <SectionBreadcrumbs/>
      <section className={faqDetailStyles['underline']}>
        <h2>
            To download HD - Human Design App on iOS - please follow this link
        </h2>
        <a
          className={faqDetailStyles['link']}
          href="https://apps.apple.com/us/app/hd-human-design-app/id1582464555"
          target="_blank"
          rel="noreferrer"
        >
            https://apps.apple.com/us/app/hd-human-design-app/id1582464555
        </a>
        <ul>
          <li>
              On the app's page, you will find detailed information about the app, including screenshots, ratings, and
              reviews.
          </li>
          <li>
              To proceed with the download, tap on the <strong>Get</strong> or <strong>Download</strong> button.
          </li>
        </ul>
        <IphoneScreenshot screenshotSrc={AppStoreScreen} />
        <ul>
          <li>
              If prompted, authenticate the download using your Apple ID or Touch ID/Face ID.
          </li>
          <li>
              The app will start downloading, and its progress will be indicated a loading circle.
          </li>
          <li>
              Once the installation is complete, you can tap on the <strong>Open</strong> button to launch the app.
          </li></ul>
        <p>Once the download is complete, the app will automatically install on your device.</p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <h2>
            To download HD - Human Design App on Android
          <br />- please follow this link
        </h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.myhumandesignhd"
          className={faqDetailStyles['link']}
          target="_blank"
          rel="noreferrer"
        >
            https://play.google.com/store/apps/details?id=com.myhumandesignhd
        </a>
        <ul>
          <li>
              On the app's page, you will find detailed information about the app, including screenshots, ratings, and
              reviews.
          </li>
          <li>
              Tap on the <strong>Install</strong> button.
          </li>
        </ul>
        <AndroidScreenshot screenshotSrc={PlayMarketScreen} />
        <ul>
          <li>
              Read the required permissions and additional information that the app may need, and if you agree, tap{' '}
            <strong>Accept</strong>.
          </li>
          <li>
              The app will start downloading and installing automatically. The progress will be indicated by a progress
              bar.
          </li>
          <li>
              Once the installation is complete, you can tap on the <strong>Open</strong> button to launch the app.
          </li>
        </ul>
        <p>
            Now you're ready to enjoy the features and benefits of the HD - Human Design App on your iOS or Android
            device.
        </p>
      </section>
    </main>
  );
}
