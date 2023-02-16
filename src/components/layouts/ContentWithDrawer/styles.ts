import styled, { css } from 'styled-components';

import {
  styled as MuiStyled,
  Drawer,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { FolderCopy, Home } from '@mui/icons-material';

import { StyledBackButton } from '@components/elements/BackButton/styles';

import { openedMixin, closedMixin } from './utils';

interface ToggleButtonDrawerProps {
  isDrawerOpen: boolean;
}

interface ListButtonProps {
  isCurrentPath: boolean;
}

const drawerIconBaseStyled = css`
  fill: ${({ theme }) => theme.palette.primary.main};
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
  transform: ${({ isDrawerOpen }) => isDrawerOpen ? 'rotate(360deg)' : 'rotate(180deg)'};
  transition: transform 500ms ease-in-out;
`;

export const StyledList = styled(List)`
  padding-bottom: none;
`;

export const StyledListSubheader = styled(ListSubheader)`
  font-size: 1.1rem;
  text-transform: uppercase;
`;

export const StyledListItemButton = styled(ListItemButton) <ListButtonProps>`
  background-color: ${({ theme, isCurrentPath }) => isCurrentPath && theme.palette.primary.main};
  display: flex;
  align-items: flex-start;
  &:hover {
    background-color: ${({ theme, isCurrentPath }) => isCurrentPath && theme.palette.primary.main};
    opacity: 0.75;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon) <ListButtonProps>`
  margin-inline: ${({ theme }) => theme.spacing(4, 1)};
  & svg {
    fill: ${({ theme, isCurrentPath }) => isCurrentPath ? theme.palette.common.white : theme.palette.primary.main};
  }
`;

export const StyledListItemText = styled(ListItemText) <ListButtonProps>`
  color: ${({ theme, isCurrentPath }) => isCurrentPath ? theme.palette.common.white : theme.palette.common.black};
  overflow: auto;
  overflow-x: hidden;
`;

export const HomeIcon = styled(Home)`
  ${drawerIconBaseStyled};
`;

export const CompanyDataIcon = styled(FolderCopy)`
  ${drawerIconBaseStyled};
`;
