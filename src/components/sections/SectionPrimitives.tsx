import styled from 'styled-components'

export const ContentSection = styled.section`
  scroll-margin-top: ${({ theme }) => theme.layout.scrollPaddingTop};
  padding: ${({ theme }) => theme.space.section} 0;
  border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};
`

export const SectionIntro = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  max-width: 38rem;
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.text};
`

export const SectionLead = styled.p`
  margin: ${({ theme }) => theme.space.md} 0 0;
  max-width: 40rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  font-weight: 400;
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
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.color.shadowSoft};
`

export const PointTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.space.xs};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`

export const PointText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`

export const EmphasisBlock = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  border-left: 2px solid ${({ theme }) => theme.color.accent};
  border-radius: 0 ${({ theme }) => theme.radius.md} ${({ theme }) => theme.radius.md} 0;
  background: ${({ theme }) => theme.color.surface};
  border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-right: 1px solid ${({ theme }) => theme.color.borderSubtle};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
`

export const EmphasisText = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
`
