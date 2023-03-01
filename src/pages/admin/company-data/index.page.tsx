import type { ChangeEvent, ReactElement } from 'react';

import { Formik } from 'formik';

import { MenuItem } from '@mui/material';

import type { TNextPageWithLayout } from '@ts/types';

import { useAuth } from '@context/auth';

import { useAddress } from '@hooks/index';

import { TextField, SelectField, StyledLabel, StyledButton } from '@components/elements';
import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import {
  CityAndStateContainer,
  FirstNameAndSurnameContainer,
  MaxWidthContainer,
  StyledFormContainer,
  SubmitButtonContainer
} from '@components/modules';

import { formatCEP } from '@utils/inputs/cep';
import { formatCNPJ } from '@utils/inputs/cnpj';
import { states } from '@utils/states';

import { companyDataSchema } from './utils';

const CompanyData: TNextPageWithLayout = () => {
  const { company } = useAuth();

  const { handleGetAdress } = useAddress();

  const companyDataInitialValues = {
    fantasyName: '' || company?.fantasyName,
    cnpj: '' || company?.cnpj,
    email: '' || company?.email,
    zipCode: '' || company?.address?.cep,
    address: '' || company?.address?.logradouro,
    district: '' || company?.address?.bairro,
    city: '' || company?.address?.localidade,
    state: '' || company?.address?.uf,
    firstName: '' || company?.owner?.firstName,
    surname: '' || company?.owner?.surname,
    role: '' || company?.owner?.role
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
              <StyledLabel>Localização:</StyledLabel>
              <TextField
                type="tel" // Numeric keyboard without parsing to number
                dataTestId="zip-code"
                name="zipCode"
                label="CEP"
                fullWidth
                onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                  setFieldValue('zipCode', formatCEP(e.target.value));
                  handleGetAdress(e.target.value);
                }}
              />
              <TextField
                type="text"
                dataTestId="address"
                name="address"
                label="Endereço"
                fullWidth
              />
              <TextField
                type="text"
                dataTestId="district"
                name="district"
                label="Bairro"
                fullWidth
              />
              <CityAndStateContainer>
                <TextField
                  type="text"
                  dataTestId="city"
                  name="city"
                  label="Cidade"
                  fullWidth
                />
                <SelectField
                  dataTestId="state"
                  name="state"
                  label="Estado"
                  fullWidth
                >
                  {states.map((state, index) => (
                    <MenuItem
                      key={index}
                      value={state}
                    >
                      {state}
                    </MenuItem>
                  ))}
                </SelectField>
              </CityAndStateContainer>
              <StyledLabel>Responsável:</StyledLabel>
              <FirstNameAndSurnameContainer>
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
              </FirstNameAndSurnameContainer>
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
