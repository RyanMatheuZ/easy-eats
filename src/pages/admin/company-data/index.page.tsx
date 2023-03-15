import { useRef, type ReactElement } from 'react';

import { Formik, type FormikProps } from 'formik';

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

import { head, companyDataSchema, type CompanyFormValues } from './utils';

const CompanyData: TNextPageWithLayout = () => {
  const { description } = head;

  const formikRef = useRef<FormikProps<CompanyFormValues> | null>();

  const { company } = useAuth();

  const companyDataInitialValues: CompanyFormValues = {
    fantasyName: company?.info?.fantasyName || '',
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
    role: company?.owner?.role || ''
  };

  const onSubmit = () => {
    //
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
