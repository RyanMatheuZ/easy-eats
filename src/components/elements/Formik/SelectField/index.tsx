import type { FC, HTMLAttributes } from 'react';

import type { SelectProps as MuiSelectProps } from '@mui/material';

import { Field } from 'formik';

import StyledSelect from '../../StyledSelect';

import { Container } from '../styles';

interface SelectDisplayProps extends HTMLAttributes<HTMLDivElement> {
  'data-testid'?: string;
}

type SelectFieldProps = MuiSelectProps & {
  dataTestId: string;
  SelectDisplayProps?: SelectDisplayProps;
}

const SelectField: FC<SelectFieldProps> = ({
  name,
  label,
  required = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <Container>
      <Field
        type="select"
        id={name}
        name={name}
        label={label}
        required={required}
        fullWidth={fullWidth}
        as={StyledSelect}
        {...props}
      />
    </Container>
  );
};

export default SelectField;
