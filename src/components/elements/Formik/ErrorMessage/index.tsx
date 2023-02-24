import type { FC } from 'react';

import { ErrorMessage as FormikErrorMessage } from 'formik';

import { ErrorMessageContainer, StyledErrorIcon, StyledErrorMessage } from './styles';

interface ErrorMessageProps {
  name: string;
  dataTestId: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ name, dataTestId }) => {
  return (
    <FormikErrorMessage name={name} render={
      (errorMessage) => (
        <ErrorMessageContainer>
          <StyledErrorIcon />
          <StyledErrorMessage data-testid={`${dataTestId}-error-message`}>
            {errorMessage}
          </StyledErrorMessage>
        </ErrorMessageContainer>
      )}
    />
  );
};

export default ErrorMessage;
