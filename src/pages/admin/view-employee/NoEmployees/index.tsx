import { type FC } from 'react';

import Link from 'next/link';

import { EmployeeBadge } from '@components/svgs';

import {
  Container,
  ImageContainer,
  Text
} from './styles';

const NoEmployees: FC = () => {
  return (
    <Container>
      <ImageContainer>
        <EmployeeBadge />
      </ImageContainer>
      <Text>
        Ops... Parece que não há nenhum(a) colaborador(a) <br /> cadastrado(a) ainda!
      </Text>
      <Link
        href="/admin/register-employee"
        legacyBehavior
        passHref
      >
        <a>Deseja cadastrar?</a>
      </Link>
    </Container>
  );
};

export default NoEmployees;
