import 'styled-components';

import type { Theme } from './theme';

declare module 'styled-components' {
  // This interface is extended here to override the theme
  // type so TS can correctly infer it's type when receiving
  // the theme as a prop

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
