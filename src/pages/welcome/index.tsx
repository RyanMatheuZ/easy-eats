import type { FC } from 'react';

import Head from '@components/meta/Head';

import BottomActions from './BottomActions';

import { Container } from './styles';

const Login: FC = () => {
  return (
    <>
      <Head
        title='Bem-vindo | EasyEats'
        description='O jeito mais fácil de pedir aquilo que te agrada!'
      />
      <Container>
        <BottomActions />
      </Container>
    </>
  );
};

export default Login;
