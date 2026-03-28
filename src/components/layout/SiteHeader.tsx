import styled from 'styled-components'
import { SiteShell } from './SiteShell'

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({ theme }) => theme.color.surface};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.color.accentHeaderRule};
`

const Row = styled.div`
  display: flex;
  min-height: ${({ theme }) => theme.layout.headerHeight};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
`

const Brand = styled.a`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
  letter-spacing: -0.02em;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  margin: 0;
  padding: 0;
  list-style: none;
`

const NavLink = styled.a`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.textMuted};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.accentHover};
  }

  &:focus-visible {
    outline-offset: 4px;
  }
`

export function SiteHeader() {
  return (
    <HeaderBar>
      <SiteShell>
        <Row>
          <Brand href="#top">ПрофСПб</Brand>
          <nav aria-label="Разделы на этой странице">
            <NavList>
              <li>
                <NavLink href="#about-orientation">О профориентации</NavLink>
              </li>
              <li>
                <NavLink href="#why-site">Зачем этот сайт</NavLink>
              </li>
              <li>
                <NavLink href="#quiz">Опрос</NavLink>
              </li>
              <li>
                <NavLink href="#universities">Вузы</NavLink>
              </li>
            </NavList>
          </nav>
        </Row>
      </SiteShell>
    </HeaderBar>
  )
}
