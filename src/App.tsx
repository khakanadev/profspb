import styled from 'styled-components'
import { universities } from './data/universities'

const Shell = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};
`

const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.space.md};
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`

const Lead = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
`

const Accent = styled.span`
  color: ${({ theme }) => theme.color.accent};
  font-weight: 600;
`

export default function App() {
  return (
    <Shell>
      <Title>ПрофСПб</Title>
      <Lead>
        Профориентация для выпускников 11 класса Санкт‑Петербурга. В данных
        уже <Accent>{universities.length}</Accent> вузов — дальше соберём
        страницы и опрос.
      </Lead>
    </Shell>
  )
}
