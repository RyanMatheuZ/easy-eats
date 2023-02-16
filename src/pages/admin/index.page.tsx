import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';

import { TNextPageWithLayout } from '@ts/types';

import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';

import { randomMessage } from '@utils/random';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  SeeMoreButton,
  StyledFlowFinanceMan
} from './styles';

const Admin: TNextPageWithLayout = () => {
  const companyName = 'Empresinha';
  const [message, setMessage] = useState('');

  // Rehydration was necessary
  // https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setMessage(randomMessage());
  }, []);

  return (
    <>
      <Head
        title={`${companyName} | EasyEats`}
        description='Aqui você pode gerenciar sua empresa, colaboradores e muito mais...'
      />
      <Card>
        <CardBody>
          <CardTitle>
            Bem-vindo(a), Ryan!
          </CardTitle>
          <CardText>
            {message}
          </CardText>
          <SeeMoreButton>
            Ver mais
          </SeeMoreButton>
        </CardBody>
        <StyledFlowFinanceMan />
      </Card>
    </>
  );
};

Admin.getLayout = (page: ReactElement) => {
  return (
    <ContentWithDrawer>
      {page}
    </ContentWithDrawer>
  );
};

export default Admin;
