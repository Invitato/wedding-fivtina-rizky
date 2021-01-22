import React from 'react';
import { bool } from 'prop-types';

import WithAnimation from '../WithAnimation';
import CopyRight from './CopyRight';
import EmbedLive from './EmbedLive';
import { styWrapper } from './styles';


function FooterSection({ isInvitation }) {
  return (
    <>
      <EmbedLive />
      <div css={styWrapper}>
        <div className="secondary-bg" style={{ padding: '0 16px' }}>
          <div className="row padding__content">
            <div className="col-md-8 col-md-offset-2 text-center">
              <WithAnimation>
                <p>
                  Sehubungan dengan kondisi saat ini mengenai pembatasan jumlah tamu undangan, <br />
                  tanpa mengurangi rasa hormat, kami mohon segala doa dan restu dari bapak/ ibu/saudara/i, <br />
                  dan kami berharap tetap dapat menjalin tali silaturahmi melalui media online.
                </p>
              </WithAnimation>
              <WithAnimation delay={100}>
                <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem' }}>
                  Terima Kasih
                </h2>
              </WithAnimation>
            </div>
          </div>
        </div>
        <hr className="border" />
        <WithAnimation>
          <CopyRight />
        </WithAnimation>
      </div>
    </>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
