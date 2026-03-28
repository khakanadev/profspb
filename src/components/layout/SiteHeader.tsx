import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { SiteShell } from './SiteShell'

const NAV_ITEMS = [
  { href: '#about-orientation', label: 'О профориентации' },
  { href: '#why-site', label: 'Зачем сайт' },
  { href: '#quiz', label: 'Опрос' },
  { href: '#universities', label: 'Вузы' },
  { href: '#faq', label: 'FAQ' },
] as const

function MenuIcon({ open }: { open: boolean }) {
  const stroke = 'currentColor'
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg' as const,
    'aria-hidden': true as const,
  }

  if (open) {
    return (
      <svg {...common}>
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Вне sticky: затемнение страницы (портал — не внутри шапки с backdrop-filter). */
const BackdropLayer = styled.button`
  position: fixed;
  z-index: 45;
  inset: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: rgb(0 0 0 / 0.35);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 720px) {
    display: none;
  }
`

const StickyRoot = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
`

const TopBar = styled.div`
  position: relative;
  padding-top: env(safe-area-inset-top, 0px);
  border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.surface} 92%,
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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.sm};
  min-height: ${({ theme }) => theme.layout.headerHeight};
  padding: ${({ theme }) => theme.space.xs} 0;

  @media (min-width: 720px) {
    gap: ${({ theme }) => theme.space.md};
    padding: 0;
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

const MenuButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  margin: 0;
  margin-right: calc(-1 * ${({ theme }) => theme.space.xs});
  padding: 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  @media (min-width: 720px) {
    display: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accentSurface};
    color: ${({ theme }) => theme.color.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 2px;
  }
`

const NavScroll = styled.div`
  display: none;
  min-width: 0;

  @media (min-width: 720px) {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
    overflow: visible;
  }
`

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  margin: 0;
  padding: 0;
  list-style: none;
`

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textMuted};
  text-decoration: none;
  white-space: nowrap;
  transition:
    color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accentSurface};
  }

  &:focus-visible {
    outline-offset: 4px;
  }
`

/** Выпадает вниз под шапкой — в потоке, не position:fixed внутри TopBar. */
const MobileDropdown = styled.nav`
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderSubtle};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: 0 12px 28px rgb(0 0 0 / 0.08);

  @media (min-width: 720px) {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: siteMenuDrop 0.18s ease;

    @keyframes siteMenuDrop {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: ${({ theme }) => theme.space.sm} 0
    calc(${({ theme }) => theme.space.md} + env(safe-area-inset-bottom, 0px));
  list-style: none;
`

const MobileNavItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.color.borderSubtle};

  &:first-child {
    border-top: none;
  }
`

const MobileNavLink = styled.a`
  display: block;
  padding: ${({ theme }) => theme.space.md} 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.35;
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  transition:
    background 0.12s ease,
    color 0.12s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.color.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: -2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  &:active {
    background: ${({ theme }) => theme.color.accentSurface};
  }
`

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const menuPanelId = `${menuId}-panel`

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 720px)')
    const onChange = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const backdrop =
    menuOpen &&
    typeof document !== 'undefined' &&
    createPortal(
      <BackdropLayer
        type="button"
        aria-label="Закрыть меню"
        tabIndex={-1}
        onClick={closeMenu}
      />,
      document.body,
    )

  return (
    <>
      {backdrop}
      <StickyRoot>
        <TopBar>
          <SiteShell>
            <Row>
              <Brand href="#top" onClick={closeMenu}>
                ПрофСПб
              </Brand>
              <MenuButton
                type="button"
                aria-expanded={menuOpen}
                aria-controls={menuPanelId}
                aria-label={
                  menuOpen ? 'Закрыть меню' : 'Открыть меню разделов'
                }
                onClick={toggleMenu}
              >
                <MenuIcon open={menuOpen} />
              </MenuButton>
              <NavScroll>
                <nav aria-label="Разделы на этой странице">
                  <NavList>
                    {NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <NavLink href={item.href}>{item.label}</NavLink>
                      </li>
                    ))}
                  </NavList>
                </nav>
              </NavScroll>
            </Row>
          </SiteShell>
        </TopBar>

        {menuOpen && (
          <MobileDropdown id={menuPanelId} aria-label="Разделы страницы">
            <SiteShell>
              <MobileNavList>
                {NAV_ITEMS.map((item) => (
                  <MobileNavItem key={item.href}>
                    <MobileNavLink href={item.href} onClick={closeMenu}>
                      {item.label}
                    </MobileNavLink>
                  </MobileNavItem>
                ))}
              </MobileNavList>
            </SiteShell>
          </MobileDropdown>
        )}
      </StickyRoot>
    </>
  )
}
