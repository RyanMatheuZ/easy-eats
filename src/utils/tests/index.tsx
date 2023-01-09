import type { FC, ReactNode, ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme, { muiTheme } from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

interface AllTheProvidersProps {
  children: ReactNode;
}

const AllTheProviders: FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        {children}
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
