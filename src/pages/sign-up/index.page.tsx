import type { NextPage } from 'next';

import { Formik, Form } from 'formik';

import type { ISignUp } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { TextField, StyledButton } from '@components/elements';
import { Head } from '@components/meta';
import { BottomActions, HeaderWithBackButton, MaxWidthContainer, SubmitButtonContainer } from '@components/modules';

import { formatCNPJ } from '@utils/inputs/cnpj';
import { unformat } from '@utils/inputs/unformat';

import { signUpInitialValues, signUpSchema } from './utils';

import { Container, HeroContainer, Title, Text } from './styles';

const SignUp: NextPage = () => {
  const { handleSignUp } = useAuth();

  const onSubmit = (signUpValues: ISignUp) => {
    handleSignUp({
      ...signUpValues,
      cnpj: unformat(String(signUpValues.cnpj))
    });
  };

  return (
    <>
      <Head
        title='Cadastrar-se'
        description='Bem-vindo(a)! Aqui você pode criar uma conta para acessar todas as funcionalidades do nosso sistema. Para criar uma nova conta, preencha o formulário de cadastro com suas informações básicas. Certifique-se de preencher todos os campos antes de clicar no botão "CADASTRAR-SE". Caso já tenha uma conta, basta clicar no link "Já possui uma conta?" no topo da página para acessar o sistema.'
      />
      <Container>
        <HeaderWithBackButton
          text="Já possui uma conta?"
          routeToRedirect="/sign-in"
        />
        <MaxWidthContainer>
          <HeroContainer>
            <Title>
              Crie sua conta!
            </Title>
            <Text>
              Desfrute do melhor da tecnologia para o seu negócio...
            </Text>
          </HeroContainer>
        </MaxWidthContainer>
        <BottomActions>
          <MaxWidthContainer>
            <Formik
              initialValues={signUpInitialValues}
              validationSchema={signUpSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form noValidate>
                  <TextField
                    type="text"
                    dataTestId="fantasy-name"
                    name="fantasyName"
                    label="Nome fantasia"
                    fullWidth
                  />
                  <TextField
                    type="tel" // Numeric keyboard without parsing to number
                    dataTestId="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    value={formatCNPJ(String(values.cnpj))}
                    fullWidth
                  />
                  <TextField
                    type="email"
                    dataTestId="email"
                    name="email"
                    label="E-mail"
                    fullWidth
                  />
                  <TextField
                    type="password"
                    dataTestId="password"
                    name="password"
                    label="Senha"
                    fullWidth
                  />
                  <TextField
                    type="password"
                    dataTestId="confirm-password"
                    name="confirmPassword"
                    label="Confirme a senha"
                    fullWidth
                  />
                  <SubmitButtonContainer>
                    <StyledButton type="submit" $primary>
                      Cadastrar-se
                    </StyledButton>
                  </SubmitButtonContainer>
                </Form>
              )}
            </Formik>
          </MaxWidthContainer>
        </BottomActions>
      </Container>
    </>
  );
};

export default SignUp;
