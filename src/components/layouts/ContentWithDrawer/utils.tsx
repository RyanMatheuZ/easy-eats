import type { CSSObject, Theme } from '@mui/material';

import { CompanyDataIcon } from './styles';

interface ListItems {
  subHeader: string;
  items: {
    icon: JSX.Element;
    label: string;
    path: string;
  }[];
}

export const basePath = '/admin';

export const listItems: ListItems[] = [
  {
    subHeader: 'Empresa',
    items: [
      {
        icon: <CompanyDataIcon />,
        label: 'Dados',
        path: `${basePath}/data`
      }
    ]
  }
];

export const openedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  width: '25%',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })
});

export const closedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  width: '8%',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
});
