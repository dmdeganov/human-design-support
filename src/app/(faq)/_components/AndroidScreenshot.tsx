import React from 'react';
import styles from './android-screenshot.module.scss';
import Image, {StaticImageData} from 'next/image';

interface Props {
  screenshotSrc: StaticImageData;
}

const AndroidScreenshot = ({screenshotSrc}: Props) => {
  return (
    <div className={styles['android-screenshot']}>
      <Image src={screenshotSrc} alt="android-border" fill sizes="336px" />
    </div>
  );
};

export default AndroidScreenshot;
