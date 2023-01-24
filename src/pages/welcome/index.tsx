import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import StyledButton from '@components/elements/StyledButton/styles';
import Head from '@components/meta/Head';
import BottomActions from '@components/modules/BottomActions';
import MaxWidthContainer from '@components/modules/MaxWidthContainer';

import { Container, ButtonContainer, Title, Text } from './styles';

const Login: NextPage = () => {
  const router = useRouter();

  const handleRedirectToSignInPage = () => {
    router.push('/sign-in');
  };

  const handleRedirectToSignUpPage = () => {
    router.push('/sign-up');
  };

  return (
    <>
      <Head
        title='Bem-vindo | EasyEats'
        description='O jeito mais fácil de pedir aquilo que te agrada!'
      />
      <Container>
        <BottomActions $primary>
          <MaxWidthContainer>
            <Title>
              Bem-vindo!
            </Title>
            <Text>
              Agora seus clientes podem realizar pedidos com muita facilidade e rapidez.
              Tudo isso aliado à nossa flexibilidade e cuidado!
            </Text>
            <ButtonContainer>
              <StyledButton $primary onClick={handleRedirectToSignInPage}>
                Entrar
              </StyledButton>
              <StyledButton onClick={handleRedirectToSignUpPage}>
                Cadastrar-se
              </StyledButton>
            </ButtonContainer>
          </MaxWidthContainer>
        </BottomActions>
      </Container>
    </>
  );
};

export default Login;
