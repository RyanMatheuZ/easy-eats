import styled from 'styled-components';

interface ContainerProps {
  $primary?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ $primary, theme }) => $primary ? theme.palette.primary.main : 'transparent'};
`;

export const Header = styled.header`
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
