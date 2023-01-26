import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-left: 4px solid ${({ theme }) => theme.palette.common.black};

  @media ${({ theme }) => theme.breakpoints.down('mobile')} {
    text-align: center;
    align-items: center;
    border-left: 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.common.white};
  margin-left: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('mobile')} {
    margin-left: 0;
  }
`;

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.5rem;
  margin-left: ${({ theme }) => theme.spacing(4)};

  @media ${({ theme }) => theme.breakpoints.down('mobile')} {
    margin-left: 0;
  }
`;
