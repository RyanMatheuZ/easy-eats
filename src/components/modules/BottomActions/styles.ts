import styled, { css } from 'styled-components';

interface ContainerProps {
  $primary?: boolean;
}

const primaryBaseStyles = css`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const secondaryBaseStyles = css`
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const Container = styled.section<ContainerProps>`
  ${({ $primary }) => $primary ? primaryBaseStyles : secondaryBaseStyles};
  box-shadow: 0px 5px 15px ${({ theme }) => theme.palette.secondary.main};
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
`;
