import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0px 5px 15px ${({ theme }) => theme.palette.secondary.main};
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;
