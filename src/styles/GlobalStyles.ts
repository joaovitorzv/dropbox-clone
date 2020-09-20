import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: Roboto, sans-serif;
  }

  a {
    color: var(--color-blue);
    opacity: 0.8;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      opacity: 1;
    }
  }

  :root {
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-tertiary: #fff;
    --color-quaternary: #000;

    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  }
`;