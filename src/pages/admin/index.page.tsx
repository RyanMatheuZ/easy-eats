import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';

import type { TNextPageWithLayout } from '@ts/types';

import { useAuth } from '@context/auth';

import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import { StepperCard } from '@components/modules';
import { FlowFinanceMan } from '@components/svgs';

import { randomMessage } from '@utils/random';

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  SeeMoreButton,
} from './styles';

const Admin: TNextPageWithLayout = () => {
  const { company } = useAuth();

  const [message, setMessage] = useState('');

  const ownerFirstName = !!company?.owner?.firstName && `, ${company?.owner?.firstName}`;

  // https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setMessage(randomMessage());
  }, []);

  return (
    <>
      <Head
        title={company?.fantasyName as string}
        description='Aqui você pode gerenciar sua empresa, colaboradores e muito mais...'
      />
      <Container>
        <Card>
          <CardBody>
            <CardTitle>
              Bem-vindo(a){ownerFirstName}!
            </CardTitle>
            <CardText>
              {message}
            </CardText>
            <SeeMoreButton>
              Ver mais
            </SeeMoreButton>
          </CardBody>
          <FlowFinanceMan />
        </Card>
        <StepperCard />
      </Container>
    </>
  );
};

Admin.getLayout = (page: ReactElement) => (
  <ContentWithDrawer>
    {page}
  </ContentWithDrawer>
);

export default Admin;
