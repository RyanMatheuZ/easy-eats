import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';

import { Button, Divider } from '@mui/material';

import UserInformations from './UserInformations';
import ListItems from './ListItems';

import {
  StyledDrawer,
  StyledDrawerHeader,
  ToggleButtonDrawer,
  Container,
  Content
} from './styles';

const ContentWithDrawer: FC<PropsWithChildren> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <Container>
        <StyledDrawer
          variant='permanent'
          open={isDrawerOpen}
        >
          <StyledDrawerHeader>
            <UserInformations
              name='Ryan Oliveira'
              role='Sócio'
            />
            <Button onClick={handleToggleDrawer}>
              <ToggleButtonDrawer isDrawerOpen={isDrawerOpen} />
            </Button>
          </StyledDrawerHeader>
          <Divider />
          <ListItems />
        </StyledDrawer>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  );
};

export default ContentWithDrawer;
