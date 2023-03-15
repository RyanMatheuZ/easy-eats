import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export interface InputSkeleton {
  $isFullWidth?: boolean;
}

export const StyledSkeleton = styled(Skeleton).attrs({ variant: 'rounded' }) <InputSkeleton>`
  border-radius: 50px;
  margin-top: ${({ theme }) => theme.spacing(1)};
  width: ${({ $isFullWidth }) => $isFullWidth ? '100%' : '200px'};
  height: 50px;
`;
