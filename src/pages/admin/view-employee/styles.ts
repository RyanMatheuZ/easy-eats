import styled from 'styled-components';

import { MaxWidthContainer } from '@components/modules';

import { Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const Container = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-block: ${({ theme }) => theme.spacing(2)};
`;

export const EmployeeCard = styled.section`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 8px;
  // ! TODO: add rgba colors to palette
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-block: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const EmployeeCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EmployeeName = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-size: 1.15rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;

export const EmployeeRole = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.light};
`;

export const EmployeeIcon = styled(AccountCircle)`
  fill: ${({ theme }) => theme.palette.primary.main};
  height: 60px;
  width: 60px;
`;
