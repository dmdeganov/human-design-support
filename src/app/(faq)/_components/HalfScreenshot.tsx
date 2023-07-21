import React from 'react';
import styles from '@/app/(faq)/_components/screenshot-group.module.scss';
import Image, {StaticImageData} from 'next/image';

const HalfScreenshot = ({imageSrc}: {imageSrc: StaticImageData}) => {
  return (
    <div className={styles['image-wrapper']}>
      <Image src={imageSrc} alt="image" fill sizes="336px" />
    </div>
  );
};

export default HalfScreenshot;
