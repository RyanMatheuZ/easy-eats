import type { FC, PropsWithChildren } from 'react';

import { Container } from './styles';

const StyledLabel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default StyledLabel;
