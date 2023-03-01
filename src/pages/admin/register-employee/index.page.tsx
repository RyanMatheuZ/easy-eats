import type { ChangeEvent, ReactElement } from 'react';

import { Formik } from 'formik';

import { MenuItem } from '@mui/material';

import type { TNextPageWithLayout } from '@ts/types';
import type { IRegisterEmployee } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { useAddress, useEmployee } from '@hooks/index';

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
import { formatCPF } from '@utils/inputs/cpf';
import { formatCellPhone } from '@utils/inputs/cellPhone';
import { unformat } from '@utils/inputs/unformat';
import { states } from '@utils/states';

import { employeeInitialValues, registerEmployeeSchema } from './utils';

const RegisterEmployee: TNextPageWithLayout = () => {
  const { company } = useAuth();

  const { handleGetAdress } = useAddress();
  const { handleRegisterEmployee } = useEmployee();

  const onSubmit = (employeeValues: IRegisterEmployee) => {
    handleRegisterEmployee({
      ...employeeValues,
      cpf: unformat(employeeValues.cpf),
      cellPhone: employeeValues.cellPhone,
      zipCode: unformat(employeeValues.zipCode),
      responsibleCnpj: company?.cnpj as string
    });
  };

  return (
    <>
      <Head
        title={company?.fantasyName as string}
        description='Bem-vindo(a) à página de cadastro de colaboradores! Aqui, você pode adicionar novos membros da equipe ao seu sistema com apenas alguns cliques. Você pode inserir facilmente informações de contato e outras informações relevantes. Além disso, nossa plataforma segura garante que todas as informações inseridas sejam mantidas confidenciais e protegidas. Torne sua gestão de equipe mais eficiente.'
      />
      <MaxWidthContainer>
        <Formik
          initialValues={employeeInitialValues}
          validationSchema={registerEmployeeSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <StyledFormContainer>
              <StyledLabel>Informações gerais:</StyledLabel>
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
                dataTestId="social-name"
                name="socialName"
                label="Nome social"
                fullWidth
              />
              <TextField
                type="tel" // Numeric keyboard without parsing to number
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
              <StyledLabel>Contatos:</StyledLabel>
              <TextField
                type="text"
                dataTestId="email"
                name="email"
                label="E-mail"
                fullWidth
              />
              <TextField
                type="text"
                dataTestId="cell-phone"
                name="cellPhone"
                label="Celular"
                value={formatCellPhone(String(values.cellPhone))}
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
              <SubmitButtonContainer>
                <StyledButton
                  $primary
                  type="submit"
                >
                  Salvar dados
                </StyledButton>
              </SubmitButtonContainer>
            </StyledFormContainer>
          )}
        </Formik>
      </MaxWidthContainer>
    </>
  );
};

RegisterEmployee.getLayout = (page: ReactElement) => (
  <ContentWithDrawer>
    {page}
  </ContentWithDrawer>
);

export default RegisterEmployee;
