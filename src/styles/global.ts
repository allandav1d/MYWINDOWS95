import { createGlobalStyle } from "styled-components";

import MS_Sans_Serif from "~/assets/font/MS_Sans_Serif.ttf";
import MS_Sans_Serif_bold from "~/assets/font/MS_Sans_Serif_bold.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: MS_Sans_Serif;
  src: url(${MS_Sans_Serif}),url(${MS_Sans_Serif_bold});
  font-weight: 300;
        font-style: normal;
}

  * {
    font-family: MS_Sans_Serif;
    font-size: 14px;
  }

  html{
    height: 100%;
  }

  body {
    margin: 0 auto;
    height: 100%;
    background-color: black;
    overflow: hidden;
  }

  #root{
    height: 100%;
        display: flex;
    justify-content: center;
  }
 
`;
