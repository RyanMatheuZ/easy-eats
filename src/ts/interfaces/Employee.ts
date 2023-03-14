import type { IAddress } from '@ts/interfaces';

interface IEmployee {
  _id: string;
  token: string;
  info: IEmployeeInfo;
  address: IAddress;
  company: IEmployeeCompany;
  security: IEmployeeSecurity;
}

interface IEmployeeInfo {
  cpf: string;
  firstName: string;
  surname: string;
  socialName: string;
  email: string;
  cellPhone: string;
  dateOfBirth: Date;
  admissionDate: Date;
  role: string;
}

interface IEmployeeCompany {
  cnpj: string
}

interface IEmployeeSecurity {
  password: string;
  confirmPassword: string;
  accountCreatedAt?: Date;
}

export type { IEmployee, IEmployeeInfo, IEmployeeSecurity, IEmployeeCompany };
