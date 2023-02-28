import type { ReactElement } from 'react';

import { Formik } from 'formik';

import type { TNextPageWithLayout } from '@ts/types';

import { TextField, StyledLabel } from '@components/elements';
import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import { MaxWidthContainer } from '@components/modules';

import { employeeInitialValues, createEmployeeSchema } from './utils';

import { StyledForm, FirstNameAndSurnameContainer } from './styles';

const CreateEmployee: TNextPageWithLayout = () => {
  const onSubmit = () => {
    //
  };

  return (
    <>
      <Head
        title=''
        description=''
      />
      <MaxWidthContainer>
        <Formik
          initialValues={employeeInitialValues}
          validationSchema={createEmployeeSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <StyledForm>
              <StyledLabel>Informações gerais:</StyledLabel>
              <FirstNameAndSurnameContainer>
                <TextField
                  type="text"
                  dataTestId="first-name"
                  name="first-name"
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
                dataTestId="socialName"
                name="socialName"
                label="Nome social"
                fullWidth
              />
              <TextField
                type="text"
                dataTestId="cpf"
                name="cpf"
                label="CPF"
                fullWidth
              />
            </StyledForm>
          )}
        </Formik>
      </MaxWidthContainer>
    </>
  );
};

CreateEmployee.getLayout = (page: ReactElement) => (
  <ContentWithDrawer>
    {page}
  </ContentWithDrawer>
);

export default CreateEmployee;
