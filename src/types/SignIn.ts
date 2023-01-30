import type { ICompany } from './Company';

export interface ISignIn {
  cnpj: ICompany['cnpj'];
  password: ICompany['password'];
}
