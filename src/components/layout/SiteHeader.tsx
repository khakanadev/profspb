import styled from 'styled-components'
import { SiteShell } from './SiteShell'

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.surface} 78%,
    transparent
  );
  backdrop-filter: blur(16px) saturate(1.15);
  -webkit-backdrop-filter: blur(16px) saturate(1.15);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: min(42rem, 88vw);
    height: 2px;
    transform: translateX(-50%);
    border-radius: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.color.accent} 22%,
      ${({ theme }) => theme.color.accent} 78%,
      transparent 100%
    );
    opacity: 0.55;
    pointer-events: none;
  }
`

const Row = styled.div`
  display: flex;
  min-height: ${({ theme }) => theme.layout.headerHeight};
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};

  @media (min-width: 480px) {
    gap: ${({ theme }) => theme.space.md};
  }
`

const Brand = styled.a`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 640px) {
    gap: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  }
`

const NavLink = styled.a`
  display: inline-block;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textMuted};
  text-decoration: none;
  transition:
    color 0.15s ease,
    background 0.15s ease;

  @media (min-width: 480px) {
    font-size: 0.8125rem;
    padding: 0.4rem 0.75rem;
  }

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accentSurface};
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
                <NavLink href="#why-site">Зачем сайт</NavLink>
              </li>
              <li>
                <NavLink href="#quiz">Опрос</NavLink>
              </li>
              <li>
                <NavLink href="#universities">Вузы</NavLink>
              </li>
              <li>
                <NavLink href="#faq">FAQ</NavLink>
              </li>
            </NavList>
          </nav>
        </Row>
      </SiteShell>
    </HeaderBar>
  )
}
