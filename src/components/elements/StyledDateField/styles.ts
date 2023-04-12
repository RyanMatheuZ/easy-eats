import styled from 'styled-components';

import { DateField as MUIDateField } from '@mui/x-date-pickers/DateField';

import { FieldBaseStyles } from '@components/elements/Formik/styles';

export const DateField = styled(MUIDateField)`
  ${FieldBaseStyles};
`;
