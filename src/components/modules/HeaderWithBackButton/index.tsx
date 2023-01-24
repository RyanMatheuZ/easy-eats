import { FC } from 'react';

import Link from 'next/link';

import { Typography } from '@mui/material';

import BackButton from '@components/elements/BackButton';

import { Container, Content } from './styles';

interface HeaderWithBackButtonProps {
  text?: string;
  routeToRedirect?: string;
}

const HeaderWithBackButton: FC<HeaderWithBackButtonProps> = ({ text, routeToRedirect }) => {
  return (
    <Container>
      <BackButton />
      <Content>
        {(text && !routeToRedirect) && (
          <Typography>
            {text}
          </Typography>
        )}
        {(text && routeToRedirect) && (
          <Link href={routeToRedirect}>
            {text}
          </Link>
        )}
      </Content>
    </Container>
  );
};

export default HeaderWithBackButton;
