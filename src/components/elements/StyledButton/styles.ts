import styled, { css } from 'styled-components';

import { Button } from '@mui/material';

interface StyledButtonProps {
  $primary?: boolean;
}

const primaryBaseStyles = css`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.common.black};
  box-shadow: ${({ theme }) => theme.palette.common.white};
`;

const secondaryBaseStyles = css`
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: ${({ theme }) => theme.palette.common.black};
`;

export const StyledButton = styled(Button) <StyledButtonProps>`
  ${({ $primary }) => $primary ? primaryBaseStyles : secondaryBaseStyles};
  text-align: center;
  border-radius: 50px;
  padding: ${({ theme }) => theme.spacing(2)};
  min-width: 150px;

  &:hover {
    ${({ $primary }) => $primary ? primaryBaseStyles : secondaryBaseStyles};
    box-shadow: 0px 3px 10px;
  }
`;
