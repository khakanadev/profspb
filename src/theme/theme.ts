export type AppTheme = {
  color: {
    bg: string
    surface: string
    text: string
    textMuted: string
    accent: string
    accentHover: string
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
  color: {
    bg: '#f8faf9',
    surface: '#ffffff',
    text: '#1a1f1c',
    textMuted: '#5c6860',
    accent: '#0ebe7c',
    accentHover: '#0a9c68',
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
