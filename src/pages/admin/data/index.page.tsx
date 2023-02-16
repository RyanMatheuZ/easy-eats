import type { ReactElement } from 'react';

import { Formik, Form } from 'formik';

import type { TNextPageWithLayout } from '@ts/types';

import { useAuth } from '@context/auth';

import { StyledButton } from '@components/elements';
import { FormikTextField } from '@components/elements';
import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import { MaxWidthContainer } from '@components/modules';

import { formatCNPJ } from '@utils/inputs';

import { adminDataSchema } from './utils';

import { SubmitButtonContainer } from './styles';

const AdminData: TNextPageWithLayout = () => {
  const { company } = useAuth();

  const adminDataInitialValues = {
    fantasyName: '' || company?.fantasyName,
    cnpj: '' || company?.cnpj,
    email: '' || company?.email
  };

  const onSubmit = () => {
    //
  };

  return (
    <>
      <Head
        title={`${company?.fantasyName} | EasyEats`}
        description=''
      />
      <MaxWidthContainer>
        <Formik
          initialValues={adminDataInitialValues}
          validationSchema={adminDataSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form noValidate>
              <FormikTextField
                type="text"
                dataTestId="fantasy-name"
                name="fantasyName"
                label="Nome fantasia"
                fullWidth
                disabled
              />
              <FormikTextField
                type="tel" // Numeric keyboard without parsing to number
                dataTestId="cnpj"
                name="cnpj"
                label="CNPJ"
                value={formatCNPJ(String(values?.cnpj))}
                fullWidth
                disabled
              />
              <FormikTextField
                type="email"
                dataTestId="email"
                name="email"
                label="E-mail"
                fullWidth
              />
              <SubmitButtonContainer>
                <StyledButton type="submit" $primary>
                  Atualizar dados
                </StyledButton>
              </SubmitButtonContainer>
            </Form>
          )}
        </Formik>
      </MaxWidthContainer>
    </>
  );
};

AdminData.getLayout = (page: ReactElement) => {
  return (
    <ContentWithDrawer>
      {page}
    </ContentWithDrawer>
  );
};

export default AdminData;
