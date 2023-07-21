import React from 'react';
import Breadcrumbs from "@/app/(faq)/_components/Breadcrumbs";

const breadcrumbs = [
  {
    href: '/',
    tittle: 'FAQ',
  },
  {
    href: '/subscriptions',
    tittle: 'Subscriptions',
  },
];

export default function SectionBreadcrumbs() {
  return <Breadcrumbs breadcrumbs={breadcrumbs} />;
}
