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
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Terms of use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
