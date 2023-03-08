import type { CSSObject, Theme } from '@mui/material';

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
