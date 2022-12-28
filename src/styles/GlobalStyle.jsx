import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "NexonGothic";
    width: 390px;
    margin: 0 auto;
    position: relative;
  }

  button {
    border: none;
    padding: 0;
    background-color: inherit;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }
  
  input {
    font: inherit;
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  ol, ul {
    list-style: none;
  }

  /* 유틸리티 */
  .ir {
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    width: 1px;
    height: 1px;
    overflow: hidden;
    overflow: clip;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
