import React from 'react';
import styles from './iphone-screenshot.module.scss';
import Image, {StaticImageData} from 'next/image';
import IphoneShape from '@/assets/img/iphone-shape.png';

interface Props {
  screenshotSrc: StaticImageData;
  removeShape?: boolean;
}

const IphoneScreenshot = ({screenshotSrc, removeShape = false}: Props) => {
  return (
    <div className={styles['iphone-screenshot']}>
      <Image
        src={removeShape ? screenshotSrc : IphoneShape}
        alt={removeShape ? 'iphone-shape' : 'screenshot'}
        fill
        sizes="335px"
      />
      {!removeShape && (
        <div className={styles['screen-content']}>
          <Image src={screenshotSrc} alt="screenshot" fill sizes="332px" />
        </div>
      )}
    </div>
  );
};

export default IphoneScreenshot;
