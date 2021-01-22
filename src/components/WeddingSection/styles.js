import { css } from '@emotion/core';
import Background from './assets/bg.jpg';

export const styWrapper = css`
  padding: var(--size-content-padding);
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  color: var(--font-black-ui);

  .bismillah {
    font-size: 16px !important;
  }

  .text__sub {
    font-size: 16px;
    color: var(--font-black-ui);

    @media screen and (max-width: 400px) {
      font-size: 15px !important;
    }
  }

  .text__live {
    text-align: center;
    margin-top: 24px;
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
`;

export const styEventBox = css`
  border: 2px solid var(--font-primary);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 16px;
  width: 100%;
  display: block;
  margin-bottom: 16px;

  h3 {
    padding-bottom: 16px;
    text-transform: uppercase;
    font-size: 2rem;
    border-bottom: 1px solid var(--font-primary);
  }

  .box__col {
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }

  .box__col-bottom {
    display: flex;

    i {
      margin-top: 4px;
      font-size: 16px;
    }

    span {
      margin-left: 6px;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s ease infinite;
  margin-top: -8px;
  border: none;

  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500px;
    border-radius: 24px;
    background: #f14e95;
    padding: 8px 16px;
  }

  i {
    margin-right: 4px;
  }

  img {
    max-width: 28px;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;
