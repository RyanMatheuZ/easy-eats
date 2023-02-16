import { useRouter } from 'next/router';

import { useEffect } from 'react';

import NextNProgress from 'nextjs-progressbar';

import { ToastContainer } from 'react-toastify';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import type { TAppPropsWithLayout } from '@ts/types';

import AuthProviver, { useAuth } from '@context/auth';

import theme, { muiTheme } from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const router = useRouter();

  const { company, unauthenticatedRoutes } = useAuth();

  const isUnauthenticatedUser = false; // !company && !unauthenticatedRoutes.includes(router.asPath);

  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    if (isUnauthenticatedUser) {
      return router.back();
    }
  }, [router.asPath]);

  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <ToastContainer />
        <NextNProgress
          color={theme.palette.common.black}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <AuthProviver>
          {getLayout(<Component {...pageProps} />)}
        </AuthProviver>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};

export default MyApp;
