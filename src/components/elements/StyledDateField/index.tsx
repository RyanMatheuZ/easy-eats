import { type FC } from 'react';

import { type DateFieldProps } from '@mui/x-date-pickers';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { DateField } from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledDateField: FC<DateFieldProps<any> & { dataTestId: string }> = ({
  name,
  label,
  dataTestId,
  required = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateField
        id={name}
        name={name}
        label={label}
        required={required}
        fullWidth={fullWidth}
        variant="filled"
        inputProps={{ 'data-testid': dataTestId }}
        format="dd/MM/yyyy"
        {...props}
      />
    </LocalizationProvider>
  );
};

export default StyledDateField;
