import type { FC, ReactNode } from 'react';

import { Container } from './styles';

interface MaxWidthContainerProps {
  children: ReactNode;
}

const MaxWidthContainer: FC<MaxWidthContainerProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default MaxWidthContainer;
