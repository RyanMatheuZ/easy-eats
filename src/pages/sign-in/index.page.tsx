import type { NextPage } from 'next';

import { Formik, Form } from 'formik';

import type { ISignIn } from 'types';

import useCompany from '@hooks/useCompany';

import { FormikTextField, StyledButton } from '@components/elements';
import { Head } from '@components/meta';
import { BottomActions, HeaderWithBackButton, MaxWidthContainer } from '@components/modules';

import { useAuth } from '@context/auth';

import { formatCNPJ, unformatCNPJ } from '@utils/inputs';

import { signInInitialValues, signInSchema } from './utils';

import { Container, HeroContainer, SubmitButtonContainer, Title, Text } from './styles';

const SignIn: NextPage = () => {
  const { handleSignIn: xpto } = useAuth();

  const { handleSignIn } = useCompany();

  const onSubmit = (data: ISignIn) => {
    handleSignIn({
      ...data,
      cnpj: unformatCNPJ(data.cnpj)
    });
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
              initialValues={signInInitialValues as ISignIn}
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
