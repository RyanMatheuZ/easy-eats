import { useState, type FC } from 'react';

import { useAuth } from '@context/auth';

import { useRateUs } from '@hooks/index';

import { Container, Title, StarsContainer, StarIcon, SendRatingButton } from './styles';

const RateUs: FC = () => {
  const { company } = useAuth();

  const { handleSaveRating } = useRateUs();

  const [ratedStarIndex, setRatedStarIndex] = useState<number | null>(null);

  const starsAmount = 5;
  const isRatingEmpty = typeof ratedStarIndex !== 'number';

  const handleChooseRatedStar = (ratedStarIndex: number) => {
    setRatedStarIndex(ratedStarIndex);
  };

  const handleSendRating = () => {
    if (!isRatingEmpty) {
      handleSaveRating(company?._id as string, ratedStarIndex + 1);
    }
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
            $isRated={!isRatingEmpty && ratedStarIndex >= index}
            onClick={() => handleChooseRatedStar(index)}
          />
        ))}
      </StarsContainer>
      <SendRatingButton
        $primary
        onClick={handleSendRating}
        disabled={isRatingEmpty}
      >
        Enviar avaliação
      </SendRatingButton>
    </Container>
  );
};

export default RateUs;
