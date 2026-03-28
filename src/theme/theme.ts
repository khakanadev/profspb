export type AppTheme = {
  layout: {
    maxWidth: string
    pagePadding: string
    headerHeight: string
    scrollPaddingTop: string
  }
  color: {
    bg: string
    surface: string
    text: string
    textMuted: string
    /** Фирменный акцент школы — `#0ebe7c` (латинская `b` в hex). */
    accent: string
    accentHover: string
    accentSurface: string
    accentSurfaceStrong: string
    /** Нейтральные тени карточек (минимализм). */
    shadowSoft: string
    border: string
    borderSubtle: string
  }
  font: {
    sans: string
  }
  space: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    section: string
  }
  radius: {
    sm: string
    md: string
    lg: string
  }
}

export const theme: AppTheme = {
  layout: {
    maxWidth: '1120px',
    pagePadding: '1.25rem',
    headerHeight: '3.5rem',
    scrollPaddingTop: '4.25rem',
  },
  color: {
    bg: '#fafafa',
    surface: '#ffffff',
    text: '#0a0a0a',
    textMuted: '#737373',
    accent: '#0ebe7c',
    accentHover: '#0ba570',
    accentSurface: 'rgba(14, 190, 124, 0.07)',
    accentSurfaceStrong: 'rgba(14, 190, 124, 0.05)',
    shadowSoft: '0 1px 3px rgba(0, 0, 0, 0.06)',
    border: '#e8e8e8',
    borderSubtle: '#f0f0f0',
  },
  font: {
    sans: '"DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    section: 'clamp(3rem, 8vw, 5rem)',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
  },
}
