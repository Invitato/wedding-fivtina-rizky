import React from 'react';
import ArrowImage from '@assets/img/arrow-line.png';

function ArrowIcon({ ...restProps }) {
  return <img src={ArrowImage} alt="" {...restProps} />;
}

export default ArrowIcon;
