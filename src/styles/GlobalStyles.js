import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #282C33;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    padding-top: 80px;
  }
`;
