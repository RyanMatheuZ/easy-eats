import styled from 'styled-components';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const StyledBackButton = styled(ChevronLeftIcon)`
  color: ${({ theme }) => theme.palette.secondary.main};
  height: 35px;
  width: 35px;
`;
