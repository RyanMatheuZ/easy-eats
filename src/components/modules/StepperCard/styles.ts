import styled from 'styled-components';

import { Button, MobileStepper } from '@mui/material';

export const StepperCardContainer = styled.article`
  background-color: ${({ theme }) => theme.palette.common.white};
  // ! TODO: add rgba colors to palette
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Stepper = styled(MobileStepper)`
  border-radius: 8px;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const StepperButton = styled(Button)`
  & svg {
    height: 20px;
    width: 20px;
  }
`;
