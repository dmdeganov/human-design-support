import React from 'react'
import DetailPageLayout from '@/app/(faq)/_components/DetailPageLayout';
import NavigationAside from './NavigationAside';

export default function Layout({children}: {children: React.ReactNode}) {
  return <DetailPageLayout NavigationAside={NavigationAside}>{children}</DetailPageLayout>;
}
