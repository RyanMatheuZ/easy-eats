import styled, { css } from 'styled-components';

import { Button } from '@mui/material';

export interface StyledButtonProps {
  $primary?: boolean;
}

const primaryBaseStyles = css`
  color: ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => theme.palette.common.black};
  box-shadow: ${({ theme }) => theme.palette.primary.light};
`;

const secondaryBaseStyles = css`
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.primary.light};
  box-shadow: ${({ theme }) => theme.palette.common.black};
`;

const StyledButton = styled(Button) <StyledButtonProps>`
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

export default StyledButton;
