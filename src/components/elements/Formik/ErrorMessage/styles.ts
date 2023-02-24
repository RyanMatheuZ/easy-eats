import styled from 'styled-components';

import ErrorIcon from '@mui/icons-material/Error';

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  margin-left: ${({ theme }) => theme.spacing(4)};
`;

export const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  color: ${({ theme }) => theme.palette.error.main};
  height: 15px;
  width: 15px;
`;
