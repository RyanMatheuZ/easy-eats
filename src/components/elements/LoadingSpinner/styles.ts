import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: ${({ theme }) => theme.spacing(3)};
`;
