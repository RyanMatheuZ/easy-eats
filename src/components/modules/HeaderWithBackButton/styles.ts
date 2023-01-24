import styled from 'styled-components';

export const Container = styled.header`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.spacing(1)};
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
`;

export const Content = styled.div`
  margin-right: ${({ theme }) => theme.spacing(2.5)};
`;
