import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import { StyledButton } from '@components/elements';
import { Head } from '@components/meta';
import { BottomActions, MaxWidthContainer } from '@components/modules';
import { Logo } from '@components/svgs';

import { head } from './utils';

import { Container, ButtonContainer, Title, Text } from './styles';

const Login: NextPage = () => {
  const { title, description } = head;

  const { push } = useRouter();

  const handleRedirectToSignInPage = () => {
    push('/sign-in');
  };

  const handleRedirectToSignUpPage = () => {
    push('/sign-up');
  };

  return (
    <>
      <Head title={title} description={description} />
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
