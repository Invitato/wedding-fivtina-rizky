import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK, GOOGLE_MAPS_EMBED, GOOGLE_MAPS_ADDRESS } from '@/constants';

import WithAnimation from '../WithAnimation';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div className="bg__secondary padding__content" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <WithAnimation>
                <p className="sub-title">
                  <strong className="main-font text__title">Lokasi Acara</strong>
                  <br />
                </p>
                <p style={{ fontSize: '14px' }}>{GOOGLE_MAPS_ADDRESS}</p>
              </WithAnimation>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WithAnimation delay={100}>
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: '0' }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps - Dinda & Indra Wedding Party"
                ></iframe>
              </WithAnimation>
            </div>
          </div>
          <div className="row text-center">
            <WithAnimation delay={200}>
              <button className="btn btn-primary" style={{ marginTop: '16px' }}>
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer">
                  Google Maps
                </a>
              </button>
            </WithAnimation>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
