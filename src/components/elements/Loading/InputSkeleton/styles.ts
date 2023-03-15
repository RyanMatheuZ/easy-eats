import styled from 'styled-components';

import { Skeleton } from '@mui/material';

interface InputSkeleton {
  $isFullWidth?: boolean;
}

export const StyledSkeleton = styled(Skeleton).attrs({ variant: 'rounded' }) <InputSkeleton>`
  border-radius: 50px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  width: ${({ $isFullWidth }) => $isFullWidth ? '100%' : '200px'};
  height: 50px;
`;
