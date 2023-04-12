import { type FC } from 'react';

import { InputSkeleton, LabelSkeleton } from '@components/elements';
import { HalfToHalfContainer, ThreeThirdContainer, TwoThirdContainer } from '@components/modules';

import { Container } from './styles';

const FormLoadingSkeleton: FC = () => {
  return (
    <Container>
      {/* Informações gerais: */}
      <LabelSkeleton />
      <HalfToHalfContainer>
        <InputSkeleton $isFullWidth />
        <InputSkeleton $isFullWidth />
      </HalfToHalfContainer>
      <InputSkeleton $isFullWidth />
      <InputSkeleton $isFullWidth />
      <InputSkeleton $isFullWidth />
      <ThreeThirdContainer>
        <InputSkeleton $isFullWidth />
        <InputSkeleton $isFullWidth />
        <InputSkeleton $isFullWidth />
      </ThreeThirdContainer>
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
