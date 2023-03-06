import type { FC, PropsWithChildren } from 'react';

import { Container } from './styles';

const HalfToHalContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default HalfToHalContainer;
