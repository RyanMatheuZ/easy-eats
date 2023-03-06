import styled from 'styled-components';

import { TextField } from '@mui/material';

import { FieldBaseStyles } from '@components/elements/Formik/styles';

const StyledInput = styled(TextField).attrs({
  variant: 'filled'
})`
  ${FieldBaseStyles}

  & .MuiInputBase-root {
    input.Mui-disabled {
      cursor: not-allowed;
    }
  }
`;

export default StyledInput;
