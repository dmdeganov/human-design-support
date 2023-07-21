import React from 'react';
import Link from 'next/link';
import {createFullPath} from '@/utils/createFullPath';

const currentPath = '/troubleshooting';
const path = createFullPath.bind(currentPath);

const NavigationAside = () => {
  return (
    <aside>
      <nav>
        <h2>Articles in this section</h2>
        <ul>
          <li>
            <Link href={path('change-profile-data')}>Can I change my entered data?</Link>
          </li>
          <li>
            <Link href={path('request-refund')}>How to request a refund?</Link>
          </li>
          <li>
            <Link href={path('contact-support')}>How to contact support?</Link>
          </li>
          <li>
            <Link href={path('charged-during-trial')}>I was charged during trial</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationAside;
