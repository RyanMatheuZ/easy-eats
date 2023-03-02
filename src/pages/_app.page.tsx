import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import NextNProgress from 'nextjs-progressbar';

import { ToastContainer } from 'react-toastify';

import type { TAppPropsWithLayout } from '@ts/types';

import AuthProviver, { useAuth } from '@context/auth';

import { queryClient } from '@services/tanstackQuery';

import theme, { muiTheme } from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const { push, replace } = useRouter();

  const { company, unauthenticatedRoutes } = useAuth();

  const isAuthenticatedUser = true; // !!company && !!unauthenticatedRoutes.includes(router.asPath);

  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    if (isAuthenticatedUser) {
      push('/admin');
    } else {
      replace('/welcome');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledThemeProvider theme={theme as DefaultTheme}>
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
    </QueryClientProvider>
  );
};

export default MyApp;
