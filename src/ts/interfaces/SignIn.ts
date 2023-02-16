import type ICompany from './Company';

interface ISignIn {
  cnpj: ICompany['cnpj'];
  password: ICompany['password'];
}

export default ISignIn;
