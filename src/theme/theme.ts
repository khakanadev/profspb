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
    /** Фирменный акцент школы — только `#0ebe7c` (в hex латинская `b`, не «б»). */
    accent: string
    accentHover: string
    /** Полупрозрачные варианты того же #0ebe7c (rgb 14, 190, 124). */
    accentSurface: string
    accentSurfaceStrong: string
    accentShadow: string
    accentHeaderRule: string
    border: string
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
  }
  radius: {
    sm: string
    md: string
  }
}

export const theme: AppTheme = {
  layout: {
    maxWidth: '1200px',
    pagePadding: '1rem',
    headerHeight: '4rem',
    scrollPaddingTop: '5rem',
  },
  color: {
    /* Лёгкий зелёный подтон к #0ebe7c */
    bg: '#f3faf7',
    surface: '#ffffff',
    text: '#1a1f1c',
    textMuted: '#5c6860',
    accent: '#0ebe7c',
    accentHover: '#0ba570',
    accentSurface: 'rgba(14, 190, 124, 0.14)',
    accentSurfaceStrong: 'rgba(14, 190, 124, 0.08)',
    accentShadow: 'rgba(14, 190, 124, 0.12)',
    accentHeaderRule: 'rgba(14, 190, 124, 0.45)',
    border: '#dfe8e3',
  },
  font: {
    sans: '"Manrope", system-ui, -apple-system, "Segoe UI", sans-serif',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
  },
  radius: {
    sm: '6px',
    md: '12px',
  },
}
