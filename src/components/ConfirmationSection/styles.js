import { css } from '@emotion/core';
import Background from './assets/wave.svg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: bottom;

  p {
    color: rgba(255, 255, 255, 0.8) !important;
  }

  .my_form {
    label {
      text-align: left !important;
    }

    border: 1px solid var(--secondary-bg);
    padding: 16px;
    border-radius: 8px;
    margin-top: 16px;
    background: #fff;

    .buttonForm {
      background-color: var(--secondary-bg);
      color: #fff;
    }
  }

  .form-group {
    text-align: left;

    .labelForm {
      margin-bottom: 4px;
      color: black !important;
    }
  }

`;

export const styFlex = css`
  display: flex;
  justify-content: center;
`;
