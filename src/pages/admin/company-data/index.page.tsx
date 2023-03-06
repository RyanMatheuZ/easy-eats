import type { ReactElement } from 'react';
import { useRef } from 'react';

import type { FormikProps } from 'formik';
import { Formik } from 'formik';

import type { TNextPageWithLayout } from '@ts/types';

import { useAuth } from '@context/auth';

import { TextField, StyledLabel, StyledButton } from '@components/elements';
import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import {
  AddressFields,
  HalfToHalContainer,
  MaxWidthContainer,
  StyledFormContainer,
  SubmitButtonContainer
} from '@components/modules';

import { formatCNPJ } from '@utils/inputs/cnpj';

import type { CompanyFormValues } from './utils';
import { companyDataSchema } from './utils';

const CompanyData: TNextPageWithLayout = () => {
  const formikRef = useRef<FormikProps<CompanyFormValues> | null>();

  const { company } = useAuth();

  const companyDataInitialValues: CompanyFormValues = {
    fantasyName: '' ?? company?.fantasyName,
    cnpj: '' ?? company?.cnpj,
    email: '' ?? company?.email,
    zipCode: '' ?? company?.address?.cep,
    address: '' ?? company?.address?.logradouro,
    district: '' ?? company?.address?.bairro,
    locationNumber: '' ?? company?.address?.numeroDoLocal,
    city: '' ?? company?.address?.localidade,
    state: '' ?? company?.address?.uf,
    firstName: '' ?? company?.owner?.firstName,
    surname: '' ?? company?.owner?.surname,
    role: '' ?? company?.owner?.role
  };

  const onSubmit = () => {
    //
  };

  return (
    <>
      <Head
        title={company?.fantasyName as string}
        description='Bem-vindo(a) à página de informações da empresa! Aqui, você pode inserir as informações da sua empresa em nosso sistema, incluindo informações de contato, endereço, descrição do negócio e outras informações. Além disso, nossa plataforma segura garante que todas as informações inseridas sejam mantidas confidenciais e protegidas. Adicionar informações da empresa nunca foi tão fácil e seguro! Experimente agora e torne sua gestão de negócios mais eficiente.'
      />
      <MaxWidthContainer>
        <Formik
          innerRef={(ref) => formikRef.current = ref}
          initialValues={companyDataInitialValues}
          validationSchema={companyDataSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <StyledFormContainer>
              <StyledLabel>Informações gerais:</StyledLabel>
              <TextField
                type="text"
                dataTestId="fantasy-name"
                name="fantasyName"
                label="Nome fantasia"
                fullWidth
                disabled
              />
              <TextField
                type="tel" // Numeric keyboard without parsing to number
                dataTestId="cnpj"
                name="cnpj"
                label="CNPJ"
                value={formatCNPJ(String(values.cnpj))}
                fullWidth
                disabled
              />
              <TextField
                type="email"
                dataTestId="email"
                name="email"
                label="E-mail"
                fullWidth
              />
              <AddressFields
                formikRef={formikRef}
                setFieldValue={setFieldValue}
              />
              <StyledLabel>Responsável:</StyledLabel>
              <HalfToHalContainer>
                <TextField
                  type="text"
                  dataTestId="first-name"
                  name="firstName"
                  label="Nome"
                  fullWidth
                />
                <TextField
                  type="text"
                  dataTestId="surname"
                  name="surname"
                  label="Sobrenome"
                  fullWidth
                />
              </HalfToHalContainer>
              <TextField
                type="text"
                dataTestId="role"
                name="role"
                label="Cargo/função"
                fullWidth
              />
              <SubmitButtonContainer>
                <StyledButton
                  $primary
                  type="submit"
                >
                  Atualizar dados
                </StyledButton>
              </SubmitButtonContainer>
            </StyledFormContainer>
          )}
        </Formik>
      </MaxWidthContainer>
    </>
  );
};

CompanyData.getLayout = (page: ReactElement) => (
  <ContentWithDrawer>
    {page}
  </ContentWithDrawer>
);

export default CompanyData;
