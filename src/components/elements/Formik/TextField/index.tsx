import { type FC } from 'react';

import { type TextFieldProps as MuiTextFieldProps } from '@mui/material';

import { Field } from 'formik';

import StyledInput from '@components/elements/StyledInput/styles';

import ErrorMessage from '../ErrorMessage';

import { Container } from '../styles';

type TextFieldProps = MuiTextFieldProps & {
  dataTestId: string;
}

const TextField: FC<TextFieldProps> = ({
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
        id={name}
        name={name}
        label={label}
        required={required}
        fullWidth={fullWidth}
        inputProps={{ 'data-testid': dataTestId }}
        autoComplete="off"
        as={StyledInput}
        {...props}
      />
      <ErrorMessage
        name={name as string}
        dataTestId={dataTestId}
      />
    </Container>
  );
};

export default TextField;
