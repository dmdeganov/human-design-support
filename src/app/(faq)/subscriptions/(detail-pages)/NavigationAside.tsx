import React from 'react';
import Link from 'next/link';
import {createFullPath} from "@/utils/createFullPath";

const currentPath = '/subscriptions';
const path = createFullPath.bind(currentPath);

const NavigationAside = () => {
  return (
    <aside>
      <nav>
        <h2>Articles in this section</h2>
        <ul>
          <li>
            <Link href={path('premium')}>What is a HD - Human Design Premium subscription?</Link>
          </li>
          <li>
            <Link href={path("get-premium")}>How to get HD - Human Design Premium?</Link>
          </li>
          <li>
            <Link href={path("switching")}>How to switch to a different subscription plan?</Link>
          </li>
          <li>
            <Link href={path("automatic-charging")}>Why was I automatically charged?</Link>
          </li>
          <li>
            <Link href={path("canceling")}>How do I cancel my subscription or trial?</Link>
          </li>
          <li>
            <Link href={path("restoring")}>How do I restore my subscription?</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationAside;
