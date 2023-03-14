import type { IAuthContext } from '@ts/interfaces';

export const unauthenticatedRoutes: string[] = [
  '/welcome',
  '/sign-in',
  '/sign-up'
];

export const authContextDefaultValues: IAuthContext = {
  company: null,
  unauthenticatedRoutes,
  handleSignIn: () => Promise.resolve(),
  handleSignUp: () => Promise.resolve(),
  handleSignOut: () => null,
};
