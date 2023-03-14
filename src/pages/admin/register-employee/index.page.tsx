import { useRef, type ReactElement } from 'react';

import { Formik, type FormikProps } from 'formik';

import type { TNextPageWithLayout } from '@ts/types';

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

import { head, employeeInitialValues, registerEmployeeSchema, type EmployeeFormValues } from './utils';

const RegisterEmployee: TNextPageWithLayout = () => {
  const { description } = head;

  const formikRef = useRef<FormikProps<EmployeeFormValues> | null>();

  const { company } = useAuth();

  const { handleRegisterEmployee } = useEmployee();

  const onSubmit = (employeeValues: EmployeeFormValues) => {
    const defaultPassword = '12345678';

    handleRegisterEmployee({
      info: {
        firstName: employeeValues.firstName,
        surname: employeeValues.surname,
        socialName: employeeValues.socialName,
        cpf: unformat(employeeValues.cpf),
        role: employeeValues.role,
        email: employeeValues.email,
        cellPhone: employeeValues.cellPhone,
        dateOfBirth: employeeValues.dateOfBirth,
        admissionDate: new Date()
      },
      address: {
        zipCode: employeeValues.zipCode,
        address: employeeValues.address,
        district: employeeValues.district,
        locationNumber: employeeValues.locationNumber,
        city: employeeValues.city,
        state: employeeValues.state
      },
      company: {
        cnpj: unformat(String(company?.info?.cnpj))
      },
      security: {
        password: defaultPassword,
        confirmPassword: defaultPassword
      }
    });
  };

  return (
    <>
      <Head title={company?.info?.fantasyName as string} description={description} />
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
