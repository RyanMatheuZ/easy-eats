import ICompany from './Company';
import ISignIn from './SignIn';
import ISignUp from './SignUp';

interface IAuthContext {
  company: ICompany | null;
  unauthenticatedRoutes: string[];
  handleSignIn: (signInValues: ISignIn) => Promise<void>;
  handleSignUp: (signUpValues: ISignUp) => Promise<void>;
  handleSignOut: () => void;
}

export default IAuthContext;
