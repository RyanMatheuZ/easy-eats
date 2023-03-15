import { type FC, type HTMLAttributes } from 'react';

import { type SelectProps as MuiSelectProps } from '@mui/material';

import { Field } from 'formik';

import StyledSelect from '../../StyledSelect';

import ErrorMessage from '../ErrorMessage';

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
  dataTestId,
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
      <ErrorMessage
        name={name as string}
        dataTestId={dataTestId}
      />
    </Container>
  );
};

export default SelectField;
