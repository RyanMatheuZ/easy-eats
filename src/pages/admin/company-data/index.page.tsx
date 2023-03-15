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

import { head, companyDataSchema, type CompanyFormValues } from './utils';

const CompanyData: TNextPageWithLayout = () => {
  const { description } = head;

  const formikRef = useRef<FormikProps<CompanyFormValues> | null>();

  const { company } = useAuth();

  const { handleUpdateCompanyById } = useCompany();

  const companyDataInitialValues: CompanyFormValues = {
    fantasyName: company?.info?.fantasyName || '',
    companyName: company?.info?.companyName || '',
    cnpj: company?.info?.cnpj || '',
    email: company?.info?.email || '',
    zipCode: company?.address?.zipCode || '',
    address: company?.address?.address || '',
    district: company?.address?.district || '',
    locationNumber: company?.address?.locationNumber || '',
    city: company?.address?.city || '',
    state: company?.address?.state || '',
    firstName: company?.owner?.firstName || '',
    surname: company?.owner?.surname || '',
    cpf: company?.owner?.cpf || '',
    role: company?.owner?.role || ''
  };

  const onSubmit = (companyValues: CompanyFormValues) => {
    handleUpdateCompanyById(String(company?._id), {
      info: {
        cnpj: companyValues.cnpj,
        fantasyName: companyValues.fantasyName,
        companyName: companyValues.companyName,
        email: companyValues.email
      },
      address: {
        zipCode: companyValues.zipCode as string,
        address: companyValues.address as string,
        district: companyValues.district as string,
        locationNumber: companyValues.locationNumber as string,
        city: companyValues.city as string,
        state: companyValues.state as string
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
