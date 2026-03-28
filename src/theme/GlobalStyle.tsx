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

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
