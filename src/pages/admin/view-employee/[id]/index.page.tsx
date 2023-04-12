import { useRef } from 'react';

import { type NextPage } from 'next';
import { useRouter } from 'next/router';

import { MenuItem } from '@mui/material';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import { Formik, type FormikProps } from 'formik';

import {
  DateField,
  TextField,
  SelectField,
  SubmitButton,
  StyledAdornment,
  StyledLabel
} from '@components/elements';
import {
  AddressFields,
  HalfToHalfContainer,
  HeaderWithBackButton,
  MaxWidthContainer,
  ThreeThirdContainer
} from '@components/modules';

import { useEmployee } from '@hooks/index';

import { formatCellPhone } from '@utils/inputs/cellPhone';
import { formatCPF } from '@utils/inputs/cpf';
import { formatMoney } from '@utils/inputs/money';
import { genders } from '@utils/datas/genders';

import FormLoadingSkeleton from './FormLoadingSkeleton';

import { viewEmployeeSchema, getFormInitialValues, type ViewEmployeeFormValues } from './utils';

import { StyledFormContainer } from './styles';

const EmployeeInfo: NextPage = () => {
  const { query } = useRouter();

  const { id } = query;

  const formikRef = useRef<FormikProps<ViewEmployeeFormValues> | null>();

  const queryClient = useQueryClient();

  const { handleUpdateEmployeeById, handleGetEmployeeById } = useEmployee();

  const { data, isLoading, isFetched } = handleGetEmployeeById(String(id));

  const isLoadedAndFetched = !isLoading && isFetched;

  const employee = data?.employee;

  const employeeInitialValues = getFormInitialValues(employee);

  const { mutate } = useMutation(
    (employeeValues: ViewEmployeeFormValues) => handleUpdateEmployeeById(String(employee?._id), {
      info: {
        firstName: employeeValues.firstName,
        surname: employeeValues.surname,
        gender: employeeValues.gender,
        socialName: employeeValues.socialName,
        cpf: employeeValues.cpf,
        dateOfBirth: employeeValues.dateOfBirth,
        admissionDate: employeeValues.admissionDate,
        resignationDate: employeeValues.resignationDate,
        role: employeeValues.role,
        salary: formatMoney(employeeValues.salary).numericValue,
        email: employeeValues.email,
        cellPhone: employeeValues.cellPhone
      },
      address: {
        zipCode: employeeValues.zipCode,
        address: employeeValues.address,
        district: employeeValues.district,
        locationNumber: employeeValues.locationNumber,
        city: employeeValues.city,
        state: employeeValues.state
      }
    }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      }
    }
  );

  const onSubmit = (employeeValues: ViewEmployeeFormValues) => {
    mutate(employeeValues);
  };

  return (
    <>
      <HeaderWithBackButton
        text='Voltar ao início?'
        routeToRedirect='/admin'
        $primary
      />
      <MaxWidthContainer>
        {!isLoadedAndFetched && (
          <FormLoadingSkeleton />
        )}
        {isLoadedAndFetched && (
          <Formik
            innerRef={(ref) => formikRef.current = ref}
            initialValues={employeeInitialValues}
            validationSchema={viewEmployeeSchema}
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
                <ThreeThirdContainer>
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
                  <DateField
                    dataTestId="resignation-date"
                    name="resignationDate"
                    label="Data de demissão"
                    fullWidth
                  />
                </ThreeThirdContainer>
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
                  title="Atualizar dados"
                  $primary
                />
              </StyledFormContainer>
            )}
          </Formik>
        )}
      </MaxWidthContainer>
    </>
  );
};

export default EmployeeInfo;
