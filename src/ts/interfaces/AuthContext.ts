import type { ICompany, ISignIn, ISignUp } from '@ts/interfaces';

interface IAuthContext {
  company: ICompany | null;
  unauthenticatedRoutes: string[];
  handleStoreCompanyData: (key: string, company: ICompany) => void;
  handleSignIn: (signInValues: ISignIn) => Promise<void>;
  handleSignUp: (signUpValues: ISignUp) => Promise<void>;
  handleSignOut: () => void;
}

export default IAuthContext;
