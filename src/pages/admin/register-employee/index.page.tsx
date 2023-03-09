import type { ReactElement } from 'react';
import { useRef } from 'react';

import type { FormikProps } from 'formik';
import { Formik } from 'formik';

import type { TNextPageWithLayout } from '@ts/types';
import type { IEmployeeForm } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { useEmployee } from '@hooks/index';

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
import { formatCellPhone } from '@utils/inputs/cellPhone';
import { unformat } from '@utils/inputs/unformat';

import { head, employeeInitialValues, registerEmployeeSchema } from './utils';

const RegisterEmployee: TNextPageWithLayout = () => {
  const { description } = head;

  const formikRef = useRef<FormikProps<IEmployeeForm> | null>();

  const { company } = useAuth();

  const { handleRegisterEmployee } = useEmployee();

  const onSubmit = (employeeValues: IEmployeeForm) => {
    const defaultPassword = '12345678';

    handleRegisterEmployee({
      ...employeeValues,
      cpf: unformat(employeeValues.cpf),
      cellPhone: unformat(employeeValues.cellPhone),
      zipCode: unformat(String(employeeValues?.zipCode)),
      responsibleCnpj: unformat(String(company?.cnpj)),
      password: defaultPassword,
      confirmPassword: defaultPassword
    });
  };

  return (
    <>
      <Head title={company?.fantasyName as string} description={description} />
      <MaxWidthContainer>
        <Formik
          innerRef={(ref) => formikRef.current = ref}
          initialValues={employeeInitialValues}
          validationSchema={registerEmployeeSchema}
          onSubmit={onSubmit}
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
