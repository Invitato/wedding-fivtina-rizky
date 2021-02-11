import React from 'react';

import WishesSection from '@components/WishesSection';
import WithAnimation from '../WithAnimation';
import WithAnimationIntersect from '../WithAnimation/UseIntersect';
import OVO from './assets/ovo.jpeg';
import LinkAja from './assets/link-aja.jpeg';

import { styWrapper } from './styles';

function GiftCard() {
  return (
    <>
      <div css={styWrapper}>
        <div className="row">
          <WithAnimationIntersect>
            <div className="text-wish text-center" style={{ padding: '0 16px', maxWidth: '900px', margin: '0 auto' }}>
              <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem' }}>
                Amplop Digital
              </h2>
              <p style={{ padding: '0 16px' }}>
                Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih kepada mempelai dan keluarga dapat melakukan
                scan QR Code uang elektronik berikut dan juga melalui rekening:
                <br />
                <strong>
                  Bank Mandiri : 1310013802535 <br />
                </strong>
                a.n. Fivtina Marbelanty <br />
                <strong>Bank BCA : 0095093693 </strong> <br />
                a.n. Fivtina Marbelanty <br /> <br />
                atau dapat berupa Wedding Gifts yang diinginkan kedua mempelai pada link ini
                <a
                  style={{ fontWeight: 'normal', textDecoration: 'underline' }}
                  href="https://www.wishsite.net/wishlist/bjnmhq7t"
                  target="blank"
                >
                  {` https://www.wishsite.net/wishlist/bjnmhq7t`}
                </a>
              </p>
            </div>
          </WithAnimationIntersect>
          <WithAnimation delay={100}>
            <div className="img">
              <img src={OVO} className="img__ovo" width="200px" height="auto" alt="" />
              <img src={LinkAja} className="img__linkaja" width="200px" height="auto" alt="" />
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
