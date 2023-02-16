import styled from 'styled-components';

import { Typography } from '@mui/material';

import { StyledButton } from '@components/elements';
import { FlowFinanceMan } from '@components/svgs';

export const Card = styled.article`
  background-color: ${({ theme }) => theme.palette.primary.main};
  // ! TODO: add rgba colors to palette
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 700px;

  & > svg {
    justify-self: flex-end;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const CardTitle = styled.h1`
  color: #2f2e41; // ! TODO: Move to global style
  font-size: 1.85rem;
`;

export const CardText = styled(Typography)`
  color: #3f3d56; // ! TODO: Move to global style
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;

export const SeeMoreButton = styled(StyledButton)<any>`
  padding: ${({ theme }) => theme.spacing(1)};
  width: fit-content;
`;

export const StyledFlowFinanceMan = styled(FlowFinanceMan)`
`;
