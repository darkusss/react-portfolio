import {createGlobalStyle} from "styled-components";
import {GlobalStyleProps} from "./types";


export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({theme}): string => theme.background};
    color: ${({theme}): string => theme.color};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({theme}): string => theme.colorLink};
  }

  h1 {
    font-size: 3em;
    margin-bottom: 0;
  }
  
  h2 {
      font-size: 2em;
      margin-top: 0;
  }
  
`;
