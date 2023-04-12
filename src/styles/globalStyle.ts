import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }

    html,
    body {
      background-color: ${theme.palette.primary.light};
      font-size: 14px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;
      scroll-behavior: smooth;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    a {
      color: currentColor;
      text-decoration: none;
      border-bottom: 2px solid currentColor;

      &:visited {
        color: ${theme.palette.secondary.main};
      }
    }

    ul,
    ol {
      list-style-type: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
  `
);
