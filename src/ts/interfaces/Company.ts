import type { IAddress, IRating } from '@ts/interfaces';

interface ICompany {
  _id?: string;
  token?: string;
  info?: ICompanyInfo;
  address?: IAddress;
  rating?: IRating;
  owner?: ICompanyOwner;
  security?: ICompanySecurity;
}

interface ICompanyInfo {
  cnpj?: string;
  fantasyName?: string;
  companyName?: string;
  email?: string;
}

interface ICompanyOwner {
  firstName?: string;
  surname?: string;
  cpf?: string;
  role?: string
}

interface ICompanySecurity {
  password?: string;
  confirmPassword?: string;
  accountCreatedAt?: Date;
}

export type { ICompany, ICompanyInfo, ICompanyOwner, ICompanySecurity };
