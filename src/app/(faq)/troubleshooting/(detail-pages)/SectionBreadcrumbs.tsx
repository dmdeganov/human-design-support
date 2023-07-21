import React from 'react';
import Breadcrumbs from "@/app/(faq)/_components/Breadcrumbs";

const breadcrumbs = [
  {
    href: '/',
    tittle: 'FAQ',
  },
  {
    href: '/troubleshooting',
    tittle: 'Troubleshooting',
  },
];

export default function SectionBreadcrumbs() {
  return <Breadcrumbs breadcrumbs={breadcrumbs} />;
}
