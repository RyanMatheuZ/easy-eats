import type { FC, ReactNode } from 'react';

import { Container } from './styles';

interface SpeechBubbleProps {
  children: ReactNode;
}

const SpeechBubble: FC<SpeechBubbleProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SpeechBubble;
