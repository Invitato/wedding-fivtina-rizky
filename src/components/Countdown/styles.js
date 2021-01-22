import { css } from '@emotion/core';

export const styWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: var(--secondary-bg);
  margin: 8px;
  border-radius: 50%;
  position: relative;
  color: var(--font-primary);
  animation: pulse 1s infinite alternate;
  
  span {
    font-weight: bold;
    text-transform: none;
    font-weight: normal;
  }

  h3 {
    font-size: 28px;
    color: var(--font-primary);
    font-weight: bold;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;
