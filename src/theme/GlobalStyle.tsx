import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.layout.scrollPaddingTop};
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.bg};
  }

  #root {
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 2px;
  }
`
