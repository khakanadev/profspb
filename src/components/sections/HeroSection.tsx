import styled from 'styled-components'
import { SiteShell } from '../layout/SiteShell'

const Hero = styled.section`
  padding: ${({ theme }) => theme.space.xl} 0;
`

const Badge = styled.span`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.color.accentSurface};
`

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};

  &::after {
    display: block;
    width: 3.25rem;
    height: 4px;
    margin-top: ${({ theme }) => theme.space.md};
    margin-bottom: ${({ theme }) => theme.space.md};
    border-radius: 2px;
    background: ${({ theme }) => theme.color.accent};
    content: '';
  }
`

const Lead = styled.p`
  margin: 0;
  max-width: 36rem;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`

export function HeroSection() {
  return (
    <Hero>
      <SiteShell>
        <Badge>Санкт‑Петербург · выпускники 11 класса</Badge>
        <Title>Разобраться в профессии до подачи документов</Title>
        <Lead>
          «ПрофСПб» собирает в одном месте понятное введение в профориентацию,
          подборку вузов города и короткий опрос, чтобы от стресса ЕГЭ перейти
          к осознанному выбору направления.
        </Lead>
      </SiteShell>
    </Hero>
  )
}
