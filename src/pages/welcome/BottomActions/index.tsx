import type { FC } from 'react';

import Router from 'next/router';

import { StyledButton } from '@components/elements/StyledButton/styles';

import { Container, Title, Text, ButtonContainer } from './styles';
import { MaxWidthContainer } from '../styles';

const BottomActions: FC = () => {
  const handleRedirectToSignIn = () => {
    Router.push('/sign-in');
  };

  const handleRedirectToSignUp = () => {
    Router.push('/sign-up');
  };

  return (
    <Container>
      <MaxWidthContainer>
        <Title>
          Bem-vindo!
        </Title>
        <Text>
          Agora seus clientes podem realizar pedidos com muita facilidade e rapidez.
          Tudo isso aliado à nossa flexibilidade e cuidado!
        </Text>
        <ButtonContainer>
          <StyledButton $primary onClick={handleRedirectToSignIn}>
            Entrar
          </StyledButton>
          <StyledButton onClick={handleRedirectToSignUp}>
            Cadastrar-se
          </StyledButton>
        </ButtonContainer>
      </MaxWidthContainer>
    </Container>
  );
};

export default BottomActions;
