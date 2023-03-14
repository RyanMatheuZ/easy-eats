import { useState, type FC } from 'react';

import { Container, Title, StarsContainer, StarIcon, SendRateButton } from './styles';

const RateUs: FC = () => {
  const starsAmount = 5;

  const [ratedStarIndex, setRatedStarIndex] = useState<number | null>(null);

  const handleChooseRatedStar = (ratedStarIndex: number) => {
    setRatedStarIndex(ratedStarIndex);
  };

  return (
    <Container>
      <Title>
        Está gostando do nosso serviço?
      </Title>
      <StarsContainer>
        {Array.from({ length: starsAmount }).map((_, index) => (
          <StarIcon
            key={index}
            $isRated={typeof ratedStarIndex === 'number' && ratedStarIndex >= index}
            onClick={() => handleChooseRatedStar(index)}
          />
        ))}
      </StarsContainer>
      <SendRateButton
        $primary
        disabled={typeof ratedStarIndex !== 'number'}
      >
        Enviar avaliação
      </SendRateButton>
    </Container>
  );
};

export default RateUs;
