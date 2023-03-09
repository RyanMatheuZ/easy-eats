import { useRef } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import type { FormikProps } from 'formik';
import { Formik } from 'formik';

import type { IEmployee, IEmployeeForm } from '@ts/interfaces';

import { TextField, StyledLabel, StyledButton } from '@components/elements';
import {
  AddressFields,
  HalfToHalContainer,
  HeaderWithBackButton,
  MaxWidthContainer,
  SubmitButtonContainer
} from '@components/modules';

import { useEmployee } from '@hooks/index';

import { formatCEP } from '@utils/inputs/cep';
import { formatCellPhone } from '@utils/inputs/cellPhone';
import { formatCPF } from '@utils/inputs/cpf';

import { StyledFormContainer } from './styles';

const EmployeeInfo: NextPage = () => {
  const { query } = useRouter();

  const { id } = query;

  const formikRef = useRef<FormikProps<Omit<IEmployeeForm, 'password' | 'confirmPassword'>> | null>();

  const { handleGetEmployeeById } = useEmployee();

  const { data, isLoading, isFetched } = handleGetEmployeeById(String(id));

  const employee = data?.employee as IEmployee;

  const employeeInitialValues: Omit<IEmployeeForm, 'password' | 'confirmPassword'> = {
    firstName: employee?.firstName || '',
    surname: employee?.surname || '',
    socialName: employee?.socialName || '',
    cpf: formatCPF(String(employee?.cpf)) || '',
    role: employee?.role || '',
    email: employee?.email || '',
    cellPhone: formatCellPhone(String(employee?.cellPhone)) || '',
    zipCode: formatCEP(String(employee?.address.cep)) || '',
    address: employee?.address.logradouro || '',
    district: employee?.address.bairro || '',
    locationNumber: employee?.address.numeroDoLocal || '',
    city: employee?.address.localidade || '',
    state: employee?.address.uf || '',
    dateOfBirth: employee?.dateOfBirth || new Date(),
  };

  return (
    <>
      <HeaderWithBackButton
        text='Voltar ao início?'
        routeToRedirect='/admin'
        $primary
      />
      <MaxWidthContainer>
        {(!isLoading && isFetched) && (
          <Formik
            innerRef={(ref) => formikRef.current = ref}
            initialValues={employeeInitialValues}
            onSubmit={() => alert('')}
          >
            {({ values, setFieldValue }) => (
              <StyledFormContainer>
                <StyledLabel>Informações gerais:</StyledLabel>
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
                <AddressFields
                  formikRef={formikRef}
                  setFieldValue={setFieldValue}
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
        )}
      </MaxWidthContainer>
    </>
  );
};

export default EmployeeInfo;
