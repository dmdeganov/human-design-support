import React from 'react';
import faqDetailStyles from '@/app/faq-detail-layout.module.scss';

interface Props {
  children: React.ReactNode;
  NavigationAside: React.FC
}

const Layout = ({children, NavigationAside}: Props) => {
  return (
    <div className={faqDetailStyles['faq-detail']}>
      {children}
      <NavigationAside />
    </div>
  );
};

export default Layout;
