import type { FC } from 'react';

import type { TextFieldProps } from '@mui/material';

import { Field, ErrorMessage } from 'formik';

import StyledInput from '@components/elements/StyledInput/styles';

import {
  Container,
  ErrorMessageContainer,
  StyledErrorMessage,
  StyledErrorIcon
} from './styles';

type FormikTextFieldProps = TextFieldProps & {
  dataTestId: string;
}

const FormikTextField: FC<FormikTextFieldProps> = ({
  name,
  label,
  dataTestId,
  required = false,
  fullWidth = false,
  ...props
}: FormikTextFieldProps) => {
  return (
    <Container>
      <Field
        name={name}
        label={label}
        required={required}
        fullWidth={fullWidth}
        inputProps={{ 'data-testid': dataTestId }}
        autoComplete="off"
        as={StyledInput}
        {...props}
      />
      <ErrorMessage name={name || ''} render={
        (errorMessage) => (
          <ErrorMessageContainer>
            <StyledErrorIcon />
            <StyledErrorMessage data-testid={`${dataTestId}-error-message`}>
              {errorMessage}
            </StyledErrorMessage>
          </ErrorMessageContainer>
        )}
      />
    </Container>
  );
};

export default FormikTextField;
