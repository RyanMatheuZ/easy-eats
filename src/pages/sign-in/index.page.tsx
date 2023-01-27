import type { NextPage } from 'next';

import { Formik, Form } from 'formik';

import { FormikTextField, StyledButton } from '@components/elements';
import { Head } from '@components/meta';
import { BottomActions, HeaderWithBackButton, MaxWidthContainer } from '@components/modules';

import { formatCNPJ } from '@utils/inputs';

import { signInInitialValues, signInSchema, SignInValues } from './utils';

import { Container, HeroContainer, SubmitButtonContainer, Title, Text } from './styles';

const SignIn: NextPage = () => {
  const onSubmit = () => {
    return console.log('Submit!');
  };

  return (
    <>
      <Head
        title='Entrar | EasyEats'
        description='Desfrute do melhor da tecnologia para o seu negócio...'
      />
      <Container>
        <HeaderWithBackButton
          text="Ainda não possui uma conta?"
          routeToRedirect="/sign-up"
        />
        <MaxWidthContainer>
          <HeroContainer>
            <Title>
              Olá novamente!
            </Title>
            <Text>
              Desfrute do melhor da tecnologia para o seu negócio...
            </Text>
          </HeroContainer>
        </MaxWidthContainer>
        <BottomActions $primary>
          <MaxWidthContainer>
            <Formik
              initialValues={signInInitialValues as SignInValues}
              validationSchema={signInSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form noValidate>
                  <FormikTextField
                    type="tel" // Numeric keyboard without parsing to number
                    dataTestId="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    value={formatCNPJ(values.cnpj)}
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
                    <StyledButton type="submit">
                      Entrar
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

export default SignIn;
