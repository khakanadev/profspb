import styled from 'styled-components'

export const SiteShell = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-right: max(
    env(safe-area-inset-right, 0px),
    clamp(0.625rem, 3.5vw, ${({ theme }) => theme.layout.pagePadding})
  );
  padding-left: max(
    env(safe-area-inset-left, 0px),
    clamp(0.625rem, 3.5vw, ${({ theme }) => theme.layout.pagePadding})
  );
  min-width: 0;
`
