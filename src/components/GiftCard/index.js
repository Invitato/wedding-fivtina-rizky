import React from 'react';

import WithAnimation from '../WithAnimation';
import OVO from './assets/ovo.jpeg';
import LinkAja from './assets/link-aja.jpeg';

import { styWrapper } from './styles';

function GiftCard() {
  return (
    <div css={styWrapper}>
      <div className="row">
        <WithAnimation>
          <div className="text-wish text-center">
            <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem' }}>
              Tanda Kasih
            </h2>
            <p>
              Bagi Bpk/Ibu/Sdr/i yang ingin memberikan tanda kasih kepada mempelai dan keluarga <br /> dapat melakukan
              QR Code uang elektronik berikut:
            </p>
          </div>
        </WithAnimation>
        <WithAnimation delay={100}>
          <div className="img">
            <img src={OVO} className="img__ovo" />
            <img src={LinkAja} className="img__linkaja" />
          </div>
        </WithAnimation>
      </div>
    </div>
  );
}

export default GiftCard;
