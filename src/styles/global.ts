import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  }

  html{
    height: 100%;
  }

  body {
    margin: 0 auto;
    height: 100%;
    background-color: black;
  }

  #root{
    height: 100%;
        display: flex;
    justify-content: center;
  }
 
`;
