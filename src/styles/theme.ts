import { createTheme } from '@mui/material/styles';

import { colors } from './colors';
import { sizes, up, down, between } from './breakpoints';

interface ThemePalette {
  primary: string;
  secondary: string;
  tertiary: string;
}

interface ThemeBreakpoints {
  up: (size: string) => string
  down: (size: string) => string
  between: (minSize: string, maxSize: string) => string
  devices: {
    mobile: string
    portraitTablet: string
    landscapeTablet: string
    laptop: string
    desktop: string
    largeDesktop: string
  }
}

export interface Theme {
  palette: ThemePalette;
  breakpoints: ThemeBreakpoints;
}

const theme: Theme = {
  palette: {
    primary: colors.black,
    secondary: colors.white,
    tertiary: colors.gray,
  },
  breakpoints: {
    up,
    down,
    between,
    devices: {
      mobile: down(sizes.xs),
      portraitTablet: between(sizes.xs, sizes.sm),
      landscapeTablet: between(sizes.sm, sizes.md),
      laptop: between(sizes.md, sizes.lg),
      desktop: between(sizes.xs, sizes.xg),
      largeDesktop: up(sizes.xg)
    }

  }
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.palette.primary
    },
    secondary: {
      main: theme.palette.secondary,
    },
  },
});

export default theme;
