import 'styled-components';

import type { Theme, Palette } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    palette: Palette;
  }
}
