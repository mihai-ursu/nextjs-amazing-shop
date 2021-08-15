import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --font-family-sans: -apple-system, BlinkMacSystemFont, sans-serif;
    --color-black: #000000;
    --color-gray-900: #1f1f1f;
    --color-gray-600: #616367;
    --color-gray-500: #a3a3a3;
    --color-gray-400: #B1B1B1;
    --color-gray-300: #c4c4c4;
    --color-gray-200: #CECECE;
    --color-gray-150: #F0F0F0;
    --color-gray-100: #F8F8F8;
    --color-white: #ffffff;
    --color-gray-900-transparent: rgba(34, 34, 34, 0.8);
    --color-black-rgb: rgba(0, 0, 0, 0.99);
    --color-black-rgb-light: rgba(0, 0, 0, 0.2);

    --color-alert-300: #d14848;

    --column-width: 5.6rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--color-black) var(--color-gray-100);
  }
  body::-webkit-scrollbar-track {
    background: var(--color-gray-100);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--color-black);
    border-radius: 6px;
    border: 3px solid var(--color-gray-100);
  }

  hr {
    border: 0;
    height: 8px;
  }

  ::-moz-selection {
    /* Code for Firefox */
    color: var(--color-white);
    background-color: var(--color-black-rgb);
  }

  ::selection {
    color: var(--color-white);
    background-color: var(--color-black-rgb);
  }

  .space {
    grid-column: 2/span 12;
    height: 80em;
  }

  .btn{
    display: inline-block;
    background: none;
    border: none;
    font-family: "Inter", Arial, sans-serif;
    font-size: var(--font-base-size);
    color: var(--color-accent-100);
    border: 1px solid var(--color-accent-100);
    border-radius: 0.2em;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    padding: 0.6em 1em;
    margin-top: 2em;
    svg {
        margin-bottom: -0.16em;
      }
  }

  .btn-primary{
    background: transparent;
    transition:0.5s;
    &:hover{
      background: var(--color-black);
      color: var(--color-white);
    }
  }

`;

export default GlobalStyles;
