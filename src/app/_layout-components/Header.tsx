import React from 'react';
import {HumanDesignIcon} from '@/assets/svg';
import ThemeSwitcher from './ThemeSwitcher';
import {layoutStyles} from '@/app/_layout-components/styles';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={layoutStyles['header']}>
      <div className={layoutStyles['header__back']}>
        <Link href="/" className={layoutStyles['header__logo center-content']}>
          <HumanDesignIcon width={35} height={35} fill="var(--on-surface)" />
        </Link>
      </div>
      <div className={layoutStyles['header__title']}>HD - Human Design</div>
      <div className={layoutStyles['header__theme-switcher']}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
