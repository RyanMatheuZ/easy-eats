import type { FC, PropsWithChildren } from 'react';

import { Container } from './styles';

const CityAndStateContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default CityAndStateContainer;
