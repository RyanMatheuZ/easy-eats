import type { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@context/auth';

import { basePath, ListItems } from '../utils';

import {
  ListItemsContainer,
  StyledList,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  StyledListSubheader,
  SignOutButton,
  SignOutIconContainer,
  SignOutText,
  SignOutIcon,
  HomeIcon,
  CompanyDataIcon,
  CreateEmployessIcon,
  ViewEmployessIcon
} from '../styles';

const ListItems: FC = () => {
  const { asPath } = useRouter();

  const { handleSignOut } = useAuth();

  const listItems: ListItems[] = [
    {
      subHeader: 'Empresa',
      items: [
        {
          icon: <CompanyDataIcon />,
          label: 'Dados',
          path: `${basePath}/data`
        }
      ]
    },
    {
      subHeader: 'Colaboradores',
      items: [
        {
          icon: <CreateEmployessIcon />,
          label: 'Criação',
          path: `${basePath}/create-employee`
        },
        {
          icon: <ViewEmployessIcon />,
          label: 'Visualização',
          path: `${basePath}/view-employee`
        }
      ]
    }
  ];

  return (
    <>
      <ListItemsContainer>
        <StyledList>
          <Link href={basePath}>
            <StyledListItemButton $isCurrentPath={asPath === basePath}>
              <StyledListItemIcon $isCurrentPath={asPath === basePath}>
                <HomeIcon />
              </StyledListItemIcon>
              <StyledListItemText $isCurrentPath={asPath === basePath}>
                Início
              </StyledListItemText>
            </StyledListItemButton>
          </Link>
        </StyledList>
        {listItems.map(({ subHeader, items }, index) => (
          <StyledList
            key={index}
            subheader={
              <StyledListSubheader>
                {subHeader}
              </StyledListSubheader>
            }>
            {items.map(({ icon, label, path }, index) => (
              <Link
                key={index}
                href={path}
              >
                <StyledListItemButton $isCurrentPath={asPath === path}>
                  <StyledListItemIcon $isCurrentPath={asPath === path}>
                    {icon}
                  </StyledListItemIcon>
                  <StyledListItemText $isCurrentPath={asPath === path}>
                    {label}
                  </StyledListItemText>
                </StyledListItemButton>
              </Link>
            ))}
          </StyledList>
        ))}
      </ListItemsContainer>
      <SignOutButton onClick={handleSignOut}>
        <SignOutIconContainer>
          <SignOutIcon />
        </SignOutIconContainer>
        <SignOutText >
          Sair
        </SignOutText>
      </SignOutButton>
    </>
  );
};

export default ListItems;
