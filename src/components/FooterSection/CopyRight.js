import React from 'react';

import { SOUND_URL, THE_BRIDE, SOUND_BY, URL_WA_INVITATO, URL_IG_INVITATO, URL_INVITATO } from '@/constants';

const REFERER = {
  target: '_blank',
  rel: 'noreferrer',
};

function CopyRight() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p style={{ fontSize: '12px' }}>
              &copy; 2020 {THE_BRIDE}. All Rights Reserved. <br />
              Song by{' '}
              <a href={SOUND_URL} {...REFERER} className="pr-co" dangerouslySetInnerHTML={{ __html: SOUND_BY }} />
              <br />
              Icon by{' '}
              <a href="https://flaticon.com" {...REFERER}>
                Flat Icon
              </a>
              <br />
              <br /> <br />
              Create with Love by{' '}
              <a href={URL_INVITATO} {...REFERER} className="pr-co">
                Invitato.net
              </a>
              <br />
              <a href={URL_IG_INVITATO} {...REFERER}>
                Instagram
              </a>
              <a href={URL_WA_INVITATO} {...REFERER} style={{ marginLeft: '8px' }}>
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CopyRight;
