import type { ICompany } from './Company';

export interface ISignUp {
  cnpj: ICompany['cnpj'];
  fantasyName: ICompany['fantasyName'];
  email: ICompany['email'];
  password: ICompany['password'];
  confirmPassword: ICompany['confirmPassword'];
}
