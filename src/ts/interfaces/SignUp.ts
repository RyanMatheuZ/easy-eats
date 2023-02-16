import type ICompany from './Company';

interface ISignUp {
  cnpj: ICompany['cnpj'];
  fantasyName: ICompany['fantasyName'];
  email: ICompany['email'];
  password: ICompany['password'];
  confirmPassword: ICompany['confirmPassword'];
}

export default ISignUp;
