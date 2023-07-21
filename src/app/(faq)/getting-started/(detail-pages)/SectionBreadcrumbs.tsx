import React from 'react';
import Breadcrumbs from "@/app/(faq)/_components/Breadcrumbs";

export const sectionBreadcrumbs = [
  {
    href: '/',
    tittle: 'FAQ',
  },
  {
    href: '/getting-started',
    tittle: 'Getting started ',
  },
];

export default function SectionBreadcrumbs() {
  return <Breadcrumbs breadcrumbs={sectionBreadcrumbs} />;
}
