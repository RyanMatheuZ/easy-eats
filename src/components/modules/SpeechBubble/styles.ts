import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(2)};
  position: relative;
  // ! TODO: add rgba colors to palette
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.palette.primary.light};
    position: absolute;
    left: 15px;
    bottom: -5px;
    transform: rotate(45deg);
    height: 20px;
    width: 20px;
  }
`;
