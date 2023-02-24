import type { ICompany } from '@ts/interfaces';

interface ISignIn {
  cnpj: ICompany['cnpj'];
  password: ICompany['password'];
}

export default ISignIn;
