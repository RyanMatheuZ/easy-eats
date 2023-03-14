import { type FC, type PropsWithChildren } from 'react';

import { type FormikFormProps } from 'formik';

import { Container } from './styles';

const StyledFormContainer: FC<PropsWithChildren & FormikFormProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default StyledFormContainer;
