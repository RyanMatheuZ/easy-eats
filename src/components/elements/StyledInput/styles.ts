import styled from 'styled-components';

import { TextField } from '@mui/material';

const StyleInput = styled(TextField).attrs({
  variant: 'filled'
})`
  & div {
    background-color: #EDECED;
    border-radius: 50px;
    margin-bottom:  ${({ theme }) => theme.spacing(0.5)};
    padding-left: ${({ theme }) => theme.spacing(2)};

    &:focus,
    &:focus-visible,
    &:focus-within {
      background-color: #EDECED;
    }

    &:hover {
      background-color: #E9E9E9;
    }

    &::before,
    &::after,
    &:hover:not(.Mui-disabled)::before {
      border-bottom: none;
    }
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

export default StyleInput;
