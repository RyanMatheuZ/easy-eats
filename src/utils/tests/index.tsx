import type { FC, ReactElement, PropsWithChildren } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import AuthProviver from '@context/auth';

import { queryClient } from '@services/tanstackQuery';

import theme, { muiTheme } from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledThemeProvider theme={theme as DefaultTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <GlobalStyle />
          <AuthProviver>
            {children}
          </AuthProviver>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return (
    render(ui, { wrapper: AllTheProviders, ...options })
  );
};

export * from '@testing-library/react';
export { customRender as render };
