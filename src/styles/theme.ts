import { createTheme, Theme } from '@mui/material/styles';

import { colors } from './colors';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    common: {
      white: colors.white
    }
  },
  typography: {
    fontFamily: 'Poppins',
  },
  spacing: 8,
});

const theme: Theme = {
  ...muiTheme,
  palette: {
    ...muiTheme.palette,
  },
};

export default theme;
