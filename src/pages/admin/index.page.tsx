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
        description='Bem-vindo(a) à página de administração do sistema! Você pode gerenciar todas as informações relevantes da sua equipe e empresa em um só lugar. Além disso, nossa plataforma oferece uma variedade de recursos e ferramentas úteis para ajudá-lo a gerenciar de forma eficiente sua equipe e negócio. A segurança dos seus dados é nossa prioridade, por isso nossa plataforma garante que todas as informações inseridas sejam mantidas confidenciais e seguras. Experimente agora e descubra como podemos ajudá-lo a melhorar a eficiência e produtividade da sua empresa!'
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
