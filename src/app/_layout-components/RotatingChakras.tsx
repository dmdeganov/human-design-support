import React from 'react';
import {GatesCircleSVG, ZodiacCircleSVG} from '@/assets/svg';
import {layoutStyles} from '@/app/_layout-components/styles';

const RotatingChakras = () => {
  return (
    <div className={layoutStyles['rotating-chakras']}>
      <GatesCircleSVG className={layoutStyles['rotating-chakras__outer-chakra']} />
      <ZodiacCircleSVG className={layoutStyles['rotating-chakras__inner-chakra']} />
    </div>
  );
};

export default RotatingChakras;
