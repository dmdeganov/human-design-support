import React from 'react';
import Image, {StaticImageData} from 'next/image';
import styles from './screenshot-group.module.scss';
import HalfScreenshot from "@/app/(faq)/_components/HalfScreenshot";

interface Props {
  imageSrc1: StaticImageData;
  imageSrc2: StaticImageData;
}
const ScreenshotsGroup = ({imageSrc1, imageSrc2}: Props) => {
  return (
    <div className={styles['screenshots-group']}>
      <HalfScreenshot imageSrc={imageSrc1}/>
      <HalfScreenshot imageSrc={imageSrc2}/>
    </div>
  );
};

export default ScreenshotsGroup;
