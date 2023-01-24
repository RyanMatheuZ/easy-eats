import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }

    html,
    body {
      background-color: ${theme.palette.common.white};
      font-size: 14px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;
      scroll-behavior: smooth;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 2.25rem;
    }

    a {
      color: currentColor;
      text-decoration: none;
      border-bottom: 2px solid currentColor;
    }

    ul,
    ol {
      list-style-type: none;
    }
  `
);
