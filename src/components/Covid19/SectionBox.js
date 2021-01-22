import React from 'react';
import { string } from 'prop-types';

import { styBoxWrapper } from './styles';

function SectionBox({ icon, text }) {
  return (
    <div className="col-md-4" css={styBoxWrapper}>
      {icon && (
        <div className="img-section">
          <img src={icon} alt="icon" className="img" />
        </div>
      )}
      <div className="text__section">
        <span className="text__info ">{text}</span>
      </div>
    </div>
  );
}

SectionBox.propTypes = {
  icon: string,
  text: string.isRequired,
};

SectionBox.defaultProps = {
  icon: '',
};

export default React.memo(SectionBox);
