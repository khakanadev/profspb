import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
