import { useRef } from 'react';

import { type NextPage } from 'next';
import { useRouter } from 'next/router';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import { Formik, type FormikProps } from 'formik';

import { TextField, StyledLabel, StyledButton } from '@components/elements';
import {
  AddressFields,
  HalfToHalContainer,
  HeaderWithBackButton,
  MaxWidthContainer,
  SubmitButtonContainer
} from '@components/modules';

import { useEmployee } from '@hooks/index';

import { formatCellPhone } from '@utils/inputs/cellPhone';
import { formatCPF } from '@utils/inputs/cpf';

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
        socialName: employeeValues.socialName,
        cpf: employeeValues.cpf,
        role: employeeValues.role,
        email: employeeValues.email,
        cellPhone: employeeValues.cellPhone,
        dateOfBirth: new Date(),
        admissionDate: new Date()
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
        queryClient.invalidateQueries(['all-employees']);
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
                  handleChange={handleChange}
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
