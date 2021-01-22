import { css } from '@emotion/core';

export const fadeInUp = (showed) => css`
  opacity: ${showed ? 1 : 0};
  transform: translateY(${showed ? 0 : 30}%);
  transition: all 0.25s ease-out;
`;

export const fadeInDown = (showed) => css`
  opacity: ${showed ? 1 : 0};
  transform: translateY(${showed ? 0 : -30}%);
  transition: all 0.25s ease-out;
`;

export const fadeInRight = (showed) => css`
  opacity: ${showed ? 1 : 0};
  transform: translateX(${showed ? 0 : -30}%);
  transition: all 0.25s ease-out;
`;

export const fadeInLeft = (showed) => css`
  opacity: ${showed ? 1 : 0};
  transform: translateX(${showed ? 0 : 30}%);
  transition: all 0.25s ease-out;
`;

export default { fadeInUp, fadeInDown, fadeInLeft, fadeInRight };
