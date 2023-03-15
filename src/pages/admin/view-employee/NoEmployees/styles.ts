import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ImageContainer = styled.div`
  max-width: 450px;
  width: 100%;
`;

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-size: 1.1rem;
  text-align: center;
`;
