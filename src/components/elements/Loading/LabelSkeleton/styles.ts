import styled from 'styled-components';

import { Skeleton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-block: ${({ theme }) => theme.spacing(2, 1)};
`;

export const BorderSkeleton = styled(Skeleton).attrs({ variant: 'rectangular' })`
  width: 5px;
  height: 20px;
`;

export const TextSkeleton = styled(Skeleton).attrs({ variant: 'text' })`
  margin-left: ${({ theme }) => theme.spacing(1)};
  width: 150px;
  height: 25px;
`;
