import type { IAddress } from '@ts/interfaces';

interface ICompany {
  _id?: string;
  token?: string;
  info?: ICompanyInfo;
  address?: IAddress;
  owner?: ICompanyOwner;
  security?: ICompanySecurity;
}

interface ICompanyInfo {
  cnpj?: string;
  fantasyName?: string;
  corporateName?: string;
  email?: string;
}

interface ICompanyOwner {
  firstName: string;
  surname: string;
  role: string
}

interface ICompanySecurity {
  password?: string;
  confirmPassword?: string;
  accountCreatedAt?: Date;
}

export type { ICompany, ICompanyInfo, ICompanyOwner, ICompanySecurity };
