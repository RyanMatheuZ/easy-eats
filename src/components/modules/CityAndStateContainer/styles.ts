import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
`;
