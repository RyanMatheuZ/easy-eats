import { useRef, type ReactElement } from 'react';

import { Formik, type FormikProps } from 'formik';

import type { TNextPageWithLayout } from '@ts/types';

import { useAuth } from '@context/auth';

import { useCompany } from '@hooks/index';

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

import { formatCPF } from '@utils/inputs/cpf';
import { formatCNPJ } from '@utils/inputs/cnpj';

import { head, companyDataSchema, getFormInitialValues, type CompanyFormValues } from './utils';

const CompanyData: TNextPageWithLayout = () => {
  const { description } = head;

  const formikRef = useRef<FormikProps<CompanyFormValues> | null>();

  const { company } = useAuth();

  const { handleUpdateCompanyById } = useCompany();

  const companyDataInitialValues = getFormInitialValues(company);

  const onSubmit = (companyValues: CompanyFormValues) => {
    handleUpdateCompanyById(String(company?._id), {
      info: {
        cnpj: companyValues.cnpj,
        fantasyName: companyValues.fantasyName,
        companyName: companyValues.companyName,
        email: companyValues.email
      },
      address: {
        zipCode: companyValues.zipCode,
        address: companyValues.address,
        district: companyValues.district,
        locationNumber: companyValues.locationNumber,
        city: companyValues.city,
        state: companyValues.state
      },
      owner: {
        firstName: companyValues.firstName,
        surname: companyValues.surname,
        cpf: companyValues.cpf,
        role: companyValues.role
      }
    });
  };

  return (
    <>
      <Head title={company?.info?.fantasyName as string} description={description} />
      <MaxWidthContainer>
        <Formik
          innerRef={(ref) => formikRef.current = ref}
          initialValues={companyDataInitialValues}
          validationSchema={companyDataSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, handleChange }) => (
            <StyledFormContainer>
              <StyledLabel>Informações gerais:</StyledLabel>
              <TextField
                type="text"
                dataTestId="fantasy-name"
                name="fantasyName"
                label="Nome fantasia"
                fullWidth
              />
              <TextField
                type="text"
                dataTestId="company-name"
                name="companyName"
                label="Nome da empresa"
                fullWidth
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
                handleChange={handleChange}
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
                dataTestId="cpf"
                name="cpf"
                label="CPF"
                value={formatCPF(String(values.cpf))}
                fullWidth
              />
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
