import styled from 'styled-components'

export const SiteShell = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.layout.pagePadding};
  padding-right: ${({ theme }) => theme.layout.pagePadding};
`
