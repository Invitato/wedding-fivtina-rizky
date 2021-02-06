import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import { GIRL_NAME, GIRL_PARENT_NAME, BOY_NAME, BOY_PARENT_NAME } from '@/constants';

import WithAnimation from '../WithAnimation';
import ImgBrideAndGroom from './img/img-rizky.png';
import { styWrapper } from './styles';
import Bride from './img/Fivtina.jpeg';
import Grom from './img/Rizky.jpeg';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div css={styWrapper(false)} className="bg__secondary">
        <div className="container" style={{ paddingTop: '2em' }}>
          <WithAnimation>
            <div className="text__salam">
              <h4>Assalaamu'alaikum Warahmatullaahi Wabarakaatuh</h4>
              <p className="center" style={{ marginBottom: '28px' }}>
                Dengan memohon Rahmat dan Ridho Allah Subḥānahu Wa Ta’ālā, <br /> Kami bermaksud menyelenggarakan
                pernikahan putra-putri kami:
              </p>
            </div>
          </WithAnimation>
          <div className="row">
            <WithAnimation delay={300}>
              <div className="col-md-8 col-md-offset-2 text-center">
                <img src={Bride} className="img__bride" />
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
                <img src={Grom} className="img__bride" />
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
