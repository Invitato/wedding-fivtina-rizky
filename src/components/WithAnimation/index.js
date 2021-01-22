import React from 'react';
import { node, oneOf, number } from 'prop-types';
import { animations } from 'react-animation';
import LazyLoad from 'react-lazyload';

const ANIMATION = animations || {};

const WithAnimation = ({ type, children, delay, ...rest }) => {
  return (
    <LazyLoad height={delay}>
      <div style={{ animation: ANIMATION.fadeInUp }}>{children}</div>
    </LazyLoad>
  );
};

WithAnimation.propTypes = {
  children: node.isRequired,
  delay: number,
  type: oneOf(['fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight']),
};

WithAnimation.defaultProps = {
  delay: 0,
  type: 'fadeInUp',
};

export default WithAnimation;
