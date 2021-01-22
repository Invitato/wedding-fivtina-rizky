import React, { useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { animateScroll } from 'react-scroll';

import { THE_BRIDE } from '@/constants';

import Countdown from '../Countdown';
import WithAnimation from '../WithAnimation/UseIntersect';
import ScrollToDown from './ScrollToDown';

import WeddingImg from './assets/logo-wedding-cincin.png';
import { styWrapper, styHero, styBackground } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('id-hello-section').offsetTop;
    animateScroll.scrollTo(element);
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  return (
    <div css={styHero}>
      <header className="fh5co-cover" css={styBackground}>
        <div className="overlay" />
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <WithAnimation>
                <img src={WeddingImg} alt="wedding-dinda-indra" />
                <h2 className="text__date">The wedding of</h2>
                <h1>{THE_BRIDE}</h1>
                <Countdown />
              </WithAnimation>
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
