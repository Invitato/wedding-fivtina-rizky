import { css } from '@emotion/core';
import Background from '@assets/img/pattern.png';

export const styWrapper = css`
  padding: var(--size-content-padding);
  background: var(--secondary-bg);
  background-image: url(${Background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-repeat-y: no-repeat;
  background-repeat-x: repeat;
  background-size: auto;

  @media screen and (max-width: 500px) {
    min-height: 100vh;
  }

  .title {
    font-size: 4em;
  }

  .sub-title {
    color: var(--font-black-ui);
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    font-family: var(--font-family-content);
  }

  .quran {
    margin: 32px 0;
    font-size: 1.3em;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .text__arabic {
    margin-top: 2em;
    font-size: 20px;
    line-height: 2;
    color: var(--font-primary);
  }

  .text__latin {
    color: var(--font-primary);
    font-size: 14px;
    margin-bottom: 12em;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;

export const styDivider = css`
  margin-top: 0;

  img {
    display: block;
    max-width: 200px;
    height: auto;
    margin: 0 auto;
  }
`;
