import type { FC, ReactNode } from 'react';

import { Container } from './styles';

interface BottomActionsProps {
  $primary?: boolean;
  children: ReactNode;
}

const BottomActions: FC<BottomActionsProps> = ({ $primary, children }) => {
  return (
    <Container $primary={$primary}>
      {children}
    </Container>
  );
};

export default BottomActions;
