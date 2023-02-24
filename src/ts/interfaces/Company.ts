import type { IAddress, ICompanyOwner } from '@ts/interfaces';

interface ICompany {
  _id?: string;
  token?: string;
  cnpj?: string;
  fantasyName?: string;
  corporateName?: string;
  email?: string;
  password?: string;
  confirmPassword?: ICompany['password'];
  address?: IAddress;
  owner?: ICompanyOwner;
  accountCreatedAt?: Date;
}

export default ICompany;
