import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

const MaxWidthContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default MaxWidthContainer;
