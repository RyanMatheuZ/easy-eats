import type { AppProps } from 'next/app';

import NextNProgress from 'nextjs-progressbar';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import AuthProviver from '@context/auth';

import theme, { muiTheme } from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <NextNProgress
          color={theme.palette.common.black}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <AuthProviver>
          <Component {...pageProps} />
        </AuthProviver>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};

export default MyApp;
