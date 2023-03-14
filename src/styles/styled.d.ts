import { type Theme, type Palette, type Breakpoints } from '@mui/material/styles';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {
    palette: Palette & {
      grayScales: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      }
    };
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

  interface PaletteOptions {
    grayScales: PaletteOptions['primary'];
  }
}
