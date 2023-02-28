import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing(4)};
  margin: 0 auto;
  max-width: 800px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;
