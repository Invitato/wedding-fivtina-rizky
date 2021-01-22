import React from 'react';
import { number, string } from 'prop-types';
import { styWrapperCount } from './styles';

function CountItem({ number, text }) {
  return (
    <div css={styWrapperCount}>
      <h3>{number}</h3>
      <span style={{ color: 'var(--font-primary)', fontWeight: 'bold' }}>{text}</span>
    </div>
  );
}

CountItem.propTypes = {
  number: number.isRequired,
  text: string.isRequired,
};

export default React.memo(CountItem);
