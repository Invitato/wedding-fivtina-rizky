import React from 'react';
import { string } from 'prop-types';

import { styEventBox } from './styles';

function WeddingInfoBox({ title, date, time, description }) {
  return (
    <div css={styEventBox}>
      <h3 className="text-center">{title}</h3>
      <div className="box__col">
        <i className="icon-clock"></i>
        <span className="col__text">{time}</span>
      </div>
      <div className="box__col">
        <i className="icon-calendar"></i>
        <span>{date}</span>
      </div>
      {description && (
        <div className="box__col-bottom">
          <i className="icon-location-pin"></i>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);
