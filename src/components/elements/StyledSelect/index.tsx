import type { FC, HTMLAttributes } from 'react';

import type { SelectProps as MuiSelectProps } from '@mui/material';
import { InputLabel, Select } from '@mui/material';

import { StyledFormControl } from './styles';

interface SelectDisplayProps extends HTMLAttributes<HTMLDivElement> {
  'data-testid'?: string;
}

type SelectFieldProps = MuiSelectProps & {
  dataTestId: string;
  SelectDisplayProps?: SelectDisplayProps;
}

const StyledSelect: FC<SelectFieldProps> = ({
  name,
  label,
  dataTestId,
  children,
  required = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledFormControl
      required={required}
      fullWidth={fullWidth}
    >
      <InputLabel id={name}>
        {label}
      </InputLabel>
      <Select
        name={name}
        label={label}
        labelId={name}
        required={required}
        SelectDisplayProps={{ 'data-testid': dataTestId }}
        {...props}
      >
        {children}
      </Select>
    </StyledFormControl>
  );
};

export default StyledSelect;
