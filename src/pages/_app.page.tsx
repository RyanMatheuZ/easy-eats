import type { AppProps } from 'next/app';

import NextNProgress from 'nextjs-progressbar';

import { useRouter, usePathname } from 'next/navigation';

import { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import AuthProviver, { useAuth } from '@context/auth/index';

import theme, { muiTheme } from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const { company, authenticatedRoutes } = useAuth();

  const isUnauthenticatedUser = !company && authenticatedRoutes.includes(pathname as string);

  useEffect(() => {
    if (isUnauthenticatedUser) {
      router.back();
    }
  }, [pathname]);

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
          <Component {...pageProps} />
        </AuthProviver>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};

export default MyApp;
