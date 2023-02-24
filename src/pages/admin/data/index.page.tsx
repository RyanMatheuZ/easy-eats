import type { ChangeEvent, ReactElement } from 'react';

import { Formik } from 'formik';

import { MenuItem } from '@mui/material';

import type { TNextPageWithLayout } from '@ts/types';
import type { ICompany } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { useAddress } from '@hooks/index';

import { StyledButton } from '@components/elements';
import { TextField, SelectField } from '@components/elements';
import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import { MaxWidthContainer } from '@components/modules';

import { formatCEP } from '@utils/inputs/cep';
import { formatCNPJ } from '@utils/inputs/cnpj';

import { adminDataSchema, states } from './utils';

import {
  StyledForm,
  StyledLabel,
  CityAndStateContainer,
  FirstNameAndSurnameContainer,
  SubmitButtonContainer
} from './styles';

const AdminData: TNextPageWithLayout = () => {
  const { company } = useAuth();

  const { address, isLoadingAddress, getAdress } = useAddress();

  const adminDataInitialValues = {
    fantasyName: '' || company?.fantasyName,
    cnpj: '' || company?.cnpj,
    email: '' || company?.email,
    zipCode: '' || company?.address?.cep,
    publicPlace: '' || company?.address?.logradouro,
    district: '' || company?.address?.bairro,
    city: '' || company?.address?.localidade,
    state: '' || company?.address?.uf
  };

  const onSubmit = (companyUpdateData: Pick<ICompany, 'fantasyName' | 'cnpj' | 'email' | 'address'>) => {
    //
  };

  return (
    <>
      <Head
        title={company?.fantasyName as string}
        description=''
      />
      <MaxWidthContainer>
        <Formik
          initialValues={adminDataInitialValues}
          validationSchema={adminDataSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <StyledForm noValidate>
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
                dataTestId="zipCode"
                name="zipCode"
                label="CEP"
                fullWidth
                onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                  setFieldValue('zipCode', formatCEP(e.target.value));
                  getAdress(e.target.value);
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
                  dataTestId="firstNameOwner"
                  name="firstNameOwner"
                  label="Nome"
                  fullWidth
                />
                <TextField
                  type="text"
                  dataTestId="surnameOwner"
                  name="surnameOwner"
                  label="Sobrenome"
                  fullWidth
                />
              </FirstNameAndSurnameContainer>
              <TextField
                type="text"
                dataTestId="roleOwner"
                name="roleOwner"
                label="Cargo"
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
            </StyledForm>
          )}
        </Formik>
      </MaxWidthContainer>
    </>
  );
};

AdminData.getLayout = (page: ReactElement) => (
  <ContentWithDrawer>
    {page}
  </ContentWithDrawer>
);

export default AdminData;
