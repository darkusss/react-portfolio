import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{
  theme: { [key: string]: string };
}>`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.colorLink};
  }

  h1 {
    font-size: 3rem;
  }
`;
