import styled, { css } from 'styled-components';

import {
  styled as MuiStyled,
  Drawer,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Home, FolderCopy, MeetingRoom, AddCircle, Visibility } from '@mui/icons-material';

import { StyledBackButton } from '@components/elements/BackButton/styles';

import { openedMixin, closedMixin } from './utils';

interface ToggleButtonDrawerProps {
  $isDrawerOpen: boolean;
}

interface ListButtonProps {
  $isCurrentPath?: boolean;
}

const drawerIconBaseStyled = css`
  height: 25px;
  width: 25px;
`;

const MuiDrawer = MuiStyled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    })
  })
);

export const Container = styled.div`
  display: flex;
`;

export const ListItemsContainer = styled.div`
  flex: 1;
`;

export const Content = styled.section`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const StyledDrawer = styled(MuiDrawer)`
  @media ${({ theme }) => theme.breakpoints.down('laptop')} {
    display: none;
  }
`;

export const StyledDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ToggleButtonDrawer = styled(StyledBackButton) <ToggleButtonDrawerProps>`
  fill: ${({ theme }) => theme.palette.primary.main};
  transform: ${({ $isDrawerOpen }) => $isDrawerOpen ? 'rotate(360deg)' : 'rotate(180deg)'};
  transition: transform 500ms ease-in-out;
`;

export const StyledList = styled(List)`
  padding-block: 0;
`;

export const StyledListSubheader = styled(ListSubheader)`
  font-size: 1.1rem;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledListItemButton = styled(ListItemButton) <ListButtonProps>`
  background-color: ${({ theme, $isCurrentPath }) => $isCurrentPath && theme.palette.primary.main};
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  margin: ${({ theme }) => theme.spacing(1)};

  &:hover {
    background-color: ${({ theme, $isCurrentPath }) => $isCurrentPath && theme.palette.primary.main};
    opacity: 0.75;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon) <ListButtonProps>`
  margin-inline: ${({ theme }) => theme.spacing(4, 1)};

  & svg {
    fill: ${({ theme, $isCurrentPath }) => $isCurrentPath ? theme.palette.primary.light : theme.palette.primary.main};
  }
`;

export const StyledListItemText = styled(ListItemText) <ListButtonProps>`
  color: ${({ theme, $isCurrentPath }) => $isCurrentPath ? theme.palette.primary.light : theme.palette.common.black};
  overflow: auto;
  overflow-x: hidden;
`;

export const SignOutButton = styled(StyledListItemButton)`
  background-color: ${({ theme }) => theme.palette.common.black};
  flex: 0;

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.black};
    opacity: 0.75;
  }
`;

export const SignOutIconContainer = styled(ListItemIcon)`
  margin-inline: ${({ theme }) => theme.spacing(4, 1)};
`;

export const SignOutText = styled(StyledListItemText)`
  color: ${({ theme }) => theme.palette.primary.light};
`;

export const HomeIcon = styled(Home)`
  ${drawerIconBaseStyled};
`;

export const CompanyDataIcon = styled(FolderCopy)`
  ${drawerIconBaseStyled};
`;

export const RegisterEmployeesIcon = styled(AddCircle)`
  ${drawerIconBaseStyled};
`;

export const ViewEmployessIcon = styled(Visibility)`
  ${drawerIconBaseStyled};
`;

export const SignOutIcon = styled(MeetingRoom)`
  fill: ${({ theme }) => theme.palette.primary.light};
  ${drawerIconBaseStyled};
`;
