import styled from 'styled-components'
import { universities } from '../../data/universities'
import { SiteShell } from './SiteShell'

const FooterBar = styled.footer`
  margin-top: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.lg} 0 ${({ theme }) => theme.space.xl};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`

const FooterStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
`

const Copyright = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`

const FinePrint = styled.p`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.55;
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
            правила приёма всегда проверяйте на официальных сайтах вузов. В
            материалах проекта — подборка из {universities.length} вузов
            Санкт‑Петербурга.
          </FinePrint>
        </FooterStack>
      </SiteShell>
    </FooterBar>
  )
}
