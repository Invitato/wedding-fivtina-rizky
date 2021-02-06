import { css } from '@emotion/core';
import Background from './assets/11.jpeg';

export const styWrapper = css`
  padding: var(--size-content-padding);
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100%;
  color: var(--font-black-ui);

  @media screen and (min-width: 700px) {
    min-height: 70vh;
  }

  .bismillah {
    font-size: 16px !important;
  }

  .text__title {
    color: #fff !important;
  }

  .text__sub {
    font-size: 16px;
    color: #fff !important;
    margin-top: -10px;

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
  background-color: rgba(255, 255, 255, 0.2);
  padding: 16px;
  width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 8px;
  color: #fff;

  h3 {
    padding-bottom: 16px;
    font-size: 2.5rem;
    border-bottom: 1px solid #fff;
    font-family: var(--font-family-title);
    color: #fff;
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
