import styled from 'styled-components'
import { SiteShell } from '../layout/SiteShell'

const Hero = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.space.section} 0
    ${({ theme }) => theme.space.xl};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: min(52%, 22rem);
    pointer-events: none;
    background: radial-gradient(
      120% 100% at 0% 0%,
      ${({ theme }) => theme.color.accentSurface} 0%,
      ${({ theme }) => theme.color.accentSurfaceStrong} 42%,
      transparent 72%
    );
  }
`

const HeroInner = styled.div`
  position: relative;
  max-width: 38rem;
  padding-left: ${({ theme }) => theme.space.lg};
  border-left: 3px solid ${({ theme }) => theme.color.accent};
`

const Kicker = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin: 0 0 ${({ theme }) => theme.space.md};
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.accent} 28%, transparent);
  box-shadow: ${({ theme }) => theme.color.shadowSoft};

  &::before {
    content: '';
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.accent};
  }
`

const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.space.lg};
  max-width: 20ch;
  font-size: clamp(2.125rem, 5.8vw, 3.5rem);
  font-weight: 600;
  line-height: 1.06;
  letter-spacing: -0.045em;
  color: ${({ theme }) => theme.color.text};
`

const TitleAccent = styled.span`
  color: ${({ theme }) => theme.color.accent};
`

const Lead = styled.p`
  margin: 0;
  max-width: 34rem;
  font-size: 1.0625rem;
  line-height: 1.68;
  font-weight: 400;
  color: ${({ theme }) => theme.color.textMuted};
`

const LeadBrand = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};
`

export function HeroSection() {
  return (
    <Hero>
      <SiteShell>
        <HeroInner>
          <Kicker>Санкт‑Петербург · 11 класс</Kicker>
          <Title>
            Разобраться в{' '}
            <TitleAccent>профессии</TitleAccent> до подачи документов
          </Title>
          <Lead>
            <LeadBrand>«ПрофСПб»</LeadBrand> — введение в профориентацию,
            подборка вузов города и короткий опрос, чтобы спокойнее пройти путь
            от ЕГЭ до выбора направления.
          </Lead>
        </HeroInner>
      </SiteShell>
    </Hero>
  )
}
