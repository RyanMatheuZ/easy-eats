import { FC } from 'react';

import Link from 'next/link';

import { Typography } from '@mui/material';

import BackButton from '@components/elements/BackButton';

import { Container, Header, Content } from './styles';

interface HeaderWithBackButtonProps {
  text?: string;
  routeToRedirect?: string;
  $primary?: boolean;
}

const HeaderWithBackButton: FC<HeaderWithBackButtonProps> = ({ text, routeToRedirect, $primary }) => {
  return (
    <Container $primary={$primary}>
      <Header>
        <BackButton />
        <Content>
          {(text && !routeToRedirect) && (
            <Typography>
              {text}
            </Typography>
          )}
          {(text && routeToRedirect) && (
            <Link
              href={routeToRedirect}
              legacyBehavior
              passHref
            >
              <a>
                {text}
              </a>
            </Link>
          )}
        </Content>
      </Header>
    </Container>
  );
};

export default HeaderWithBackButton;
