import styled from 'styled-components';

export const Container = styled.label`
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  border-left: 5px solid ${({ theme }) => theme.palette.primary.main};
  padding-left: ${({ theme }) => theme.spacing(1)};
  margin-block: ${({ theme }) => theme.spacing(1, 2)};
`;
