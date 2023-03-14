import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

const SpeechBubble: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SpeechBubble;
