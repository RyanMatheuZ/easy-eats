import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';

import type { TNextPageWithLayout } from '@ts/types';

import { useAuth } from '@context/auth';

import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import { StepperCard } from '@components/modules';
import { FlowFinanceMan } from '@components/svgs';

import { messages } from '@utils/datas/messages';

import { randomNumber, randomMessage } from '@utils/random';

import { head } from './utils';

import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  SeeMoreButton,
} from './styles';

const Admin: TNextPageWithLayout = () => {
  const { description } = head;

  const { company } = useAuth();

  const [message, setMessage] = useState('');

  const ownerFirstName = !!company?.owner?.firstName&& `, ${company.owner?.firstName}`;

  // https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    const number = randomNumber(messages.length);
    const message = randomMessage(number);
    setMessage(message);
  }, []);

  return (
    <>
      <Head title={company?.info?.fantasyName as string} description={description} />
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
