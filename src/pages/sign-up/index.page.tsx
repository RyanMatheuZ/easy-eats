import type { NextPage } from 'next';

import { Formik, Form } from 'formik';

import FormikTextField from '@components/elements/FormikTextField';
import StyledButton from '@components/elements/StyledButton/styles';
import Head from '@components/meta/Head';
import BottomActions from '@components/modules/BottomActions';
import HeaderWithBackButton from '@components/modules/HeaderWithBackButton';
import MaxWidthContainer from '@components/modules/MaxWidthContainer';

import { formatCNPJ } from '@utils/inputs';

import { signUpInitialValues, signUpSchema, SignUpValues } from './utils';

import { Container, HeroContainer, SubmitButtonContainer, Title, Text } from './styles';

const SignUp: NextPage = () => {
  const onSubmit = () => {
    return console.log('Submit!');
  };

  return (
    <>
      <Head
        title='Cadastrar-se | EasyEats'
        description='Você está prestes a usufruir do melhor da tecnologia para seu negócio!'
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
              initialValues={signUpInitialValues as SignUpValues}
              validationSchema={signUpSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form noValidate>
                  <FormikTextField
                    type="text"
                    dataTestId="fantasy-name"
                    name="fantasyName"
                    label="Nome fantasia"
                    fullWidth
                  />
                  <FormikTextField
                    type="tel" // Numeric keyboard without parsing to number
                    dataTestId="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    value={formatCNPJ(values.cnpj)}
                    fullWidth
                  />
                  <FormikTextField
                    type="email"
                    dataTestId="email"
                    name="email"
                    label="E-mail"
                    fullWidth
                  />
                  <FormikTextField
                    type="password"
                    dataTestId="password"
                    name="password"
                    label="Senha"
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
