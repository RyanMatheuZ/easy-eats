import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`;

export const FieldBaseStyles = css`
  & div {
    background-color: ${({ theme }) => theme.palette.grayScales.light};
    border-radius: 50px;
    margin-bottom:  ${({ theme }) => theme.spacing(0.5)};
    padding-left: ${({ theme }) => theme.spacing(2)};

    &:focus,
    &:focus-visible,
    &:focus-within {
      background-color: ${({ theme }) => theme.palette.grayScales.light};
    }

    &:hover {
      background-color:  ${({ theme }) => theme.palette.grayScales.main};
    }

    &::before,
    &::after,
    &:hover:not(.Mui-disabled)::before {
      border-bottom: none;
    }
  }

  & .MuiSelect-select.MuiSelect-filled.Mui-disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
  & .MuiInputBase-root::before {
    border-style: none
  }

  & label {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    padding-left: ${({ theme }) => theme.spacing(2.5)};

    &.Mui-focused {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
