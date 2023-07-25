'use client'
import React from 'react';
import {layoutStyles} from "@/app/_layout-components/styles";

const Footer = () => {
  return (
    <footer className={layoutStyles['footer']}>
      <div className={layoutStyles['footer__copyright']}>
        {`Copyright © ${new Date().getFullYear()} HD - Human Design`}
        <span> | All Rights Reserved</span>
      </div>
      <nav >
        <ul className={layoutStyles['footer__links']}>
          <li>
            <a href="#" onClick={e => e.preventDefault()}>Instagram</a>
          </li>
          <li>
            <a href="#" onClick={e => e.preventDefault()}>Terms of use</a>
          </li>
          <li>
            <a href="#" onClick={e => e.preventDefault()}>Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
