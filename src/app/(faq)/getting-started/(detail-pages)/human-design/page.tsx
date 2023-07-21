import React from 'react';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';
import BodyGraphImg from '@/assets/img/bodygraph-screen.png';
import SectionBreadcrumbs from '@/app/(faq)/getting-started/(detail-pages)/SectionBreadcrumbs';
import IphoneScreenshot from '@/app/(faq)/_components/IphoneScreenshot';
import AlbumImage from '@/app/(faq)/_components/AlbumImage';

const WhatIsHumanDesign = () => {
  return (
    <main>
      <h1>What is Human Design?</h1>
      <SectionBreadcrumbs/>
      <p>
          Hello there! We are HD - Human Design, a Human Design app that guides individuals on their journey towards
          their True Self, empowering them to live authentically.
      </p>
      <section className={faqDetailStyles['underline']}>
        <h2>So, what is Human Design exactly?<br/>Let us explain to you</h2>
        <p>
            Human Design is a powerful self-knowledge tool that delves into the science of humans and the world around
            us. It synthesizes various knowledge systems such as astrology, the ancient Indian chakra system, the
            Chinese book of changes I Ching, Kabbalah, as well as quantum physics and genetics. It is not an abstract
            system, philosophy, or religion, but rather a holistic teaching.
        </p>
        <p>
            Human Design serves as a practical guide based on accumulated knowledge and human experiences. It helps
            individuals navigate their path, understand their essence, and discover their purpose. The system provides
            specific tools for decision-making, interacting with others, and engaging with the world.
        </p>
        <IphoneScreenshot screenshotSrc={BodyGraphImg} />
        <p>
            Human Design does not aim to change or improve individuals; instead, it reveals one's true self. By
            exploring Human Design, you gain insight into your uniqueness and learn how to leverage your innate talents.
        </p>
      </section>
      <section className={faqDetailStyles['underline']}>
        <h2>Human Design empowers to awaken your true self</h2>
        <p>
            By following your personal Rave Card, you have the potential to transform your life. Ignoring it and
            suppressing your uniqueness will only perpetuate living in your False Self.
        </p>
        <p>
            Furthermore, Human Design reveals that people can be categorized into different genetic types, making it
            easier to find compatible partners and improve relationships. Each type embodies specific character traits,
            inclinations, and energy dynamics. Human Design offers valuable tools to facilitate finding an ideal partner
            and nurturing fulfilling connections.
        </p>
        <AlbumImage />
        <p>
            The process of decoding a Rave Card, exploring the planetary movements, and studying the various human types
            is both captivating and enriching. This knowledge is readily accessible to everyone today, offering the
            potential to positively transform lives.
        </p>
      </section>
    </main>
  );
};

export default WhatIsHumanDesign;
