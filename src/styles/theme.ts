import { createTheme, Theme } from '@mui/material/styles';

import { colors } from './colors';
import { sizes, down, up, between } from './breakpoints';

const { primary, secondary, white } = colors;
const { mobile, tablet, laptop, desktop } = sizes;

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    common: {
      white
    }
  },
  typography: {
    fontFamily: 'Poppins',
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
