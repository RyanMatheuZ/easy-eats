import styled from 'styled-components';

import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
`;

export const FantasyName = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;

export const OwnerCompletedName = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledUserIcon = styled(AccountCircleIcon)`
  fill: ${({ theme }) => theme.palette.primary.main};
  height: 45px;
  width: 45px;
`;
