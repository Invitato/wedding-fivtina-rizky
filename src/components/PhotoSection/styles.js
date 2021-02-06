import { css } from '@emotion/core';
import wave from './assets/wave.svg';

export const styBg = css`
  @media screen and (min-width: 700px) {
    background-size: cover;
    background-image: url(${wave});
    background-position: center;
  }
`;
