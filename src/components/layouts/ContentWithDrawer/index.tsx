import { useState, type FC, type PropsWithChildren } from 'react';

import { Button, Divider } from '@mui/material';

import { useAuth } from '@context/auth';

import CompanyInformations from './CompanyInformations';
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

  const fantasyName = String(company?.info?.fantasyName);
  const hasOwnerCompletedName = !!company?.owner?.firstName && !!company?.owner?.surname;
  const ownerCompletedName = hasOwnerCompletedName ? `${company?.owner?.firstName} ${company?.owner?.surname}` : '';

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
            <CompanyInformations
              fantasyName={fantasyName}
              ownerCompletedName={ownerCompletedName}
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
