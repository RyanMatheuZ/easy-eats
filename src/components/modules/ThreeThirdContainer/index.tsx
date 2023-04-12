import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

const ThreeThirdContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ThreeThirdContainer;
