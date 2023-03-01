import type { FC, PropsWithChildren } from 'react';

import { Container } from './styles';

const FirstNameAndSurnameContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default FirstNameAndSurnameContainer;
