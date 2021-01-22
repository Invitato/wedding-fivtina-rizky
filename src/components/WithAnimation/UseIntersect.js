import React, { useState } from 'react';
import { node, oneOf, number } from 'prop-types';
import useIntersect from '@hooks/useIntersect';
import noop from '@helpers/noop';
import animationStyles from './styles';

/**
 * Simple div that wraps your element and animate it when the component is revealed on screen
 * to achieve it we are using useState useIntersect hooks
 */
const rootMargin = '0px 0px -30% 0px';

const WithAnimation = ({ type, children, delay, ...rest }) => {
  const [showed, setShowed] = useState(false);

  const animStyle = animationStyles[type] || noop;
  const targetRef = useIntersect(
    () => {
      setTimeout(setShowed(true), delay);
    },
    { rootMargin },
    true,
  );

  return (
    <>
      {!showed && <div ref={targetRef} />}
      <div css={animStyle(showed)} {...rest}>
        {children}
      </div>
    </>
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
