import { useRef, type ReactElement } from 'react';

import { Formik, type FormikProps, type FormikHelpers } from 'formik';

import { MenuItem } from '@mui/material';

import type { TNextPageWithLayout } from '@ts/types';

import { useAuth } from '@context/auth';

import { useEmployee } from '@hooks/index';

import {
  DateField,
  TextField,
  SelectField,
  SubmitButton,
  StyledAdornment,
  StyledLabel
} from '@components/elements';
import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import {
  AddressFields,
  HalfToHalfContainer,
  MaxWidthContainer,
  StyledFormContainer
} from '@components/modules';

import { formatCPF } from '@utils/inputs/cpf';
import { formatCellPhone } from '@utils/inputs/cellPhone';
import { formatMoney } from '@utils/inputs/money';
import { unformat } from '@utils/inputs/unformat';
import { genders } from '@utils/datas/genders';

import { head, employeeInitialValues, registerEmployeeSchema, type EmployeeFormValues } from './utils';

const RegisterEmployee: TNextPageWithLayout = () => {
  const { description } = head;

  const formikRef = useRef<FormikProps<EmployeeFormValues> | null>();

  const { company } = useAuth();

  const { handleRegisterEmployee } = useEmployee();

  const onSubmit = (employeeValues: EmployeeFormValues, { resetForm }: FormikHelpers<EmployeeFormValues>) => {
    const defaultPassword = '12345678';

    handleRegisterEmployee({
      info: {
        firstName: employeeValues.firstName,
        surname: employeeValues.surname,
        gender: employeeValues.gender,
        socialName: employeeValues.socialName,
        cpf: unformat(employeeValues.cpf),
        role: employeeValues.role,
        email: employeeValues.email,
        cellPhone: employeeValues.cellPhone,
        dateOfBirth: employeeValues.dateOfBirth,
        admissionDate: employeeValues.admissionDate,
        salary: formatMoney(employeeValues.salary).numericValue
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
    })
      .then(() => resetForm());
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
          {({ values, setFieldValue, handleChange }) => (
            <StyledFormContainer>
              <StyledLabel>Informações gerais:</StyledLabel>
              <HalfToHalfContainer>
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
              </HalfToHalfContainer>
              <SelectField
                dataTestId="gender"
                name="gender"
                label="Gênero"
                fullWidth
                onChange={handleChange}
              >
                {genders.map((gender, index) => (
                  <MenuItem
                    key={`gender${index}`}
                    value={gender}
                  >
                    {gender}
                  </MenuItem>
                ))}
              </SelectField>
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
              <HalfToHalfContainer>
                <DateField
                  dataTestId="date-of-birth"
                  name="dateOfBirth"
                  label="Data de nascimento"
                  fullWidth
                />
                <DateField
                  dataTestId="admission-date"
                  name="admissionDate"
                  label="Data de admissão"
                  fullWidth
                />
              </HalfToHalfContainer>
              <TextField
                type="text"
                dataTestId="role"
                name="role"
                label="Cargo/função"
                fullWidth
              />
              <TextField
                type="tel" // Numeric keyboard without parsing to number
                dataTestId="salary"
                name="salary"
                label="Salário"
                value={formatMoney(values.salary).formattedTypingValue}
                fullWidth
                InputProps={{
                  startAdornment: <StyledAdornment position="start">R$</StyledAdornment>,
                }}
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
                handleChange={handleChange}
              />
              <SubmitButton
                title="Salvar dados"
                $primary
              />
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
