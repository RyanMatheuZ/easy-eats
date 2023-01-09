import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
`;

export const MaxWidthContainer = styled.section`
  padding: ${({ theme }) => theme.spacing(4)};
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
`;
