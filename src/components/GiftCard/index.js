import React from 'react';

import WishesSection from '@components/WishesSection';
import WithAnimation from '../WithAnimation';
import OVO from './assets/ovo.jpeg';
import LinkAja from './assets/link-aja.jpeg';

import { styWrapper } from './styles';

function GiftCard() {
  return (
    <>
      <div css={styWrapper}>
        <div className="row">
          <WithAnimation>
            <div className="text-wish text-center">
              <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem' }}>
                Amplop Digital
              </h2>
              <p>
                Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih kepada mempelai dan keluarga <br /> dapat
                melakukan QR Code uang elektronik berikut:
              </p>
            </div>
          </WithAnimation>
          <WithAnimation delay={100}>
            <div className="img">
              <img src={OVO} className="img__ovo" width="200px" height="auto" />
              <img src={LinkAja} className="img__linkaja" width="200px" height="auto" />
            </div>
            <p className="text-center" style={{ color: 'black' }}>
              Atas Nama Akun: <b>M Rizky Pratama</b>
            </p>
          </WithAnimation>
        </div>
      </div>
      <WishesSection />
    </>
  );
}

export default GiftCard;
