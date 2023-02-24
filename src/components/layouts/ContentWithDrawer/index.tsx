import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';

import { Button, Divider } from '@mui/material';

import { useAuth } from '@context/auth';

import UserInformations from './UserInformations';
import ListItems from './ListItems';

import {
  Container,
  Content,
  StyledDrawer,
  StyledDrawerHeader,
  ToggleButtonDrawer,
} from './styles';

const ContentWithDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { company } = useAuth();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const companyOwnerName = `${company?.owner?.firstName} ${company?.owner?.surname}`;
  const companyOwnerRole = company?.owner?.role as string;

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
              name={companyOwnerName}
              role={companyOwnerRole}
            />
            <Button onClick={handleToggleDrawer}>
              <ToggleButtonDrawer $isDrawerOpen={isDrawerOpen} />
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
