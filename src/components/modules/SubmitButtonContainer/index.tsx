import type { FC, PropsWithChildren } from 'react';

import { Container } from './styles';

const SubmitButtonContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SubmitButtonContainer;