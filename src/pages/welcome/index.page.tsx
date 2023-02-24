import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import { StyledButton } from '@components/elements';
import { Head } from '@components/meta';
import { BottomActions, MaxWidthContainer } from '@components/modules';
import { Logo } from '@components/svgs';

import { Container, ButtonContainer, Title, Text } from './styles';

const Login: NextPage = () => {
  const { push } = useRouter();

  const handleRedirectToSignInPage = () => {
    push('/sign-in');
  };

  const handleRedirectToSignUpPage = () => {
    push('/sign-up');
  };

  return (
    <>
      <Head
        title='Bem-vindo'
        description='O jeito mais fácil de pedir aquilo que te agrada!'
      />
      <Container>
        <Logo />
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
