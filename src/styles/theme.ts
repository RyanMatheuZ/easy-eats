import { createTheme, Theme } from '@mui/material/styles';

import { colors } from './colors';
import { sizes, down, up, between } from './breakpoints';

const {
  primary,
  primaryLight,
  secondary,
  secondaryDark,
  secondaryLight,
  grayScale,
  grayScaleLight
} = colors;

const {
  mobile,
  tablet,
  laptop,
  desktop
} = sizes;

export const muiTheme: Theme = createTheme({
  palette: {
    primary: {
      main: primary,
      light: primaryLight
    },
    secondary: {
      main: secondary,
      dark: secondaryDark,
      light: secondaryLight,
    },
    grayScales: {
      main: grayScale,
      light: grayScaleLight
    }
  },
  typography: {
    fontFamily: 'Poppins'
  },
  breakpoints: {
    down,
    up,
    between,
    values: {
      mobile,
      tablet,
      laptop,
      desktop
    }
  }
});

const theme: Theme = {
  ...muiTheme,
  palette: {
    ...muiTheme.palette,
  },
  breakpoints: {
    ...muiTheme.breakpoints
  }
};

export default theme;
