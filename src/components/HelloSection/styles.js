import { css } from '@emotion/core';
import Background from './img/bg-cream.png';

export const styWrapper = (withBackground) => css`
  width: 100%;
  padding: var(--size-content-padding);
  background-color: #fefdfd;

  ${withBackground &&
  `
    background-image: url(${Background});
    background-size: cover;
    background-position: bottom;
  `}

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    color: var(--font-black-ui);
  }

  .parent {
    margin: -16px 16px 16px 16px;
    color: var(--font-black-ui);
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .text__bride,
  .text__groom {
    font-size: 3rem;
  }

  .img__symbol {
    display: block;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  .img__bride,
  .img__grom {
    border-radius: 50%;
    max-width: 140px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
