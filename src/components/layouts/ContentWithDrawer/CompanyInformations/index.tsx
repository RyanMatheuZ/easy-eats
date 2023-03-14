import { type FC } from 'react';

import {
  Container,
  PhotoContainer,
  Body,
  FantasyName,
  OwnerCompletedName,
  StyledUserIcon
} from './styles';

interface CompanyInformationsProps {
  fantasyName: string;
  ownerCompletedName: string;
}

const CompanyInformations: FC<CompanyInformationsProps> = ({ fantasyName, ownerCompletedName }) => {
  return (
    <Container>
      <PhotoContainer title={`${fantasyName} - ${ownerCompletedName}`}>
        <StyledUserIcon />
      </PhotoContainer>
      <Body>
        <FantasyName>
          {fantasyName}
        </FantasyName>
        <OwnerCompletedName>
          {ownerCompletedName}
        </OwnerCompletedName>
      </Body>
    </Container>
  );
};

export default CompanyInformations;
