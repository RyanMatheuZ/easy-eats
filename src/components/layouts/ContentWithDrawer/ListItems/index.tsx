import type { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { basePath, listItems } from '../utils';

import {
  StyledList,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  StyledListSubheader,
  HomeIcon
} from '../styles';

const ListItems: FC = () => {
  const router = useRouter();

  return (
    <>
      <StyledList>
        <Link href={basePath}>
          <StyledListItemButton isCurrentPath={router.asPath === basePath}>
            <StyledListItemIcon isCurrentPath={router.asPath === basePath}>
              <HomeIcon />
            </StyledListItemIcon>
            <StyledListItemText isCurrentPath={router.asPath === basePath}>
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
              <StyledListItemButton isCurrentPath={router.asPath === path}>
                <StyledListItemIcon isCurrentPath={router.asPath === path}>
                  {icon}
                </StyledListItemIcon>
                <StyledListItemText isCurrentPath={router.asPath === path}>
                  {label}
                </StyledListItemText>
              </StyledListItemButton>
            </Link>
          ))}
        </StyledList>
      ))}
    </>
  );
};

export default ListItems;
