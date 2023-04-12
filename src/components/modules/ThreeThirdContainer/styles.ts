import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing(1)};
`;
