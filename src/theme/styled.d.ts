import type { AppTheme } from './theme'

declare module 'styled-components' {
  /* Расширение без новых полей: вся тема в AppTheme */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
