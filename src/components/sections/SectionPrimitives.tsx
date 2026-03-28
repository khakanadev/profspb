import styled from 'styled-components'

export const ContentSection = styled.section`
  scroll-margin-top: ${({ theme }) => theme.layout.scrollPaddingTop};
  padding: ${({ theme }) => theme.space.xl} 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`

export const SectionIntro = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

export const SectionTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.space.sm};
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};

  &::after {
    display: block;
    width: 2.75rem;
    height: 3px;
    margin-top: ${({ theme }) => theme.space.sm};
    border-radius: 2px;
    background: ${({ theme }) => theme.color.accent};
    content: '';
  }
`

export const SectionLead = styled.p`
  margin: 0;
  max-width: 40rem;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
`

export const PointList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
  margin: 0;
  padding: 0;
  list-style: none;
`

export const PointCard = styled.li`
  margin: 0;
  padding: ${({ theme }) => theme.space.md};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 1px 3px ${({ theme }) => theme.color.accentShadow};
`

export const PointTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.space.xs};
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
`

export const PointText = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.textMuted};
`

export const EmphasisBlock = styled.div`
  padding: ${({ theme }) => theme.space.md};
  border-left: 4px solid ${({ theme }) => theme.color.accent};
  border-radius: 0 ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm} 0;
  background: ${({ theme }) => theme.color.accentSurfaceStrong};
`

export const EmphasisText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text};
`
