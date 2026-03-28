import styled from 'styled-components'
import { faqItems } from '../../data/faqItems'
import {
  ContentSection,
  SectionIntro,
  SectionLead,
  SectionTitle,
} from '../sections/SectionPrimitives'
import { SiteShell } from '../layout/SiteShell'

const FaqIntro = styled(SectionIntro)`
  padding-left: ${({ theme }) => theme.space.md};
  border-left: 2px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.accent} 40%,
      ${({ theme }) => theme.color.border}
    );
  border-radius: 0 ${({ theme }) => theme.radius.md}
    ${({ theme }) => theme.radius.md} 0;
`

const FaqTitle = styled(SectionTitle)`
  &::after {
    content: '';
    display: block;
    width: 2.5rem;
    height: 2px;
    margin-top: ${({ theme }) => theme.space.sm};
    border-radius: 1px;
    background: ${({ theme }) => theme.color.accent};
    opacity: 0.55;
  }
`

const LeadBrand = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};
`

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`

const FaqDetails = styled.details`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-left: 2px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.accent} 26%,
      ${({ theme }) => theme.color.border}
    );
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.color.shadowSoft};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:nth-child(odd) {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.color.accentSurfaceStrong} 0%,
      ${({ theme }) => theme.color.surface} 14%
    );
  }

  &[open] {
    border-left-color: color-mix(
      in srgb,
      ${({ theme }) => theme.color.accent} 52%,
      ${({ theme }) => theme.color.border}
    );
    box-shadow: ${({ theme }) => theme.color.shadowSoft};
  }
`

const Chevron = styled.span`
  flex-shrink: 0;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.color.accent};
  transition: transform 0.2s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const FaqSummary = styled.summary`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
  list-style: none;
  transition: background 0.15s ease;

  &::-webkit-details-marker {
    display: none;
  }

  &::marker {
    content: '';
  }

  &:hover {
    background: ${({ theme }) => theme.color.accentSurface};
  }

  details[open] > & {
    background: ${({ theme }) => theme.color.accentSurfaceStrong};
  }

  details[open] > & ${Chevron} {
    transform: rotate(180deg);
  }
`

const FaqAnswer = styled.div`
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.lg}
    ${({ theme }) => theme.space.lg};
  border-top: 1px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.accent} 22%,
      ${({ theme }) => theme.color.borderSubtle}
    );
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.accentSurface} 0%,
    ${({ theme }) => theme.color.accentSurfaceStrong} 35%,
    transparent 70%
  );
  font-size: 0.875rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
`

export function FaqSection() {
  return (
    <ContentSection id="faq" aria-labelledby="faq-title">
      <SiteShell>
        <FaqIntro>
          <FaqTitle id="faq-title">Частые вопросы</FaqTitle>
          <SectionLead>
            Короткие ответы о том, как пользоваться{' '}
            <LeadBrand>«ПрофСПб»</LeadBrand> и как не перепутать школьный
            проект с официальными правилами приёма.
          </SectionLead>
        </FaqIntro>

        <FaqList>
          {faqItems.map((item) => (
            <FaqDetails key={item.id}>
              <FaqSummary>
                {item.question}
                <Chevron aria-hidden>▼</Chevron>
              </FaqSummary>
              <FaqAnswer>{item.answer}</FaqAnswer>
            </FaqDetails>
          ))}
        </FaqList>
      </SiteShell>
    </ContentSection>
  )
}
