import type { NextPage } from 'next';

import { Formik, Form } from 'formik';

import FormikTextField from '@components/elements/FormikTextField';
import StyledButton from '@components/elements/StyledButton/styles';
import Head from '@components/meta/Head';
import BottomActions from '@components/modules/BottomActions';
import HeaderWithBackButton from '@components/modules/HeaderWithBackButton';
import MaxWidthContainer from '@components/modules/MaxWidthContainer';

import { formatCPNJ } from '@utils/inputs';

import { signUpInitialValues, signUpSchema, SignUpValues } from './utils';

import { Container, SubmitButtonContainer } from './styles';

const SignUp: NextPage = () => {
  const handleSubmit = () => {
    return alert('SUBMIT');
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
        <BottomActions>
          <MaxWidthContainer>
            <Formik
              initialValues={signUpInitialValues as SignUpValues}
              validationSchema={signUpSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form noValidate>
                  <FormikTextField
                    type="text"
                    dataTestId="establishment-name"
                    name="establishmentName"
                    label="Nome do estabelecimento"
                    fullWidth
                  />
                  <FormikTextField
                    type="tel" // Numeric keyboard without parsing to number
                    dataTestId="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    value={formatCPNJ(values.cnpj)}
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
