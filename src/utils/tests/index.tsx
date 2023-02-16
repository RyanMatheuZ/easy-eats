import type { FC, ReactElement, PropsWithChildren } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import AuthProviver from '@context/auth';

import theme, { muiTheme } from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <AuthProviver>
          {children}
        </AuthProviver>
      </MuiThemeProvider>
    </StyledThemeProvider>
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
