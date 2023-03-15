import { useRef } from 'react';

import { type NextPage } from 'next';
import { useRouter } from 'next/router';

import { Formik, type FormikProps } from 'formik';

import type { IEmployee } from '@ts/interfaces';

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

import FormLoadingSkeleton from './FormLoadingSkeleton';

import { viewEmployeeSchema, type ViewEmployeeFormValues } from './utils';

import { StyledFormContainer } from './styles';

const EmployeeInfo: NextPage = () => {
  const { query } = useRouter();

  const { id } = query;

  const formikRef = useRef<FormikProps<ViewEmployeeFormValues> | null>();

  const { handleGetEmployeeById } = useEmployee();

  const { data, isLoading, isFetched } = handleGetEmployeeById(String(id));

  const employee = data?.employee as IEmployee;

  const employeeInitialValues: ViewEmployeeFormValues = {
    firstName: employee?.info.firstName || '',
    surname: employee?.info.surname || '',
    socialName: employee?.info.socialName || '',
    cpf: formatCPF(String(employee?.info.cpf)) || '',
    role: employee?.info.role || '',
    email: employee?.info.email || '',
    cellPhone: formatCellPhone(String(employee?.info.cellPhone)) || '',
    zipCode: formatCEP(String(employee?.address.zipCode)) || '',
    address: employee?.address.address || '',
    district: employee?.address.district || '',
    locationNumber: employee?.address.locationNumber || '',
    city: employee?.address.city || '',
    state: employee?.address.state || '',
    dateOfBirth: employee?.info.dateOfBirth || new Date(),
  };

  return (
    <>
      <HeaderWithBackButton
        text='Voltar ao início?'
        routeToRedirect='/admin'
        $primary
      />
      <MaxWidthContainer>
        {(isLoading && !isFetched) && (
          <FormLoadingSkeleton />
        )}
        {(!isLoading && isFetched) && (
          <Formik
            innerRef={(ref) => formikRef.current = ref}
            initialValues={employeeInitialValues}
            validationSchema={viewEmployeeSchema}
            onSubmit={() => alert('')}
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
