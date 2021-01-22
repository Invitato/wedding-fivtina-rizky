import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import { GIRL_NAME, GIRL_PARENT_NAME, BOY_NAME, BOY_PARENT_NAME } from '@/constants';

import WithAnimation from '../WithAnimation';
import ImgBrideAndGroom from './img/img-rizky.png';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div css={styWrapper(false)} className="bg__secondary">
        <div className="container" style={{ paddingTop: '2em' }}>
          <WithAnimation>
            <img className="img__center" src={ImgBrideAndGroom} alt="" style={{ maxWidth: '300px' }} />
          </WithAnimation>
          <div className="row">
            <WithAnimation delay={300}>
              <div className="col-md-8 col-md-offset-2 text-center">
                <h3 className="main-font text__bride">{GIRL_NAME}</h3>
                <p className="parent" dangerouslySetInnerHTML={{ __html: GIRL_PARENT_NAME }} />
              </div>
            </WithAnimation>
          </div>
          <div>
            <WithAnimation delay={400}>
              <h3 className="title color__primary main-font text__title text-center">{`&`}</h3>
            </WithAnimation>
          </div>
          <div className="row">
            <WithAnimation delay={500}>
              <div className="col-md-8 col-md-offset-2 text-center">
                <h3 className="main-font text__groom">{BOY_NAME}</h3>
                <p className="parent" dangerouslySetInnerHTML={{ __html: BOY_PARENT_NAME }} />
              </div>
            </WithAnimation>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
