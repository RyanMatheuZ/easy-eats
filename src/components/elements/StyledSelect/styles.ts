import styled from 'styled-components';

import { FormControl } from '@mui/material';

import { FieldBaseStyles } from '@components/elements/Formik/styles';

export const StyledFormControl = styled(FormControl).attrs({
  variant: 'filled'
})`
  ${FieldBaseStyles}
`;
