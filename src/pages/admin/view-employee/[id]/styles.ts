import styled from 'styled-components';

import { StyledFormContainer as FormContainer } from '@components/modules';

export const StyledFormContainer = styled(FormContainer)`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(2)};
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);

  @media ${({ theme }) => theme.breakpoints.down('tablet')} {
    position: relative;
  }
`;
