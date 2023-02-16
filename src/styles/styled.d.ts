import type { Theme, Palette, Breakpoints } from '@mui/material/styles';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {
    palette: Palette;
    breakpoints: Breakpoints;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
