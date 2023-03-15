import { type FC } from 'react';

import { InputSkeleton, LabelSkeleton } from '@components/elements';
import { HalfToHalContainer, TwoThirdContainer } from '@components/modules';

import { Container } from './styles';

const FormLoadingSkeleton: FC = () => {
  return (
    <Container>
      {/* Informações gerais: */}
      <LabelSkeleton />
      <HalfToHalContainer>
        <InputSkeleton $isFullWidth />
        <InputSkeleton $isFullWidth />
      </HalfToHalContainer>
      <InputSkeleton $isFullWidth />
      <InputSkeleton $isFullWidth />
      <InputSkeleton $isFullWidth />
      {/* Contatos: */}
      <LabelSkeleton />
      <InputSkeleton $isFullWidth />
      <InputSkeleton $isFullWidth />
      {/* Localização: */}
      <LabelSkeleton />
      <InputSkeleton $isFullWidth />
      <InputSkeleton $isFullWidth />
      <TwoThirdContainer>
        <InputSkeleton $isFullWidth />
        <InputSkeleton $isFullWidth />
        <InputSkeleton $isFullWidth />
        <InputSkeleton $isFullWidth />
      </TwoThirdContainer>
    </Container>
  );
};

export default FormLoadingSkeleton;
