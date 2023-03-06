import type { NextPage } from 'next';

import { Formik, Form } from 'formik';

import type { ISignIn } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { TextField, StyledButton } from '@components/elements';
import { Head } from '@components/meta';
import { BottomActions, HeaderWithBackButton, MaxWidthContainer, SubmitButtonContainer } from '@components/modules';

import { formatCNPJ } from '@utils/inputs/cnpj';
import { unformat } from '@utils/inputs/unformat';

import { head, signInInitialValues, signInSchema } from './utils';

import { Container, HeroContainer, Title, Text } from './styles';

const SignIn: NextPage = () => {
  const { handleSignIn } = useAuth();

  const { title, description } = head;

  const onSubmit = (signInValues: ISignIn) => {
    handleSignIn({
      ...signInValues,
      cnpj: unformat(String(signInValues.cnpj))
    });
  };

  return (
    <>
      <Head title={title} description={description} />
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
              initialValues={signInInitialValues}
              validationSchema={signInSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form noValidate>
                  <TextField
                    type="tel" // Numeric keyboard without parsing to number
                    dataTestId="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    value={formatCNPJ(String(values.cnpj))}
                    fullWidth
                  />
                  <TextField
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
