import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      font-family: 'Poppins', sans-serif;

      box-sizing: border-box;
    }

    html,
    body {
      font-family: sans-serif;

      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;
      scroll-behavior: smooth;

      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 2.5rem;
    }

    main {
      margin: 2rem;
    }

    a {
      color: inherit;

      text-decoration: none;
    }

    ul,
    ol {
      list-style-type: none;
    }
  `
);
