import { css } from '@emotion/core';
import Background from '../ConfirmationSection/assets/wave.svg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: bottom;
  min-height: 50vh;

  .text-wish {
    font-size: 16px;
  }

  .img {
    text-align: center;
    margin-bottom: 2em;

    .img__ovo,
    .img__linkaja {
      display: inline-block;
      margin: 0 10px;
      border-radius: 16px;
      max-width: 200px;
      border: 2px solid var(--secondary-bg);

      @media screen and (max-width: 500px) {
        display: block;
        margin: 16px;
        margin: 16px auto;
      }
    }
  }
`;
