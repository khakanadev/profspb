import styled from 'styled-components'
import { universities } from '../../data/universities'
import { SiteShell } from './SiteShell'

const FooterBar = styled.footer`
  margin-top: ${({ theme }) => theme.space.section};
  padding: ${({ theme }) => theme.space.xl} 0;
  border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};
`

const FooterStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
`

const Copyright = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`

const FinePrint = styled.p`
  margin: 0;
  max-width: 42rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`

export function SiteFooter() {
  return (
    <FooterBar>
      <SiteShell>
        <FooterStack>
          <Copyright>© 2026 ПрофСПб · Санкт‑Петербург</Copyright>
          <FinePrint>
            Материалы носят ознакомительный характер. Проходные баллы и
            правила приёма проверяйте на официальных сайтах вузов. В проекте —
            подборка из {universities.length} вузов Санкт‑Петербурга.
          </FinePrint>
        </FooterStack>
      </SiteShell>
    </FooterBar>
  )
}
