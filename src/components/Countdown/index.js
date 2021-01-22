import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';

import { THE_BRIDE, YOUTUBE_LINK } from '@/constants';
import CountItem from './CountItem';

import { styMargin, styWrapper } from './styles';
import { txtDay, txtHour, txtMinutes, txtSeconds } from './locales';
import { string } from 'prop-types';

function CountContainer({ lang }) {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  /**
   * render alternative link
   * if user can't play directly via Youtube Embed link
   */
  // if (timeHasRunOut && !isEventOver) {
  //   return (
  //     <div style={{ marginBottom: '16px' }}>
  //       Klik link berikut jika anda tidak bisa putar video: <br />
  //       <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
  //         {`Youtube Live Akad  ${THE_BRIDE}`}
  //       </a>
  //     </div>
  //   );
  // }

  if (timeHasRunOut) return null;

  return (
    <div className="col-md-12 wrapper__counter" css={(styMargin('0 0 16px 0'), styWrapper)}>
      <CountItem text={txtDay[lang]} number={days} />
      <CountItem text={txtHour[lang]} number={hours} />
      <CountItem text={txtMinutes[lang]} number={minutes} />
      <CountItem text={txtSeconds[lang]} number={seconds} />
    </div>
  );
}

CountContainer.propTypes = {
  lang: string,
};

CountContainer.defaultProps = {
  lang: 'id',
};

export default React.memo(CountContainer);
