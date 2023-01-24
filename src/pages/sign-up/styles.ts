import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
