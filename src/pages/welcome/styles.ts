import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  margin: 0;
`;
export const Text = styled(Typography)`
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  max-width: 500px;
  width: 100%;
`;
