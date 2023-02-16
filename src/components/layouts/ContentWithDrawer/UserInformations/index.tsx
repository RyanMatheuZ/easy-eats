import type { FC } from 'react';

import {
  Container,
  PhotoContainer,
  Body,
  Name,
  Role,
  StyledUserIcon
} from './styles';

interface UserInformationsProps {
  name: string;
  role: string;
}

const UserInformations: FC<UserInformationsProps> = ({ name, role }) => {
  return (
    <Container>
      <PhotoContainer title={`${name} - ${role}`}>
        <StyledUserIcon />
      </PhotoContainer>
      <Body>
        <Name>
          {name}
        </Name>
        <Role>
          {role}
        </Role>
      </Body>
    </Container>
  );
};

export default UserInformations;
