import styled from 'styled-components'

export const SiteShell = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-right: clamp(0.75rem, 4vw, ${({ theme }) => theme.layout.pagePadding});
  padding-left: clamp(0.75rem, 4vw, ${({ theme }) => theme.layout.pagePadding});
`
