import React from 'react';
import Link from 'next/link';
import {createFullPath} from "@/utils/createFullPath";

const currentPath = '/getting-started';
const path = createFullPath.bind(currentPath);

const NavigationAside = () => {
  return (
    <aside>
      <nav>
        <h2>Articles in this section</h2>
        <ul>
          <li>
            <Link href={path('human-design')}>What is Human Design?</Link>
          </li>
          <li>
            <Link href={path("download-app")}>How to download the App?</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationAside;
