import { type FC } from 'react';

import { Container, BorderSkeleton, TextSkeleton } from './styles';

const LabelSkeleton: FC = () => {
  return (
    <Container>
      <BorderSkeleton /> <TextSkeleton />
    </Container>
  );
};

export default LabelSkeleton;
