import { css, keyframes } from '@emotion/core';
import Background from '../PhotoSection/assets/wave.svg';

const animation = keyframes`
  0% { right: -300px; opacity: 0;}
  50% { right: 50px; opacity: 0.5;}
  100% {right: 0px; opacity: 1;};
`;

const animationLeft = keyframes`
  0% { left: -300px; opacity: 0;}
  50% { left: 50px; opacity: 0.5;}
  100% {left: 0px; opacity: 1;};
`;

export const styWithAnimation = (isActive) => css`
  position: relative;
  animation: ${isActive ? animation : animationLeft} 1s;
`;

export const styWrapperItem = css`
  h4 {
    color: #828282;
    font-weight: bold;
    text-transform: uppercase;
    margin: -10px 0 1em 0;
  }

  padding: 0 16px;

  blockquote {
    margin-top: 16px !important;
  }

  .infoName {
    font-size: 12px;
    text-transform: capitalize;
    letter-spacing: 2px;
    display: block;
  }

  .hide {
    display: none;
  }

  .active {
    diplay: block;
  }

  .description {
    font-size: 16px !important;
    text-align: left;
    color: black;
  }

  .author {
    text-align: left;
    margin-top: -16px;
    color: black;
  }

  @media screen and (max-width: 400px) {
    .description {
      font-size: 14px !important;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .button-nav {
    font-size: 14px;
    padding: 5px 20px;
    background: var(--secondary-bg);
    color: var(--font-primary);
  }
`;

export const styWrapper = css`
  @media screen and (max-width: 500px) {
    background-image: url(${Background});
    background-size: cover;
    background-position: bottom;
    min-height: 10vh;
  }
`;

export const styForm = css`
  padding: 16px;
`;
