import { ICompany } from './Company';

export interface IAuthContext {
  company: ICompany | null;
  authenticatedRoutes: string[];
  unauthenticatedRoutes: string[];
  handleSignIn: (company: ICompany) => void;
  handleSignOut: () => void;
}
