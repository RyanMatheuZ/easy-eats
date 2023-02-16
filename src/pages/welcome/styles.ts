import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  height: 100vh;

  & > svg {
    align-self: center;
    justify-self: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
`;
export const Text = styled(Typography)`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
