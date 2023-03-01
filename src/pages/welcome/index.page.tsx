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
        description='Bem-vindo(a) ao nosso sistema! Nossa plataforma oferece uma solução completa e eficiente para gerenciar suas operações empresariais incluindo estoque, colaboradores e muito mais. Com uma interface intuitiva e fácil de usar, nosso sistema é perfeito para empreendedores que desejam aumentar a eficiência de suas operações e alcançar novos níveis de sucesso. Não perca mais tempo com planilhas complicadas ou sistemas desatualizados. Faça parte do nosso sistema de gerenciamento de empresas e leve sua empresa para o próximo nível. Cadastre-se agora e experimente todas as vantagens de nosso sistema.'
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
