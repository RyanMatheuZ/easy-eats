import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

interface BottomActionsProps extends PropsWithChildren {
  $primary?: boolean;
}

const BottomActions: FC<BottomActionsProps> = ({ $primary, children }) => {
  return (
    <Container $primary={$primary}>
      {children}
    </Container>
  );
};

export default BottomActions;
